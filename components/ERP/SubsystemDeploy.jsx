import { motion } from "framer-motion";
const rows = [
  {
    header: "phân hệ cần triển khai",
    content: "Thương mại điện tử -> E-commerce </br> Financial </br> Inventory",
  },
];

const SybsystemDeploy = () => {
  return (
    <div className="mt-20">
      <div className="li-do-chon-de-tai h-[1000px] w-full relative">
        <h1
          className="z-10 pt-10 leading-[55px]
  mix-blend-exclusion pointer-events-none
 top-[50%] text-center text-5xl 
translate-y-[-50%] uppercase"
        >
          Kiến thức
        </h1>

        <table className="mx-auto w-1/4 text-[1.3rem] ">
          <thead className="p-2">
            <tr className="uppercase">
              <th className="">Vấn đề</th>
              <th className="p-2 w-[700px]">Nội dung</th>
            </tr>
          </thead>
          <motion.tbody
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.2 }}
          >
            {rows.map((row, index) => (
              <motion.tr
                variants={textAnimate}
                key={index}
                className="text-center origin-left w-1/4 border-b-[2px] border-white/20 transition-all hover:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900"
              >
                <td className="   ">{row.header}</td>
                <motion.td
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="text-left px-6 py-4 origin-left "
                  dangerouslySetInnerHTML={{
                    __html: row.content,
                  }}
                ></motion.td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </div>
  );
};

export default SybsystemDeploy;

export const textAnimate = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};
