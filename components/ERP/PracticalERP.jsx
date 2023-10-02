import Link from "next/link";
import { motion } from "framer-motion";
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
      <div className="li-do-chon-de-tai h-[1000px] w-full relative">
        <h1
          className="z-10 pt-10 leading-[55px]
  mix-blend-exclusion pointer-events-none
 top-[50%] text-center text-5xl 
translate-y-[-50%] uppercase"
        >
          Tính thực tế của dự án, <br></br> cơ sở thực tiễn
        </h1>

        <table className="mx-auto w-3/4 text-[1.3rem] ">
          <thead className="p-2">
            <tr className="uppercase">
              <th className="">Nội dung</th>
              <th className="p-2 w-[200px]">Link tham khảo</th>
            </tr>
          </thead>
          <motion.tbody className=" ">
            {rows.map((row, index) => (
              <motion.tr
                key={index}
                className="text-center origin-left border-b-[2px] border-white/20 transition-all hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900"
              >
                <motion.td
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="text-left px-6 py-4 origin-left "
                >
                  {row.content}
                </motion.td>
                <td className="   ">
                  {row.link != "" ? <Link href={row.link}>✅</Link> : "❌"}
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </div>
  );
};

export default PracticalERP;
