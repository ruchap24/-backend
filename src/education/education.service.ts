import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEducationDto } from './dto/create-education.dto';

@Injectable()
export class EducationService {
  constructor(private prisma: PrismaService) {}

  async create(createEducationDto: CreateEducationDto, userId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return this.prisma.education.create({
      data: {
        profileId: profile.id,
        school: createEducationDto.school,
        degree: createEducationDto.degree,
        field: createEducationDto.field,
        startDate: new Date(createEducationDto.startDate),
        endDate: createEducationDto.endDate ? new Date(createEducationDto.endDate) : null,
        current: createEducationDto.current || false,
        description: createEducationDto.description,
      },
    });
  }

  async delete(educationId: string, userId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return this.prisma.education.delete({
      where: {
        id: educationId,
        profileId: profile.id,
      },
    });
  }
}