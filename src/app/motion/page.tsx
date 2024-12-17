"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";

const MotionTest: NextPage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100, // 시작 위치를 왼쪽으로 100px 이동
      }}
      whileInView={{
        opacity: 1,
        x: 0, // 최종 위치를 원래대로
      }}
      transition={{
        duration: 2, // 애니메이션 지속 시간 설정
      }}
      drag="x" // 드래그 가능 (X축)
      className="px-4 py-4 rounded-md bg-blue-300"
    >
      {"hello"}
    </motion.div>
  );
};

export default MotionTest;
