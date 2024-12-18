"use client";  
import { NextPage } from "next"; 
import { useInView } from "react-intersection-observer";  

const PAGE_TITLES = ["Don't", "you", "just", "hate", "popups?"];

const Observer: NextPage = () => {
  const elements = PAGE_TITLES.map((title) => {
    const { ref, inView } = useInView({
      threshold: 0,      // 요소가 1픽셀이라도 보이면 감지
      triggerOnce: false,    // 여러 번 트리거 가능하도록 설정
      initialInView: false,  // 초기 상태는 보이지 않음으로 설정
    });

    return (
      <div 
        key={title} 
        className="h-screen w-full flex justify-center items-center snap-center bg-white"
      >
        <div
          ref={ref}  
          className={`
            transition-all duration-700  // 모든 속성에 0.7초 트랜지션 적용
            ${inView  
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-[50px]" 
            }
          `}
        >
          <h2 className="text-[10vw] font-bold text-black">
            {title}  
          </h2>
        </div>
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-white">
      <main className="h-screen overflow-y-auto snap-y snap-mandatory">
        {elements}
      </main>
    </div>
  );
};

export default Observer;