import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {GrpcMethod} from "@nestjs/microservices";
import {Metadata, ServerUnaryCall} from "@grpc/grpc-js";
import {DeleteDto, UserDto} from "./user/user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


}
