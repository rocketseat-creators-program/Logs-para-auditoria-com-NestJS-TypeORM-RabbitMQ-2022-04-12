import { Controller, Get, Post, Body } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { AuditService } from './audit.service';
import { CreateAuditDto } from './dto/create-audit.dto';
import { Audit } from './entities/audit.entity';

@Controller('audit')
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Post()
  create(@Body() data: CreateAuditDto): Promise<Audit> {
    return this.auditService.create(data);
  }

  @Get()
  findAll(): Promise<Audit[]> {
    return this.auditService.findAll();
  }

  @MessagePattern({ cmd: 'audit' })
  getNotifications(
    @Payload() data: CreateAuditDto,
    @Ctx() context: RmqContext,
  ) {
    this.auditService.create(data);
  }
}
