import { Controller, Post, Body, UseGuards, Req, Get, Param, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';

@Controller('skill')
@UseGuards(JwtAuthGuard)
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  create(@Req() req: any, @Body() createSkillDto: CreateSkillDto) {
    return this.skillService.create(createSkillDto, req.user.id);
  }


  @Delete(':id')
  delete(@Req() req: any, @Param('id') id: string) {
    return this.skillService.delete(id, req.user);
  }
}