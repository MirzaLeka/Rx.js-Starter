import { HttpDelayInterceptor } from './http-delay.interceptor';

describe('HttpDelayInterceptor', () => {
  it('should be defined', () => {
    expect(new HttpDelayInterceptor()).toBeDefined();
  });
});
