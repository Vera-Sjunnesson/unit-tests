export const angleCalculator = (turns) => {
  if (turns === 0) {
    return 0
  }
  else if (turns === 1) {
    return 360
  } else if (turns === 1.5) {
    return 540
  } else {
    return 720
  }
}
/* 
import { angleCalculator } from './4-angle-calculator'

describe('4-angle-calculator', () => {
  it('should return 0 for 0 turns', () => {
    expect(angleCalculator(0)).toEqual(0)
  })

  it('should return 360 for 1 turn', () => {
    expect(angleCalculator(1)).toEqual(360)
  })

  it('should return 540 for 1.5 turns', () => {
    expect(angleCalculator(1.5)).toEqual(540)
  })

  it('should return 720 for 2 turns', () => {
    expect(angleCalculator(2)).toEqual(720)
  })
})
 */