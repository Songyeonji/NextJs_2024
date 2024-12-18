"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export default function Page() {

  const smoothY = useSpring(0, {
    damping: 15
  });

  const { scrollYProgress  } = useScroll({
    offset: ["start start", "end end"],
  });
  
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {//스크롤 위치가 변할 때마다 이벤트를 감지
      smoothY.set(latest);//감지된 새로운 스크롤 값을 smoothY에 설정
    });
  }, [scrollYProgress, smoothY]);
  
  const textY = useTransform(
    scrollYProgress ,
    [0.7, 0.75],
    ["100%", "0%"]
  );

  return (
    <div className="relative w-full h-[3000px]">
      <div className="fixed inset-0 flex items-center justify-center">
        <motion.div
          className="bg-orange-400"
          style={{
            position: "absolute",
            inset: 0, // 부모 컨테이너에 꽉 채움
            // 스크롤 진행도에 따라 원형 clip-path 조절
            clipPath: useTransform(
              scrollYProgress ,
              (value) => `circle(${value * 100}%)`
            ),
          }}
        >
          <div className="h-full flex flex-col p-5 items-start justify-start text-blue-600 text-4xl font-bold overflow-hidden">
            <div className="overflow-hidden h-[40px] mb-2">
              <motion.div style={{ y: textY }}
               transition={{ duration: 1.2 }}>
                <div>Aha!</div>
              </motion.div>
            </div>
            <div className="overflow-hidden h-[40px]">
              <motion.div style={{ y: textY }}
               transition={{ duration: 1.2 }}>
                <div>You found me!</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
