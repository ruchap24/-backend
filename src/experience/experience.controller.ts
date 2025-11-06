import { Controller, Post, Patch, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('experience')
@UseGuards(JwtAuthGuard)
export class ExperienceController {
  constructor(private experienceService: ExperienceService) {}

  @Post()
  create(@Request() req, @Body() createExperienceDto: CreateExperienceDto) {
    return this.experienceService.create(req.user.id, createExperienceDto);
  }

  @Patch(':id')
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateData: Partial<CreateExperienceDto>,
  ) {
    return this.experienceService.update(req.user.id, id, updateData);
  }

  @Delete(':id')
  delete(@Request() req, @Param('id') id: string) {
    return this.experienceService.delete(req.user.id, id);
  }
}