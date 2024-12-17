"use client";
import { NextPage } from "next";
import { motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";

const MotionTest: NextPage = () => {
  const xMotionValue = useMotionValue(0);
  useMotionValueEvent(xMotionValue, "change", (v) => console.log(v));
  
  //-200~200 사이의 x 값에 대해 높이 변환 설정
  const transformedValue = useTransform(xMotionValue, [-200, 0, 200], [0, 100, 0]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <motion.div
        style={{
          x: xMotionValue,
          height: transformedValue,
        }}
        drag="x"
        className="px-4 py-2 rounded-md bg-blue-400"
      >
        {"Hello"}
      </motion.div>
    </div>
  );
};

export default MotionTest;
