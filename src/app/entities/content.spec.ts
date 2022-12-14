import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a new notification content', () => {
    const content = new Content('Nova notificação');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a new notification content with less than 5 characters', () => {
    expect(() => new Content('sss')).toThrow();
  });

  it('should not be able to create a new notification content with more than 240 characters', () => {
    expect(() => new Content('s'.repeat(300))).toThrow();
  });
});
