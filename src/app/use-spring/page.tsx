// app/use-spring/page.tsx
'use client'

import { useSpring, animated } from "@react-spring/web";
import { useState, useRef } from "react";

// app 라우터에서는 NextPage 타입을 사용하지 않아도 됩니다
export default function UseSpringPage() {
  // DOM 요소 참조를 위한 ref 생성
  const configDivRef = useRef<HTMLDivElement>(null);
  
  // 토글 상태를 관리하는 state
  const [configOpen, setConfigOpen] = useState<boolean>(false);
  
  // react-spring 애니메이션 설정
  const props = useSpring({
    width: configOpen ? configDivRef.current?.clientWidth : 0,
  });
  
  return (
    <div className="flex flex-col">
      <p>{"Config"}</p>
      
      {/* 현재 너비값을 표시 */}
      <animated.p>
        {props.width?.to((x) => x)}
      </animated.p>
      
      {/* 메인 컨테이너 */}
      <div 
        ref={configDivRef}
        className="w-[200px] h-[100px] outline outline-1 outline-neutral-700 cursor-pointer relative"
        onClick={() => setConfigOpen((prev) => !prev)}
      >
        {/* 애니메이션되는 핑크색 배경 */}
        <animated.div
          className="absolute h-full bg-pink-400"
          style={props}
        />
        
        {/* 중앙에 위치한 너비값 표시 */}
        <animated.div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        >
          {props.width?.to((x) => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  );
}