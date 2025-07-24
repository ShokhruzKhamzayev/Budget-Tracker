import Image from "next/image";
import { BiCalendar } from "react-icons/bi";
import { BsBank, BsPieChartFill } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { IoTimeSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import NavDashboard from "./nav";

const links = [
  {
    icon: <MdMenuBook />,
    title: "Overview",
    link: "/overview",
  },

  {
    icon: <GrTransaction />,
    title: "Transactions",
    link: "/transactions",
  },
  {
    icon: <RiCalendarScheduleLine />,
    title: "Scheduled transactions",
    link: "/scheduled-transactions",
  },
  {
    icon: <BsBank />,
    title: "Accounts",
    link: "/accounts",
  },
  {
    icon: <FaRegCreditCard />,
    title: "Credit cards",
    link: "/credit-cards",
  },
  {
    icon: <BsPieChartFill />,
    title: "Budgets",
    link: "/budgets",
  },
  {
    icon: <IoTimeSharp />,
    title: "Debts",
    link: "/debts",
  },
  {
    icon: <BiCalendar />,
    title: "Calendar",
    link: "/calendar",
  },
];

export default function Sidebar() {
  return (
    <div className="w-[25%] bg-[#252525]">
      <div className="sticky top-0">
        <div className="logo flex items-center gap-[10px] border-b border-slate-200 h-[90px] px-[15px]">
          <Image src={"/logo.png"} alt="the logo" width={50} height={50} />
          <h1 className="font-semibold text-[24px]">Fast Budget</h1>
        </div>
        <NavDashboard links={links} />
      </div>
    </div>
  );
}
