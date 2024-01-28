import { Controller, Get, Param } from '@nestjs/common';
import { MembersService } from '../services/members.service';
import { MembersEntity } from 'src/Repository';

@Controller(['members'])
export class MemberController {

  constructor(private readonly memberService: MembersService) { }

  @Get('/:id')
  async getMember(
    @Param('id') id: any
  ): Promise<MembersEntity> {

    return await this.memberService.getMember(id);

  }

}
