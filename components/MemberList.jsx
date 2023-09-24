import data from "@/data/memberInforamtion";
import Member from "./Member";

const MemberList = () => {
  return (
    <div>
      {data.map((x) => (
        <>
          <Member
            name={x.name}
            position={x.position}
            class_={x.class_}
            email={x.email}
            github={x.github}
            imageName={x.imageName}
          />
        </>
      ))}
    </div>
  );
};

export default MemberList;
