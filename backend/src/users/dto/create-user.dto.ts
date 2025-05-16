import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsEnum } from 'class-validator';
import { UserRole } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({ example: 'João Silva' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'joao@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'strongPassword123' })
  @IsString()
  password: string;

  @ApiProperty({ enum: UserRole, example: UserRole.USER, required: false })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
