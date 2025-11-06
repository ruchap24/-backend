import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ExperienceModule } from './experience/experience.module';
import { EducationModule } from './education/education.module';
import { SkillModule } from './skill/skill.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    ProfileModule,
    ExperienceModule,
    EducationModule,
    SkillModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
