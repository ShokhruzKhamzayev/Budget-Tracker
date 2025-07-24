import ExpenseIncomeChanger from "@/components/dashboardComponents/expenseIncomeChanger";
import FooterDashboard from "@/components/dashboardComponents/footerDashboard";
import HeaderDashboard from "@/components/headerDashboard";

export default function DashboardOverview() {
  return (
    <div>
      <HeaderDashboard>Overview</HeaderDashboard>
      <div className="min-h-[200vh]"></div>
      <ExpenseIncomeChanger />
      <FooterDashboard />
    </div>
  );
}
