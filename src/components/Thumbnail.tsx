/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useLottie, useLottieInteractivity } from 'lottie-react'
import { useRef } from 'react'

interface Props {
  anim: any
  mobileOffset: number
  desktopOffset: number
}

export default function Thumbnail({ anim }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  const options = {
    animationData: anim,
    loop: false,
    autoplay: false
  }

  const lottieObj = useLottie(options)

  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 1],
        type: 'seek',
        frames: [0, 120]
      }
    ]
  })

  return (
    <div
      ref={containerRef}
      onClick={() => navigator.vibrate(20)}
      className="aspect-video rounded-[22px] border-[3px] border-[#ede8d080] box-content relative p-3"
    >
      {Animation}
    </div>
  )
}
