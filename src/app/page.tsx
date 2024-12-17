"use client"
import { useSpring, animated } from "@react-spring/web";
import { useState, useRef } from "react";
import { NextPage } from "next";  // NextPage 타입 import 추가

const UseSpring: NextPage = () => {
  const configDivRef = useRef<HTMLDivElement>(null);
  const [configOpen, setConfigOpen] = useState<boolean>(false);  // Boolean -> boolean

  const props = useSpring({
    width: configOpen ? configDivRef.current?.clientWidth : 0,
  });

  return (
    <div className="flex flex-col">
      <p>{"Config"}</p>
      <animated.p>{props.width?.to((x) => x)}</animated.p>
      <div 
        ref={configDivRef}
        className="w-[200px] h-[100px] outline outline-1 outline-neutral-700 cursor-pointer relative"
        onClick={() => setConfigOpen((prev) => !prev)}  // 중괄호 수정
      >
        <animated.div  
          className={"absolute h-full bg-pink-400"}
          style={props}
        />
        <animated.div  
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        >
          {props.width?.to((x) => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  );
};

export default UseSpring;  // export 추가