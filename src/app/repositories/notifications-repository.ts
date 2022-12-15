import { Notification } from '@app/entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: String): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
}
