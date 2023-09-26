"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Member = ({ name, email, position, github, class_, imageName }) => {
  return (
    <>
      <motion.div className="pb-[1000px] h-[150vh] gap-6 flex w-full">
        <div className="grow-[0.3] shrink-0 relative h-[150vh]">
          <motion.div
            exit={{ scale: 0 }}
            whileInView={{ scale: [0, 1], transition: { duration: 0.3 } }}
            className="sticky top-10 left-0 z-10 w-[300px]"
          >
            <Image
              src={`/images/${imageName}`}
              width={300}
              height={300}
              style={{
                objectFit: "contain",
                borderRadius: "70px",
                backgroundColor: "white",
              }}
            />
          </motion.div>

          <motion.div whileInView={{ opacity: [0, 1] }} className="">
            <Image
              src={"/images/Asset1.png"}
              width={300}
              height={300}
              style={{ objectFit: "contain", rotate: 90 }}
            />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [-30, 0] }}
          className="grow-[3] flex flex-col text-[50px] uppercase divide-y divide-dotted"
        >
          <motion.h1>
            <strong>Name:</strong> {name}
          </motion.h1>
          <motion.h1>
            <strong>Email:</strong> {email}
          </motion.h1>
          <motion.h1>
            <strong>Class:</strong> {class_}
          </motion.h1>
          <motion.h1>
            <strong>Position:</strong> {position}
          </motion.h1>
          <motion.h1>
            <strong>Github:</strong> {github}
          </motion.h1>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Member;
