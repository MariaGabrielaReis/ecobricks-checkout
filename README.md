# EcoBricks [![license](https://img.shields.io/badge/LICENCE-MIT-blue)]() [![status](https://img.shields.io/badge/STATUS-DONE-brightgreen)]()

> Application developed in "Imersão Full Stack && Full Cycle" event, promoted by Full Cycle 🚀

**EcoBricks** is an e-commerce that sells different types of bricks, such as ecological ones! 🧱

<details>
  <summary>✨ <b>Features (of this repo)</b> </summary>

- [x] Create order
- [x] List order
  - [x] All
  - [x] By ID
- [x] Authentication (generate token JWT)
- [x] Order creation event publishing in RabbitMQ

</details>

> [!TIP]
> Visit [demo]() or the others repositories of this project:
>
> - **Frontend**: [@MariaGabrielaReis/ecobricks-web](https://github.com/MariaGabrielaReis/ecobricks-web) - `Next, Typescript, React Hook Form, Yup`
> - **API Catalog**: [@MariaGabrielaReis/ecobricks-product-catalog](https://github.com/MariaGabrielaReis/ecobricks-product-catalog) - `Go, MySQL, Docker`
> - **API Payment**: [@MariaGabrielaReis/ecobricks-payment](https://github.com/MariaGabrielaReis/ecobricks-payment) - `Go, RabbitMQ, Docker`

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![RabbitMQ](https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)

<div align="center">
  <img alt="EcoBricks" src="" />
</div>

## Building and running locally

Be sure you have [Git](https://git-scm.com/downloads), [Docker](https://www.docker.com/) and [Node](https://nodejs.org/en) configurated, then follow the directions below.

```bash
# Clone this repository
$ git clone https://github.com/MariaGabrielaReis/ecobricks-checkout

# Access project folder
$ cd ecobricks-checkout

# Install dependencies
$ yarn
```

> [!IMPORTANT]
> Before running the project, set up the container with database:
>
> ```bash
> $ docker-compose up -d
> ```
>
> Now, access database with root user and check if database was created:
>
> ```bash
> $ docker-compose exec db dash
> $ mysql -uroot -proot
> $ show databases;
> ```

```bash
# Generate fixtures
$ yarn run fixture

# Run
$ yarn start:dev
```

> [!NOTE]
> The server will start on port 3333 - <http://localhost:3333> <br>
>
> - For quick API testing, use `test.http` file to send requests with the VSCode "REST Client" extension.
