import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Audit } from './audit.entity';

@Injectable()
export class AuditService {
  constructor(@Inject('AUDIT_SERVICE') private client: ClientProxy) {}

  publish(data: Audit) {
    this.client.emit({ cmd: 'audit' }, data);
  }
}
