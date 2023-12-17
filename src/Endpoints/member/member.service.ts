import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusEntity, ExpensesEntity, MembersEntity } from 'src/Repository';
import { Repository } from 'typeorm';

@Injectable()
export class MemberService {
  
  constructor(
    @InjectRepository(StatusEntity)
    private memberRepository: Repository<StatusEntity>,
  ) {}
  
  getHello(): string {
    return 'Hello World!';
  }

  findAll(): Promise<any[]> {

    return this.memberRepository.find({
    
      relations: {
        monitoring: true
      }
    });
  }

  // findOne(id: number): Promise<MembersEntity | null> {
  //   return this.memberRepository.findOneBy({ id });
  // }

  // async remove(id: number): Promise<void> {
  //   await this.memberRepository.delete(id);
  // }

}
