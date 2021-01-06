import { Controller, Body, Get, Param, Post } from '@nestjs/common';
import CreateNotificationDto from './dto/create-notification.dto';
import GetNotificationDto from './dto/get-notification.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService){ }

  @Get()
  async getAll(): Promise<GetNotificationDto[]> {
    const result = await this.notificationsService.findAll();
    console.log(result);
    return result;
  }

  @Post()
  async create(@Body() newNotification: CreateNotificationDto): Promise<void> {
    const result = await this.notificationsService.create(newNotification);
    console.log(result);
    return result;
  }
}
