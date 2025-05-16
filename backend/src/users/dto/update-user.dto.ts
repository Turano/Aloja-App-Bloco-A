import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { UserRole } from '@prisma/client';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'João Silva' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'joao@example.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: 'newPassword123' })
  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @ApiPropertyOptional({ enum: UserRole, example: UserRole.USER })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
