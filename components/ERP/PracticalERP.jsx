import Link from "next/link";

const rows = [
  {
    content:
      "Tham khảo về giá cả, hình thức thanh toán, các quy trình như mua hàng, sửa chữa,… và các chính sách bán hàng cũng như dịch vụ khách hàng.",
    link: "https://help.phongvu.vn/",
  },

  {
    content:
      "Điều khoản sử dụng Thegioididong.com – Tham khảo quy trình giao dịch và thanh toán",
    link: "https://www.thegioididong.com/tos",
  },
  {
    content:
      " Bộ tài liệu Hướng dẫn sử dụng phần mềm Odoo/ERPOnline 10.0 Tham khảo về các ứng dụng như: Bán hàng, Kế toán, Kho vận,… trên Odoo.",
    link: "https://erponline.vn/vi/docs/13.0/c/huong-dan-nguoi-dung-odoo-1",
  },
  {
    content:
      " Quản lý kho hiệu quả với Odoo Inventory (on.net.vn) – Tham khảo module quản lý kho vận.",
    link: "https://on.net.vn/en/blog/dx-blog-2/quan-ly-kho-voi-odoo-inventory-113",
  },
  {
    content:
      "Tài liệu hướng dẫn điều hành một cửa hàng trực tuyến mã nguồn mở với thương mại điện tử Odoo",
    link: "https://www.odoo.com/documentation/16.0/applications/websites/ecommerce.html",
  },
  {
    content: "Odoo CRM (on.net.vn) – Quản lý module CRM.",
    link: "https://on.net.vn/en/blog/dx-blog-2/odoo-crm-93",
  },
];

const PracticalERP = () => {
  return (
    <div className="mt-20">
      <div className="li-do-chon-de-tai h-[700px] w-full relative">
        <h1
          className="z-10 pt-10 leading-[55px]
  mix-blend-exclusion pointer-events-none
 top-[50%] text-center text-5xl 
translate-y-[-50%] uppercase"
        >
          Tính thực tế của dự án, <br></br> cơ sở thực tiễn
        </h1>

        <table className="w-1/2 mx-auto border border-white">
          <thead className=" p-2 border border-white">
            <tr className="">
              <th className="border border-white">Nội dung</th>
              <th className="p-2">Link tham khảo</th>
            </tr>
          </thead>
          <tbody className="border border-white">
            {rows.map((row, index) => (
              <tr key={index} className="text-center ">
                <td className="text-left border border-white p-2">
                  {row.content}
                </td>
                <td className="border-white border">
                  {row.link != "" ? <Link href={row.link}>✅</Link> : "❌"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PracticalERP;
