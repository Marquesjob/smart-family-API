import { Module } from '@nestjs/common';

import { AuthController } from './controllers';
import { AuthService } from './services';
import { MembersModule } from '../members';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config'

@Module({
    imports: [
        MembersModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET
          })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
