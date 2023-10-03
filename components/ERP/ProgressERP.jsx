"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { TargetContext } from "@/app/page";
import { textAnimate } from "@/utils/farmerMotionTemplete";

const ProgressERP = () => {
  return (
    <div className="mt-10">
      <div className="li-do-chon-de-tai h-[1500px] w-full relative">
        <h1
          className="z-10 pt-10
      mix-blend-exclusion pointer-events-none
     top-[50%] text-center text-5xl 
    translate-y-[-50%] uppercase"
        >
          Tiến độ dự án (DỰ KIẾN)
        </h1>

        <motion.div className="absolute top-[100px] ">
          <motion.div className="w-full">
            <Image
              alt=""
              src={"/images/ERP/wbs.jpg"}
              width={2173}
              height={804}
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[full] text-center mt-3"
          >
            {"H1. WBS của dự án".split(" ").map((x, index) => (
              <motion.span key={index} variants={textAnimate}>
                {x + " "}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        <motion.div className="absolute top-[700px] left-1/2 -translate-x-1/2">
          <motion.div>
            <Image
              alt=""
              src={"/images/ERP/ms1.jpg"}
              width={802}
              height={623}
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[full] text-center mt-3"
          >
            {"H2. Quản lý dự án bằng MS Project 1"
              .split(" ")
              .map((x, index) => (
                <motion.span key={index} variants={textAnimate}>
                  {x + " "}
                </motion.span>
              ))}
          </motion.h1>
        </motion.div>

        <motion.div className="absolute top-[1250px] left-1/2 -translate-x-1/2">
          <motion.div>
            <Image
              alt=""
              src={"/images/ERP/ms2.jpg"}
              width={802}
              height={623}
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[full] text-center mt-3"
          >
            {"H3. Quản lý dự án bằng MS Project 2"
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

export default ProgressERP;
