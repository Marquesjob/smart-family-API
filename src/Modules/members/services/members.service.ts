import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInDto } from 'src/Modules/auth/dto';
import { StatusEntity, ExpensesEntity, MembersEntity } from 'src/Repository';
import { Repository } from 'typeorm';

@Injectable()
export class MembersService {
  
  constructor(
    @InjectRepository(MembersEntity)
    private memberRepository: Repository<MembersEntity>,
  ) {}
  
  async returnToLogin(signInDto: SignInDto) {

    const { username } = signInDto;

    const member_data = await this.memberRepository.findOne({
      where: [{username: username}]
    });

    return member_data;

  }

  async getMember(id: any): Promise<MembersEntity> {

    const member_data = await this.memberRepository.findOne({
      where: [{id: id}],
      relations: {
        monitoring: true
      }

    });

    return member_data;

  }

}
