import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from '../../database/notifications.entity'
import CreateNotificationDto from './dto/create-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private notificationRepo: Repository<Notification>,
  ) {}

  async findById(id: number): Promise<Notification> {
    const result = await this.notificationRepo.findOne(id);
    console.log(result);
    return result;
  }

  async findAll(): Promise<Notification[]> {
    const result = await this.notificationRepo.find();
    console.log(result);
    return result;
  }

  async create(notification: CreateNotificationDto): Promise<void> {
    const newNotification = new Notification();
    newNotification.title = notification.title;
    newNotification.description = notification.description;
    const result = await this.notificationRepo.insert(newNotification);
    console.log(result);
  }
}