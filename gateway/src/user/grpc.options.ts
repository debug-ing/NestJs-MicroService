import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

// Same options object used by microservice server
export const microserviceOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: '127.0.0.1:8123',
        package: 'hero',
        protoPath: join(__dirname, '../../../proto/user.proto'),
    },
};