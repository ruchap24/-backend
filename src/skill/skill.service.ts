import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSkillDto } from './dto/create-skill.dto';

@Injectable()
export class SkillService {
  constructor(private prisma: PrismaService) {}

  async create(createSkillDto: CreateSkillDto, userId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return this.prisma.skill.create({
      data: {
        profileId: profile.id,
        name: createSkillDto.name,
      },
    });
  }

  async delete(skillId: string, userId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return this.prisma.skill.delete({
      where: {
        id: skillId,
        profileId: profile.id,
      },
    });
  }
}