import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a new notification', () => {
    const newNotificaion = new Notification({
      content: new Content('Nova notificação'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(newNotificaion).toBeTruthy();
  });
});
