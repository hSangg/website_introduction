"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ProgressWeb = () => {
  const ref = useRef();
  return (
    <div ref={ref} className="pt-24">
      <h1 className="text-center text-5xl uppercase">
        Quy trình phát triển phần mềm
      </h1>

      <div
        onClick={() => {
          ref.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }}
        className="flex justify-center opacity-70 "
      >
        <h1 className=" text-lg mt-4 cursor-pointer text-center inline-block px-2 py-1  text-white rounded-xl bg-slate-500">
          Bỏ qua
        </h1>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl p-4 w-2/3 mx-auto text-center">
          Tuần 1-3: Phỏng vấn khách hàng - Vẽ sơ đồ <strong>use-case</strong> -
          Thiết kế <strong>database</strong>
        </h1>
        <div>
          <Image
            src={"/images/UseCase_Project.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              backgroundColor: "white",
              padding: "16px",
              borderRadius: "16px",
            }}
          />
          <h1 className="text-center mt-2 mb-8">h/a: use-case diagram</h1>
        </div>

        {dataImage.map((x, i) => (
          <div key={i}>
            <Image
              src={x.src}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "16px",
              }}
            />
            <h1 className="text-center mt-2 mb-8">h/a: {x.name}</h1>
          </div>
        ))}

        <div className="p-4">
          <h1 className="text-3xl mb-10 w-2/3 mx-auto text-center">
            Tuần 4-7: Phát triển song song front end - backend
          </h1>

          <div className="p-4">
            <div className="p-2">
              <h1 className="font-bold text-[100px] text-center">Frontend</h1>
              <motion.div
                initial="inital"
                whileInView="view"
                transition={{
                  staggerChildren: 0.2,
                }}
                className="p-2 text-3xl text-center divide-y divide-white/50 w-2/3 mx-auto"
              >
                {taskFrontEndList.map((x, i) => (
                  <motion.h2
                    variants={rowVariant}
                    key={i}
                    className="p-4"
                    dangerouslySetInnerHTML={{ __html: x }}
                  ></motion.h2>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="p-2">
            <h1 className="font-bold text-[100px] text-center">Backend</h1>
            <motion.div
              initial="inital"
              whileInView="view"
              transition={{
                staggerChildren: 0.2,
              }}
              className="p-2 text-3xl text-center divide-y divide-white/50 w-2/3 mx-auto"
            >
              {taskBackendList.map((x, i) => (
                <motion.h2
                  variants={rowVariant}
                  key={i}
                  className="p-4"
                  dangerouslySetInnerHTML={{ __html: x }}
                ></motion.h2>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl mb-10 mt-14 w-2/3 mx-auto text-center">
          Tuần 8 - 16: Phát triển tính năng
        </h1>
        <div className="p-2">
          <h1 className="font-bold text-[100px] text-center">Tính năng</h1>
          <motion.div
            initial="inital"
            whileInView="view"
            transition={{
              staggerChildren: 0.2,
            }}
            className="p-2 text-3xl text-center divide-y divide-white/50 w-2/3 mx-auto"
          >
            {taskComplete.map((x, i) => (
              <motion.h2
                variants={rowVariant}
                key={i}
                className="p-4"
                dangerouslySetInnerHTML={{ __html: x }}
              ></motion.h2>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProgressWeb;

const taskFrontEndList = [
  "Code giao diện và responsive trên các loại màng hình",
  "Tích hợp tính năng chat trực tiếp với chủ doanh nghiệp",
  "Lấy dự liệu thông qua RESTFUL API và render lên màn hình",
  "Tích hợp debounce effect vào các ô tìm kiếm",
  "Xây dựng trang admin dashboard",
];

const taskBackendList = [
  "Kết nối <strong>cơ sỡ dự liệu MySQL</strong>",
  "Tạo các route cơ bản",
  "Tạo API register, login phân quyền user",
  "Tạo API thao tác với CSDL",
  "Tích hợp Json Web Token <strong>(JWT)</strong> vào Authorization",
];
const taskComplete = [
  "Login bằng tài khoản <span class='text-pink-500 font-bold'>TTECH hoặc Google</span>",
  "Tính năng <span class='text-pink-500 font-bold'>gửi mail</span> quên mật khẩu",
  "Tính năng <span class='text-pink-500 font-bold'>nhắn tin real-time</span> với bộ phần CSKH",
  "Tính năng <span class='text-pink-500 font-bold'>xuất file EXCEL</span>",
  "Tính năng <span class='text-pink-500 font-bold'>thanh toán với VNPAY</span>",
];

const rowVariant = {
  inital: {
    opacity: 0.2,
  },
  view: {
    opacity: 1,
  },
};

const dataImage = [
  {
    name: "Sequence diagram người dùng đăng nhập",
    src: "/images/SystemDesign/ac_dn.jpg",
  },
  {
    name: "Sequence diagram người dùng đăng nhập",
    src: "/images/SystemDesign/sq_dn.jpg",
  },
  {
    name: "Sequence diagram người dùng đăng kí",
    src: "/images/SystemDesign/ac_dk.jpg",
  },
  {
    name: "Sequence diagram người dùng đăng kí",
    src: "/images/SystemDesign/sq_dk.jpg",
  },
  {
    name: "Sequence diagram người dùng quên mật khẩu",
    src: "/images/SystemDesign/ac_qmk.jpg",
  },
  {
    name: "Sequence diagram người dùng quên mật khẩu",
    src: "/images/SystemDesign/sq_qmk.jpg",
  },
  {
    name: "Sequence diagram người dùng cập nhật thông tin",
    src: "/images/SystemDesign/ac_upin.jpg",
  },
  {
    name: "Sequence diagram người dùng cập nhật thông tin",
    src: "/images/SystemDesign/sq_upin.jpg",
  },
  {
    name: "Sequence diagram người dùng xem sản phẩm",
    src: "/images/SystemDesign/ac_viewsp.jpg",
  },
  {
    name: "Sequence diagram người dùng xem sản phẩm",
    src: "/images/SystemDesign/sq_viewsp.jpg",
  },
  {
    name: "Sequence diagram người dùng đặt hàng",
    src: "/images/SystemDesign/ac_dat_hang.png",
  },
  {
    name: "Sequence diagram người dùng đặt hàng",
    src: "/images/SystemDesign/sq_dat_hang.png",
  },
  {
    name: "Sequence diagram quản lý sản phẩm",
    src: "/images/SystemDesign/sq_qlsp.jpg",
  },
  {
    name: "Activity diagram quản lý sản phẩm",
    src: "/images/SystemDesign/ac_quanlysanpham.png",
  },
  {
    name: "Sequence diagram quản lý người đùng",
    src: "/images/SystemDesign/sq_qlke.jpg",
  },
  {
    name: "Activity diagram quản lý người đùng",
    src: "/images/SystemDesign/ac_quanlynguoidung.png",
  },

  {
    name: "Sequence diagram quản lý danh mục",
    src: "/images/SystemDesign/sq_qlcate.jpg",
  },
  {
    name: "Activity diagram quản lý danh mục",
    src: "/images/SystemDesign/ac_qlcategory.png",
  },
];
