"use client";

import { NextPage } from "next";
import { PropsWithChildren, use, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// const { ref, inView, entry } = useInView({
//     triggerOnce: true,
//     rootMargin: "-100px",
//   });

//   useEffect(() => {
//     console.log(entry?.target.innerHTML);
//   }, [inView]);

//   const styles = inView
//     ? "opacity-100 translate-y-0"
//     : "opacity-0 translate-y-20";

{
  /* <div ref={ref} className={`${styles} transition-all`}>
            <h1 className="text-4xl font-bold">{title}</h1>
          </div> */
}

const Text: React.FC<{ title: string }> = ({ title }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const styles = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-20";

  return (
    <div ref={ref} className={`${styles} transition-all duration-1000`}>
      <span className="text-4xl font-bold">{title}</span>
    </div>
  );
};

const PAGE_TITLES = ["Don't", "you", "Just", "Hate", "Popups?"];
const ReactIntersectionObserverPage: NextPage = () => {
  return (
    <>
      <div className="fixed border-4 border-red-400 top-0 left-0 right-0 bottom-[100px]"></div>
      <div>
        {PAGE_TITLES.map((title, index) => (
          <div
            className="h-screen flex justify-center items-center"
            key={index}
          >
            <Text title={title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ReactIntersectionObserverPage;