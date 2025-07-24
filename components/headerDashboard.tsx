import { BsThreeDotsVertical } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HeaderDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#252525] w-full flex items-center justify-between px-[15px] h-[90px]">
      <div className="flex gap-[15px] items-center">
        <button>
          <GiHamburgerMenu />
        </button>
        <h1 className="text-[18px] font-medium">{children}</h1>
      </div>
      <button>
        <BsThreeDotsVertical />
      </button>
    </div>
  );
}
