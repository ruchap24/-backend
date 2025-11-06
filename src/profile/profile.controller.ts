import { Controller, Get, Patch, Body, UseGuards, Request, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMyProfile(@Request() req) {
    return this.profileService.getProfile(req.user.id);
  }

  @Get('all')
  getAllProfiles() {
    return this.profileService.getAllProfiles();
  }

  @Get(':id')
  getPublicProfile(@Param('id') id: string) {
    return this.profileService.getPublicProfile(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('me')
  updateProfile(@Request() req, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.updateProfile(req.user.id, updateProfileDto);
  }
}