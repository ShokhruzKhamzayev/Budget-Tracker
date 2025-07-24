import ExpenseIncomeChanger from "@/components/dashboardComponents/expenseIncomeChanger";
import FooterDashboard from "@/components/dashboardComponents/footerDashboard";
import { PieChartOverview } from "@/components/dashboardComponents/pieChartOverview";
import HeaderDashboard from "@/components/headerDashboard";

export default function DashboardOverview() {
  const thisMonth = {
    incomeData: {
      title: "income",
      label: "Income",
      color: "green",
      amount: 600,
    },
    expenseData: {
      title: "expense",
      label: "Expense",
      color: "red",
      amount: 400,
    },
  };
  return (
    <div>
      <HeaderDashboard>Overview</HeaderDashboard>
      <div className="w-[95%] mx-auto my-[30px]">
        <PieChartOverview
          chartTitle="This month"
          incomeData={thisMonth.incomeData}
          expenseData={thisMonth.expenseData}
        />
        <div className="min-h-[200vh]"></div>
      </div>
      <ExpenseIncomeChanger />
      <FooterDashboard />
    </div>
  );
}
