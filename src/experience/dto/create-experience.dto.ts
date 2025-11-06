import { IsString, IsOptional, IsBoolean, IsDateString } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  title: string;

  @IsString()
  company: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;

  @IsBoolean()
  @IsOptional()
  current?: boolean;

  @IsString()
  @IsOptional()
  description?: string;
}