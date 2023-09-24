"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const IntroduceProject = () => {
  return (
    <div className="mt-10">
      <div className="li-do-chon-de-tai h-[1500px] w-full relative">
        <h1
          className="z-10 
          mix-blend-exclusion pointer-events-none
        sticky top-[50%] text-center text-5xl translate-y-[-50%] uppercase"
        >
          <strong>Lí do</strong> chọn đề tài
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
        </motion.div>

        <motion.div
          whileInView={{ scale: [0.5, 1], opacity: [0.5, 1] }}
          className="absolute top-[200px] right-[200px]"
        >
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
            Xây dựng một trang web chuyên nghiệp và hiệu quả có thể giúp tôi
            phát triển kỹ năng quản lý kinh doanh và công nghệ, tạo thương hiệu
            và cung cấp giá trị cho khách hàng.
          </h1>
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
              src={"/images/chance.jpg"}
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
              className="image-reason"
            />
          </motion.div>
          <h1 className="w-[300px] text-left mt-3">
            Là cơ hội thú vị để thách thức bản thân và tập thể để thể hiện sự
            sáng tạo trong lĩnh vực này.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroduceProject;
