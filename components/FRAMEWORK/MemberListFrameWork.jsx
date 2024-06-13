import Member from "../Member";

const MemberListFramework = () => {
  return (
    <div className="pt-[100px]">
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

export default MemberListFramework;

const data = [
  {
    name: "Cao Hoài Sang",
    email: "21522541@gm.uit.edu.com",
    class_: "HTTT2021",
    position: "FE developer & BE developer & UI/UX",
    github: "@hsangg",
    imageName: "boy1.png",
  },
];
