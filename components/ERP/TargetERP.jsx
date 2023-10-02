"use client";

import { textAnimate } from "@/utils/farmerMotionTemplete";
import { motion } from "framer-motion";
import Image from "next/image";

const TargetERP = () => {
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
          Lí do chọn đề tài
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
          >
            <Image
              alt=""
              src={"/images/ERP/optimize.jpg"}
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
              className="image-reason"
            />
          </motion.div>

          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] text-left mt-3 text-[1.8rem]"
          >
            {"Xây dựng 1 mô hình kinh doanh hoàn chỉnh, tối ưu hóa quy trình mua sắm."
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
          >
            <Image
              alt=""
              src={"/images/ERP/erp.jpg"}
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
              className="image-reason"
            />
          </motion.div>
          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] text-left mt-3 text-[1.8rem]"
          >
            {"Tạo nền tảng cho tương lai: Xây dựng một hệ thống ERP linh hoạt và mở rộng có khả năng thích nghi với sự phát triển của công ty và thị trường công nghệ."
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
          className="absolute top-[800px] left-[200px]"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              borderRadius: "70px",
            }}
          >
            <Image
              alt=""
              src={"/images/ERP/teamwork.jpg"}
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
              className="image-reason"
            />
          </motion.div>
          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] text-left mt-3 text-[1.8rem]"
          >
            {"Nâng cao khả năng làm việc nhóm: Cải thiện quản lý các thành viên, bao gồm quy trình quản lý hiệu suất, và phát triển bản thân."
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

export default TargetERP;
