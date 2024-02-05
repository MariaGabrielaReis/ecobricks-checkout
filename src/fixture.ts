import { NestFactory } from '@nestjs/core';
import { getDataSourceToken } from '@nestjs/typeorm';

import { DataSource } from 'typeorm';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: '7f8c9d8e-9f0a-1b2c-3d4e-5f6g7h8i9j0k',
      name: 'Tijolo Maciço',
      description: 'Tijolo do tipo Maciço',
      price: 200,
      image_url: 'http://localhost:9000/products/1.png',
    },
    {
      id: '66805003-f9a2-4772-b577-d5ff66207707',
      name: 'Tijolo Laminado',
      description: 'Tijolo do tipo Laminado',
      price: 200,
      image_url: 'http://localhost:9000/products/2.png',
    },
    {
      id: '121829b9-e9f9-4ca9-bd14-b087afedd587',
      name: 'Tijolo Refratário',
      description: 'Tijolo do tipo Refratário',
      price: 200,
      image_url: 'http://localhost:9000/products/3.png',
    },
    {
      id: '121829b9-e9f9-4ca9-bd14-b087afedd587',
      name: 'Tijolo Baiano',
      description: 'Tijolo do tipo Baiano',
      price: 200,
      image_url: 'http://localhost:9000/products/4.png',
    },
    {
      id: '121829b9-e9f9-4ca9-bd14-b087afedd587',
      name: 'Tijolo Lajota',
      description: 'Tijolo do tipo Lajota',
      price: 200,
      image_url: 'http://localhost:9000/products/5.png',
    },
    {
      id: '121829b9-e9f9-4ca9-bd14-b087afedd587',
      name: 'Tijolo Bloco decorativo',
      description: 'Tijolo do tipo Bloco decorativo',
      price: 200,
      image_url: 'http://localhost:9000/products/6.png',
    },
    {
      id: '61c176d5-f4f9-4fbd-a892-41058422868e',
      name: 'Tijolo Ecológico (1 furo)',
      description: 'Tijolo do tipo Ecológico, com 1 furo',
      price: 200,
      image_url: 'http://localhost:9000/products/7.png',
    },
    {
      id: 'ed394062-14bc-4ff2-bf43-a77473322171',
      name: 'Tijolo Ecológico (2 furos)',
      description: 'Tijolo do tipo Ecológico, com 2 furos',
      price: 200,
      image_url: 'http://localhost:9000/products/8.png',
    },
  ]);

  await app.close();
}
bootstrap();
