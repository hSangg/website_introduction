import { textAnimate } from "@/utils/farmerMotionTemplete";
import { motion } from "framer-motion";
const ExpectERP = () => {
  return (
    <div className="mt-10">
      <div className="li-do-chon-de-tai h-[1300px] w-full relative">
        <h1
          className="z-10 pt-10
      mix-blend-exclusion pointer-events-none
    sticky top-[50%] text-center text-5xl 
    translate-y-[-50%] uppercase"
        >
          Kỳ vọng dự án
        </h1>
        <div className="absolute top-0 left-10">
          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] mt-3 text-[1.8rem]"
          >
            {"Tăng trưởng doanh số bán hàng và lợi nhuận theo thời gian, đạt được sự tăng trưởng ổn định và bền vững."
              .split(" ")
              .map((x, index) => (
                <motion.span key={index} variants={textAnimate}>
                  {x + " "}
                </motion.span>
              ))}
          </motion.h1>
        </div>

        <div className="absolute top-[300px] right-10">
          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] mt-3 text-[1.8rem]"
          >
            {"Nắm bắt xu hướng công nghệ mới nhất và cung cấp sản phẩm và dịch vụ phù hợp với nhu cầu của thị trường."
              .split(" ")
              .map((x, index) => (
                <motion.span key={index} variants={textAnimate}>
                  {x + " "}
                </motion.span>
              ))}
          </motion.h1>
        </div>

        <div className="absolute top-[600px] left-10">
          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] mt-3 text-[1.8rem]"
          >
            {"Xây dựng và duy trì một cơ sở khách hàng trung thành và mở rộng cơ sở khách hàng thông qua quảng cáo, tiếp thị và chăm sóc khách hàng hiệu quả."
              .split(" ")
              .map((x, index) => (
                <motion.span key={index} variants={textAnimate}>
                  {x + " "}
                </motion.span>
              ))}
          </motion.h1>
        </div>

        <div className="absolute top-[900px] right-10">
          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.05 }}
            className="w-[300px] mt-3 text-[1.8rem]"
          >
            {"Thực hiện các chiến dịch tiếp thị và quảng cáo hiệu quả để tạo ra lưu lượng truy cập và tăng số lượng đăng ký thành viên."
              .split(" ")
              .map((x, index) => (
                <motion.span key={index} variants={textAnimate}>
                  {x + " "}
                </motion.span>
              ))}
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default ExpectERP;
