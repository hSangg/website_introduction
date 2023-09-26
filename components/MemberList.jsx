import { TargetContext } from "@/app/page";
import data from "@/data/memberInforamtion";
import { useContext, useEffect, useRef } from "react";
import Member from "./Member";

const MemberList = () => {
  const teamMemberRef = useRef();
  const { ref, setRef } = useContext(TargetContext);
  useEffect(() => {
    setRef((pre) => ({ ...pre, teamMemberRef: teamMemberRef.current }));
  }, [teamMemberRef]);

  return (
    <div ref={teamMemberRef} className="pt-[100px]">
      {data.map((x) => (
        <Member
          key={x.name}
          name={x.name}
          position={x.position}
          class_={x.class_}
          email={x.email}
          github={x.github}
          imageName={x.imageName}
        />
      ))}
    </div>
  );
};

export default MemberList;
