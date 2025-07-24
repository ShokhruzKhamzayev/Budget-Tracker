"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type PageProps = {
  links: {
    title: string;
    link: string;
    icon: React.ReactNode;
  }[];
};

export default function NavDashboard({ links }: PageProps) {
  const pathname = usePathname();
  return (
    <nav className="px-[15px]">
      {links.map((link) => (
        <Link
          key={link.link}
          href={`/dashboard/${link.link}`}
          className={`flex items-center gap-[5px] ${'/dashboard' + link.link === pathname ? "text-blue-400" : "text-white"}`}
        >
          {link.icon}
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
