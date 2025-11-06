import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExperienceDto } from './dto/create-experience.dto';

@Injectable()
export class ExperienceService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createExperienceDto: CreateExperienceDto) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    // Convert date strings to Date objects
    const data = {
      ...createExperienceDto,
      startDate: new Date(createExperienceDto.startDate),
      endDate: createExperienceDto.endDate ? new Date(createExperienceDto.endDate) : undefined,
      profileId: profile.id,
    };

    return this.prisma.experience.create({
      data,
    });
  }

  async update(userId: string, experienceId: string, updateData: Partial<CreateExperienceDto>) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    const experience = await this.prisma.experience.findFirst({
      where: { id: experienceId, profileId: profile.id },
    });

    if (!experience) {
      throw new NotFoundException('Experience not found');
    }

    // Convert date strings to Date objects if present
    const data: any = { ...updateData };
    if (data.startDate) {
      data.startDate = new Date(data.startDate);
    }
    if (data.endDate) {
      data.endDate = new Date(data.endDate);
    }

    return this.prisma.experience.update({
      where: { id: experienceId },
      data,
    });
  }

  async delete(userId: string, experienceId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    const experience = await this.prisma.experience.findFirst({
      where: { id: experienceId, profileId: profile.id },
    });

    if (!experience) {
      throw new NotFoundException('Experience not found');
    }

    return this.prisma.experience.delete({
      where: { id: experienceId },
    });
  }
}