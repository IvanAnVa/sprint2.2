import { throttle } from './sprint2.2'

describe('throttle', () => {
  let mockFn: jest.Mock;
  let throttledFn: () => void;

  beforeEach(() => {
    mockFn = jest.fn();
    throttledFn = throttle(mockFn, 1000);
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('debería llamar a la función inmediatamente', () => {
    throttledFn();
    expect(mockFn).toBeCalled();
  });

  it('no debería llamar a la función nuevamente dentro del intervalo de tiempo', () => {
    throttledFn();
    throttledFn();
    expect(mockFn).toBeCalledTimes(1);
  });

  it('debería llamar a la función nuevamente después del intervalo de tiempo', () => {
    throttledFn();
    jest.advanceTimersByTime(1000);
    throttledFn();
    expect(mockFn).toBeCalledTimes(2);
  });
});
