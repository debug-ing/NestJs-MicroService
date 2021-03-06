import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
      UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
