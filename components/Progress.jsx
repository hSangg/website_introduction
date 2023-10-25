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
          Tuần 1: Phỏng vấn khách hàng - Vẽ sơ đồ <strong>use-case</strong> -
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
      </div>
    </div>
  );
};

export default Progress;
