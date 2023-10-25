"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { TargetContext } from "@/app/page";
import { textAnimate } from "@/utils/farmerMotionTemplete";

const IntroduceProject = () => {
  const { ref, setRef } = useContext(TargetContext);
  const introRef = useRef(null);
  useEffect(() => {
    setRef((pre) => ({ ...pre, introRef: introRef.current }));
  }, [introRef]);
  return (
    <div ref={introRef} className="mt-10">
      <div className="li-do-chon-de-tai h-[1500px] w-full relative">
        <h1
          className="z-10 pt-10
          mix-blend-exclusion pointer-events-none CODEINK
        sticky top-[50%] text-center text-5xl 
        translate-y-[-50%] uppercase"
        >
          The reason for <br></br> choosing this topic.
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
              src={"/images/passion.png"}
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
              className="image-reason"
            />
          </motion.div>

          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] text-left mt-3"
          >
            {"Kết hợp sự đam mê của nhóm với công nghệ và cơ hội kinh doanh hấp dẫn."
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
          className="absolute top-[200px] right-[200px]"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              borderRadius: "70px",
            }}
          >
            <Image
              alt=""
              src={"/images/network.png"}
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
              className="image-reason"
            />
          </motion.div>
          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] text-left mt-3"
          >
            {"Việc xây dựng một trang web thương mại điện tử chuyên nghiệp và hiệu quả có thể giúp bọn em phát triển các kỹ năng trong quản lý doanh nghiệp và công nghệ, xây dựng thương hiệu và cung cấp giá trị cho khách hàng."
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
              src={"/images/chance.jpg"}
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
              className="image-reason"
            />
          </motion.div>
          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] text-left mt-3"
          >
            {"Cũng là cơ hội, thách thức cho nhóm trong lĩnh vực này."
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

export default IntroduceProject;
