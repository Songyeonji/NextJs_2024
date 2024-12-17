"use client" // Next.js에서 클라이언트 사이드 렌더링을 위한 지시어

// 필요한 라이브러리와 훅 가져오기
import { useSpring, animated } from "@react-spring/web"; // 애니메이션 관련 기능
import { useState, useRef } from "react"; // React 훅
import { NextPage } from "next"; // Next.js 타입

const UseSpring: NextPage = () => {
  // DOM 요소 참조를 위한 ref 생성 (너비값을 얻기 위해)
  const configDivRef = useRef<HTMLDivElement>(null);
  
  // 토글 상태를 관리하는 state
  const [configOpen, setConfigOpen] = useState<boolean>(false);

  // react-spring 애니메이션 설정
  const props = useSpring({
    // configOpen이 true면 div의 실제 너비값, false면 0
    width: configOpen ? configDivRef.current?.clientWidth : 0,
  });

  return (
    <div className="flex flex-col">
      <p>{"Config"}</p>
      
      {/* 현재 너비값을 표시 */}
      <animated.p>
        {/* props.width의 값(x)을 실시간으로 표시 */}
        {props.width?.to((x) => x)}
      </animated.p>

      {/* 메인 컨테이너 */}
      <div 
        ref={configDivRef} // 너비값을 측정할 요소
        className="w-[200px] h-[100px] outline outline-1 outline-neutral-700 cursor-pointer relative"
        onClick={() => setConfigOpen((prev) => !prev)} // 클릭시 상태 토글
      >
        {/* 애니메이션되는 핑크색 배경 */}
        <animated.div
          className="absolute h-full bg-pink-400"
          style={props} // 너비 애니메이션 적용
        />
        
        {/* 중앙에 위치한 너비값 표시 */}
        <animated.div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        >
          {/* 현재 너비값을 정수로 변환하여 표시 */}
          {props.width?.to((x) => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  );
};

export default UseSpring;