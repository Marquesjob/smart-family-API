import { Controller, Get } from '@nestjs/common';
import { MemberService } from './member.service';
import { MembersEntity } from 'src/Repository';

@Controller(['member'])
export class MemberController {
  constructor(private readonly MemberService: MemberService) {}

  @Get('/')
  findOne(): Promise<MembersEntity[]> {
    return this.MemberService.findAll();
  }

}
