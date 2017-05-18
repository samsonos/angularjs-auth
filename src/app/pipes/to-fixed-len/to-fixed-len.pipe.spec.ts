import { ToFixedLenPipe } from './to-fixed-len.pipe';

describe('ToFixedLenPipe', () => {
  it('create an instance', () => {
    const pipe = new ToFixedLenPipe();
    expect(pipe).toBeTruthy();
  });
});
