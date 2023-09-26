import { TargetContext } from "@/app/page";
import { scrollToRef } from "@/utils/utils";
import { useContext } from "react";

const Navigator = () => {
  const { ref } = useContext(TargetContext);
  console.log(ref);
  return (
    <div className="fixed mix-blend-difference z-20 top-5 left-1/2 -translate-x-1/2 ">
      <div className="flex gap-[5px]">
        <div
          onClick={() => {
            scrollToRef(ref["introRef"]);
          }}
          className="bg-white text-black px-2 rounded-3xl border-[2px] cursor-pointer"
        >
          Introduction
        </div>
        <div
          onClick={() => {
            scrollToRef(ref["teamMemberRef"]);
          }}
          className="bg-white text-black px-2 rounded-3xl border-[2px] cursor-pointer"
        >
          Members
        </div>
      </div>
    </div>
  );
};

export default Navigator;
