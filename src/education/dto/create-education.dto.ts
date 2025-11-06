import { IsString, IsOptional, IsDateString, IsBoolean } from 'class-validator';

export class CreateEducationDto {
  @IsString()
  school: string;

  @IsString()
  degree: string;

  @IsString()
  @IsOptional()
  field?: string;

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