import { TargetContext } from "@/app/page";
import Image from "next/image";
import { useContext, useEffect, useRef } from "react";

const Progress = () => {
  const progressRef = useRef();
  const { ref, setRef } = useContext(TargetContext);

  useEffect(() => {
    setRef((pre) => ({ ...pre, progressRef: progressRef.current }));
  }, [progressRef]);
  return (
    <div ref={progressRef} className="pt-24">
      <h1 className="text-center text-5xl uppercase">
        Quy trình phát triển phần mềm
      </h1>

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
            }} // optional
          />
          <h1 className="text-center">h/a: use-case diagram</h1>
        </div>

        <div className="p-4">
          <h1 className="text-3xl mb-10 w-2/3 mx-auto text-center">
            Tuần 4-7: Phát triển song song front end - backend
          </h1>

          <div className="p-4">
            <div className="relative h-[1000px] flex items-center ">
              <ul className="font-regular text-2xl w-[55%] ml-20 divide-y  divide-white/20">
                <button className="px-2 bg-blue-500 mb-2 rounded-lg text-white font-600 mx-auto">
                  Front end
                </button>
                {taskFrontEndList.map((x, i) => (
                  <li key={i} className="my-4 pt-4 font-[500] text-3xl">
                    - {x}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 -z-10">
                <Image
                  src={"/images/ipbg.png"}
                  fill
                  style={{ objectFit: "contain", objectPosition: "top" }}
                  sizes="100vw"
                />
              </div>
            </div>

            <div>
              <Image
                src={"/images/mb.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </div>
          </div>
          <div className="p-2">
            <h1 className="font-bold text-4xl">Backend</h1>
            <div className="p-2 text-3xl">
              {taskBackendList.map((x, i) => (
                <h2 key={i}>{x}</h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;

const taskFrontEndList = [
  "Code giao diện và responsive trên các loại màng hình",
  "Tích hợp tính năng chat trực tiếp với chủ doanh nghiệp",
  "Lấy dự liệu thông qua RESTFUL API và render lên màn hình",
  "Tích hợp debounce effect vào các ô tìm kiếm",
  "Xây dựng trang admin dashboard",
];

const taskBackendList = ["Kết nối cơ sỡ dự liệu MySQL", "Tạo các route cơ bản"];
