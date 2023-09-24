import Image from "next/image";
const Member = ({ name, email, position, github, class_, imageName }) => {
  return (
    <div className="pb-[1500px] h-[150vh] gap-6 flex w-full">
      <div className="grow-[0.3] shrink-0 relative h-[150vh]">
        <div className="sticky top-10 left-0">
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
        </div>
      </div>
      <div className="grow-[3] flex flex-col text-[50px] uppercase divide-y divide-dotted">
        <h1>
          <strong>Name:</strong> {name}
        </h1>
        <h1>
          <strong>Email:</strong> {email}
        </h1>
        <h1>
          <strong>Class:</strong> {class_}
        </h1>
        <h1>
          <strong>Position:</strong> {position}
        </h1>
        <h1>
          <strong>Github:</strong> {github}
        </h1>
      </div>
    </div>
  );
};

export default Member;
