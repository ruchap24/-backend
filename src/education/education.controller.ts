import { Controller, Post, Body, UseGuards, Req, Get, Param, Delete, Put } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';

@Controller('education')
@UseGuards(JwtAuthGuard)
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  create(@Req() req: any, @Body() createEducationDto: CreateEducationDto) {
    return this.educationService.create(createEducationDto, req.user.id);
  }
  @Delete(':id')
  delete(@Req() req: any, @Param('id') id: string) {
    return this.educationService.delete(id, req.user);
  }
}