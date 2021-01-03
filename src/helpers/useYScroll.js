import { useCallback, useEffect } from 'react'
import { useSpring, config } from '@react-spring/core'
import { useGesture } from 'react-use-gesture'
import clamp from 'lodash/clamp'
import { Lethargy } from 'lethargy'

const lethargy = new Lethargy()

export default function useYScroll(bounds, props) {
  const [{ y }, set] = useSpring(() => ({ y: 0, config: config.slow }))
  const fn = useCallback(
    ({ xy: [, cy], previous: [, py], memo = y.get() }) => {
      const newY = clamp(memo + cy - py, ...bounds)
      set({ y: newY })
      return newY
    },
    [bounds, y, set]
  )

  const fnOnWheel = useCallback(
    ({ event, xy: [, cy], previous: [, py], memo = y.get() }) => {
      const s = lethargy.check(event)
      let newY;
      if (s) {
        newY = clamp(memo + event.deltaY, ...bounds)
      } else {
        newY = clamp(memo + cy - py, ...bounds)
      }
      set({ y: newY })
      return newY
    },
    [bounds, y, set]
  )
  // console.log(props.domTarget);
  const bind = useGesture({ onWheel: fnOnWheel, onDrag: fn }, props)
  useEffect(() => props && props.domTarget && bind(), [props, bind])
  return [y, bind]
}
