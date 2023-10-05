import { motion } from "framer-motion";

const ScopeERP = () => {
  return (
    <div className="mt-10">
      <div className="li-do-chon-de-tai h-[700px] w-full relative">
        <h1
          className="z-10 mt-10 inline-block left-1/2 -translate-x-1/2
          mix-blend-exclusion pointer-events-none
        sticky top-[50%] text-center text-5xl 
        translate-y-[-50%] uppercase bg-white/20 backdrop-blur-sm"
        >
          Phạm vi dự án
        </h1>

        <div>
          <h1 className="text-[2.5rem]">
            o Quản lý <strong>sản phẩm và dự án - E-commerce</strong> <br></br>{" "}
            o Quản lý <strong> kho hàng - Inventory</strong> <br></br> o Quản lý{" "}
            <strong>tài chính kế toán - Financial</strong> <br></br> o Quản lý
            <strong>
              {" "}
              phân tích dữ liệu và báo cáo - Accouting
            </strong> <br></br> o Quản lý
            <strong> quy trình mua bán sản phẩm - Sales + Purchase</strong>{" "}
            <br></br>o <strong>Dịch vụ khách hàng</strong> - CRM
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ScopeERP;
