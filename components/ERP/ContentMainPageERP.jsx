"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ContentMainPageERP = () => {
  return (
    <div className="bg-black  text-slate-200 mb-[200px]">
      <div className="flex relative">
        <motion.div
          whileInView={{ opacity: [0, 1], width: ["0px", "200px"] }}
          className="absolute w-[150px] h-[200px] right-0 top-[200px]"
        >
          <Image alt="" fill objectFit="cover" src={"/images/object3d.png"} />
        </motion.div>

        <h1 className="text-[80px] font-bold mt-[200px] ">
          <div className="Benzin uppercase leading-[100px] flex flex-col items-left cursor-default">
            <motion.div className="">Building an ERP model for a</motion.div>
            <div className="relative w-full h-[280px]">
              <Image
                alt=""
                src={"/images/tech-1.jpg"}
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
            <motion.div className="">business model.</motion.div>
          </div>
          <motion.div className="absolute w-[250px] left-[50%] translate-x-[-50%] bottom-[-100px] h-[70px]">
            <Image
              alt=""
              fill
              style={{ objectFit: "cover" }}
              src={"/images/productcolor.png"}
            />
          </motion.div>
        </h1>
      </div>
    </div>
  );
};

export default ContentMainPageERP;
