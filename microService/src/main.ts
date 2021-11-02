import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { Transport } from '@nestjs/microservices';


const microServiceOptions = {
  //first edit create micro service
  name:"user",
  transport:Transport.GRPC,
  options: {
    // url: 'http://localhost:6379',
    host: '127.0.0.1',
    port : 8129,
    package: 'user',
    protoPath: join(__dirname, '../../proto/user.proto'),

  },
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microServiceOptions)

  //app.listen(() => {
  //  logger.log('microservice is running')
  //})
  await app.listen();
}
bootstrap();
