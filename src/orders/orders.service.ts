import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Product } from '../products/entities/product.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async create(createOrderDto: CreateOrderDto & { client_id: number }) {
    const productIds = createOrderDto.items.map((item) => item.product_id);
    const uniqueProductIds = [...new Set(productIds)];
    const products = await this.productRepo.findBy({
      id: In(uniqueProductIds),
    });

    if (products.length !== uniqueProductIds.length) {
      throw new Error(
        `Some product doesn't exist. Products: ${productIds}, find products: ${products.map(
          (product) => product.id,
        )}`,
      );
    }

    const order = Order.create({
      client_id: createOrderDto.client_id,
      items: createOrderDto.items.map((item) => {
        const product = products.find(
          (product) => product.id === item.product_id,
        );
        return {
          price: product.price,
          product_id: item.product_id,
          quantity: item.quantity,
        };
      }),
    });
    await this.orderRepo.save(order);

    return order;
  }

  findAll(client_id: number) {
    return this.orderRepo.find({
      where: { client_id },
      order: { created_at: 'DESC' },
    });
  }

  findOne(id: string, client_id: number) {
    return this.orderRepo.findOneByOrFail({ id, client_id });
  }
}
