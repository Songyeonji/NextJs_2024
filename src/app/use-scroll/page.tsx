"use client"

import React, { useRef } from "react"
import { useScroll, animated, SpringValue } from "@react-spring/web"

export default function Page() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollY, scrollYProgress } = useScroll()

  return (
    <div
      ref={ref}
      className="w-full h-[2000px] flex justify-center items-center overflow-y-hidden"
    >
      {/* 프로그레스 바 */}
      <animated.div
        style={{
          width: scrollYProgress.to((val) => `${val * 100}%`),
        }}
        className="h-5 bg-pink-400 fixed top-0 left-0"
      />

      {/* 스크롤 정보 */}
      <div className="flex flex-col space-y-6 fixed top-5 right-4 bg-white p-2 rounded-lg shadow-md">
        <animated.span className="text-lg">
        {scrollY.to((v: number) => v.toFixed(0))}
        </animated.span>
        <animated.span className="text-lg">
        {scrollYProgress.to((v: number) => v.toFixed(2))}
        </animated.span>
      </div>
    </div>
  )
}