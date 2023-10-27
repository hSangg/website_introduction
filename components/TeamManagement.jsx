const TeamManagement = () => {
  return (
    <div className="bg-white text-black p-8 rounded-sm shadow-md mx-auto w-3/4 mt-8">
      <h1 className="text-5xl w-2/3 mx-auto font-bold mb-4 text-center">
        Biên Bản Họp Nhóm
      </h1>
      <h2 className="text-black mb-1 text-right">
        Thời gian: 16/9/2023, 19:00
      </h2>
      <h2 className="text-black mb-4 text-right">Địa điểm: Google Meet</h2>

      <h2 className="text-xl font-semibold mb-2">Thành Viên Tham Gia:</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>Cao Hoài Sang</li>
        <li>Thi Thành Công</li>
        <li>Nguyễn Trần Gia Kiệt</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Nội Dung Họp:</h2>
      <ol className="list-decimal pl-8 mb-4">
        <li>
          <span className="font-semibold">Trình Bày Phần Đã Hoàn Thiện:</span>
          <ul className="list-disc pl-8 mt-2">
            <li>
              Cao Hoài Sang: [Trình bày công việc đã hoàn thành và các khó khăn
              gặp phải]
            </li>
            <li>
              Thi Thành Công: [Trình bày công việc đã hoàn thành và các khó khăn
              gặp phải]
            </li>
            <li className="mb-2">
              Nguyễn Trần Gia Kiệt: [Trình bày công việc đã hoàn thành và các
              khó khăn gặp phải]
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Công Việc Chưa Hoàn Thiện:</span>
          <ul className="list-disc pl-8 mt-2">
            <li>
              Cao Hoài Sang: [Trình bày công việc chưa hoàn thành và lý do]
            </li>
            <li>
              Thi Thành Công: [Trình bày công việc chưa hoàn thành và lý do]
            </li>
            <li className="mb-2">
              Nguyễn Trần Gia Kiệt: [Trình bày công việc chưa hoàn thành và lý
              do]
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Đóng Góp và Hoàn Thiện Kết Quả:</span>
          <ul className="list-disc pl-8 mt-2">
            <li>Thảo luận về các cách cải thiện công việc đã hoàn thành.</li>
            <li>Đề xuất giải pháp cho các vấn đề gặp phải.</li>
            <li className="mb-2">
              Xác định các bước tiếp theo để hoàn thiện dự án.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Quy Định Trễ Deadline:</span>
          <ul className="list-disc pl-8 mt-2">
            <li>Nếu ai trễ deadline:</li>
            <ul className="list-disc pl-8 mt-2">
              <li>Mỗi giờ trễ sẽ bị phạt 10,000 VNĐ.</li>
              <li className="mb-2">
                Lý do và thời gian dự kiến hoàn thành phải được thông báo trước
                đúng 24 giờ.
              </li>
            </ul>
          </ul>
        </li>
      </ol>

      <div className="flex w-full justify-around">
        <div className=" text-center">
          <h1 className="mb-5 font-bold">Người ký</h1>
          <h1 className="FloritaSignature-1Gn9Z text-5xl mb-4">Sang</h1>
          <h1 className="font-semibold">Cao Hoài Sang</h1>
        </div>
        <div className=" text-center">
          <h1 className="mb-5 font-bold">Người ký</h1>
          <h1 className="FloritaSignature-1Gn9Z text-5xl mb-4">Cong</h1>
          <h1 className="font-semibold">Thi Thành Công</h1>
        </div>
        <div className=" text-center">
          <h1 className="mb-5 font-bold">Người ký</h1>
          <h1 className="FloritaSignature-1Gn9Z text-5xl mb-4">Kiet</h1>
          <h1 className="font-semibold">Nguyễn Trần Gia Kiệt</h1>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
