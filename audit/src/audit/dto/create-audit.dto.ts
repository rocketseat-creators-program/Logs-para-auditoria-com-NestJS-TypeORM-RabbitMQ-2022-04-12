import {
  IsDefined,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAuditDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  reference: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  method: string;

  @IsObject()
  @IsOptional()
  old?: any;

  @IsObject()
  @IsDefined()
  @IsNotEmpty()
  new: any;
}
