import { Injectable } from '@nestjs/common';
import { AuditService } from 'src/audit/audit.service';
import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { Streamer } from './entities/streamer.entity';

@Injectable()
@EventSubscriber()
export class StreamerSubscriber implements EntitySubscriberInterface<Streamer> {
  constructor(connection: Connection, private auditService: AuditService) {
    connection.subscribers.push(this);
  }

  listenTo(): any {
    return Streamer;
  }

  afterInsert(event: InsertEvent<Streamer>) {
    console.log(`AFTER ENTITY INSERTED: `);
    this.auditService.publish({
      reference: 'streamer',
      method: 'AFTER_INSERT',
      old: {},
      new: event.entity,
    });
  }

  afterUpdate(event: UpdateEvent<Streamer>) {
    console.log(`AFTER ENTITY UPDATED: `);
    this.auditService.publish({
      reference: 'streamer',
      method: 'AFTER_UPDATE',
      old: event.entity,
      new: event.databaseEntity,
    });
  }

  afterRemove(event: RemoveEvent<Streamer>) {
    console.log(`AFTER ENTITY WITH ID ${event.entityId} REMOVED: `);

    this.auditService.publish({
      reference: 'streamer',
      method: 'AFTER_REMOVE',
      old: event.databaseEntity,
      new: {},
    });
  }
}
