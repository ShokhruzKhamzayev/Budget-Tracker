import HeaderDashboard from "@/components/headerDashboard";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[300vh]">
      <Sidebar />
      <div className="w-[75%]">
        {children}
      </div>
    </div>
  );
}
