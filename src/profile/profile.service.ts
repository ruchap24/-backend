import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
      include: {
        experiences: { orderBy: { startDate: 'desc' } },
        educations: { orderBy: { startDate: 'desc' } },
        skills: true,
      },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return profile;
  }

  async getPublicProfile(profileId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { id: profileId },
      include: {
        experiences: { orderBy: { startDate: 'desc' } },
        educations: { orderBy: { startDate: 'desc' } },
        skills: true,
      },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return profile;
  }

  async getAllProfiles() {
    return this.prisma.profile.findMany({
      include: {
        user: {
          select: { email: true },
        },
      },
    });
  }

  async updateProfile(userId: string, updateProfileDto: UpdateProfileDto) {
    return this.prisma.profile.update({
      where: { userId },
      data: updateProfileDto,
    });
  }
}