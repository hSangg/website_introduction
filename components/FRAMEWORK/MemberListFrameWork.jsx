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
  {
    name: "Nguyễn Trần Gia Kiệt",
    email: "21522258@gm.uit.edu.vn",
    class_: "HTTT2021",
    position: "BE developer",
    github: "@KietGia22",
    imageName: "boy2.png",
  },
  {
    name: "Thi Thành Công",
    email: "21521897@gm.uit.edu.vn",
    class_: "HTTT2021",
    position: "BE developer",
    github: "@Aransu",
    imageName: "boy3.png",
  },
];
