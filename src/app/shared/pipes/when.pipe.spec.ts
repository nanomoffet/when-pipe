import { WhenPipe } from './when.pipe';

describe('WhenPipe', () => {
  let pipe: WhenPipe;

  beforeEach(() => {
    pipe = new WhenPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
