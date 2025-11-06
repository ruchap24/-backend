import { IsString, IsOptional, IsUrl } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  headline?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  about?: string;

  @IsUrl()
  @IsOptional()
  photoUrl?: string;
}