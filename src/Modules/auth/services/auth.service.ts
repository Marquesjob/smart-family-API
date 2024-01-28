import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MembersService } from 'src/Modules/members';
import { SignInDto } from '../dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

constructor(

    private membersService: MembersService,

    private jwtService: JwtService

  ) { }

  async signIn(signInDto: SignInDto): Promise<any> {

    const user = await this.membersService.returnToLogin(signInDto);

    if (user?.password !== signInDto.password) {

      throw new UnauthorizedException();

    }

    const payload = { sub: user.id, username: user.username };

    return {

      access_token: await this.jwtService.signAsync(payload)

    };
    
  
  }

  //TODO - Implementar cadastro de usuários com *hash nas senhas*

}
