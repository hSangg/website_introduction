"use client";

import { textAnimate } from "@/utils/farmerMotionTemplete";
import { motion } from "framer-motion";

const TargetWeb = () => {
  return (
    <div className="mt-10">
      <div className="li-do-chon-de-tai h-[1500px] w-full relative">
        <h1
          className="z-10 mt-10
          mix-blend-exclusion pointer-events-none
        sticky top-[50%] text-center text-5xl left-1/2 -translate-x-1/2
        translate-y-[-50%] uppercase font-[700]
        bg-white/10 backdrop-blur-md inline-block
        "
        >
          Mục tiêu dự án
        </h1>

        <motion.div
          whileInView={{ scale: [0.5, 1], opacity: [0.5, 1] }}
          className="absolute top-[100px] left-[200px]"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              borderRadius: "70px",
            }}
          ></motion.div>

          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] text-left mt-3 text-[1.8rem]"
          >
            {"Xây dựng 1 website thương mại điện tử theo mô hình B2C, tối ưu hóa quy trình mua sắm."
              .split(" ")
              .map((x, index) => (
                <motion.span key={index} variants={textAnimate}>
                  {x + " "}
                </motion.span>
              ))}
          </motion.h1>
        </motion.div>

        <motion.div
          whileInView={{ scale: [0.5, 1], opacity: [0.5, 1] }}
          className="absolute top-[300px] right-[200px]"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              borderRadius: "70px",
            }}
          ></motion.div>
          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] text-left mt-3 text-[1.8rem]"
          >
            {"Phát triển các tính năng mua sắm trực tuyến, shipping. Bảo mật và an toàn dữ liệu"
              .split(" ")
              .map((x, index) => (
                <motion.span key={index} variants={textAnimate}>
                  {x + " "}
                </motion.span>
              ))}
          </motion.h1>
        </motion.div>

        <motion.div
          whileInView={{ scale: [0.5, 1], opacity: [0.5, 1] }}
          className="absolute top-[500px] left-[200px]"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              borderRadius: "70px",
            }}
          ></motion.div>
          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] text-left mt-3 text-[1.8rem]"
          >
            {"Phát triển tối ưu giao diện người dùng trên nhiều thiết bị."
              .split(" ")
              .map((x, index) => (
                <motion.span key={index} variants={textAnimate}>
                  {x + " "}
                </motion.span>
              ))}
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default TargetWeb;
