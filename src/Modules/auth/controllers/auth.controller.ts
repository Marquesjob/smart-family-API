import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services';
import { SignInDto } from '../dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    async signIn(
        @Body() signInDto: SignInDto
    ) {

        return await this.authService.signIn(signInDto);

    }

}
