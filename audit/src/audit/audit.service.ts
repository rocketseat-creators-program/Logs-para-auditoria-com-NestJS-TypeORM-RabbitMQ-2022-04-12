import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuditDto } from './dto/create-audit.dto';
import { Audit } from './entities/audit.entity';

@Injectable()
export class AuditService {
  constructor(
    @InjectRepository(Audit)
    private repository: Repository<Audit>,
  ) {}

  async create(data: CreateAuditDto): Promise<Audit> {
    return await this.repository.save(data);
  }

  async findAll(): Promise<Audit[]> {
    return await this.repository.find();
  }
}
