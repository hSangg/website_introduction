"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Introduce = () => {
  return (
    <div className="mt-10 pb-[300vh]">
      <div className="li-do-chon-de-tai h-[1000px] w-full relative">
        <h1
          className="mt-[10px] z-10 
          mix-blend-exclusion pointer-events-none
        sticky top-[50%] text-center text-5xl translate-y-[-50%] uppercase"
        >
          Lí do chọn đề tài
        </h1>

        <div className="absolute top-[100px] left-[100px]">
          <motion.div
            whileHover={{
              scale: 1.1,
              borderRadius: "70px",
            }}
          >
            <Image
              src={"/images/passion.png"}
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
              className="image-reason"
            />
          </motion.div>
          <h1 className="w-[300px] text-center mt-3">
            Kết hợp sự đam mê của tôi với <strong>công nghệ</strong> và{" "}
            <strong>cơ hội kinh doanh</strong> hấp dẫn.
          </h1>
        </div>

        <div className="absolute top-[500px] right-[100px]">
          <motion.div
            whileHover={{
              scale: 1.1,
              borderRadius: "70px",
            }}
          >
            <Image
              src={"/images/network.png"}
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
              className="image-reason"
            />
          </motion.div>
          <h1 className="w-[300px] text-left mt-3">
            xây dựng một trang web chuyên nghiệp và hiệu quả có thể giúp tôi
            phát triển kỹ năng quản lý kinh doanh và công nghệ, tạo thương hiệu
            và cung cấp giá trị cho khách hàng
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
