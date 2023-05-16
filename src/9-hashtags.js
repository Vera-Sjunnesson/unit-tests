export const hashtags = (text) => {
  const pattern = /#[^\s#]+/gi;
  const matches = text.match(pattern);
  return matches || [];
};

/* import { hashtags } from './9-hashtags'

describe('9-hashtags', () => {
  it('should return all hashtags from a sentence', () => {
    expect(hashtags('Hello #world this is a #string with #hashtags')).toEqual(['#world', '#string', '#hashtags'])
  })
}) */
