import { BarChartOverview } from "@/components/dashboardComponents/barChartOverview";
import ExpenseIncomeChanger from "@/components/dashboardComponents/expenseIncomeChanger";
import FooterDashboard from "@/components/dashboardComponents/footerDashboard";
import { PieChartOverview } from "@/components/dashboardComponents/pieChartOverview";
import HeaderDashboard from "@/components/headerDashboard";
import { Progress } from "@/components/ui/progress";

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
      amount: 1400,
    },
  };
  const lastMonth = {
    incomeData: {
      title: "income",
      label: "Income",
      color: "green",
      amount: 1504,
    },
    expenseData: {
      title: "expense",
      label: "Expense",
      color: "red",
      amount: 821,
    },
  };
  return (
    <div>
      <HeaderDashboard>Overview</HeaderDashboard>
      <div className="w-[95%] mx-auto my-[30px] grid grid-cols-2 gap-[20px]">
        <PieChartOverview
          chartTitle="This month"
          incomeData={thisMonth.incomeData}
          expenseData={thisMonth.expenseData}
        />
        <PieChartOverview
          chartTitle="Last month"
          incomeData={lastMonth.incomeData}
          expenseData={lastMonth.expenseData}
        />
        <div className="bg-[#252525] h-fit p-[15px] rounded-[12px] ">
          <span className="font-semibold">Accounts</span>
          <div className="flex justify-between items-center py-[10px]">
            <span>Wallet</span>
            <div className="flex flex-col gap-[5px] items-end">
              <span className="text-green-400">$90.24</span>
              <span>USD</span>
            </div>
          </div>
          <div className="flex justify-between border-t-[2px] border-t-slate-600 py-[10px]">
            <span>Bank Account</span>
            <div className="flex flex-col gap-[5px] items-end">
              <span className="text-green-400">$1312</span>
              <span>USD</span>
            </div>
          </div>
        </div>
        <div className="bg-[#252525] h-fit p-[15px] rounded-[12px] ">
          <span>Credit Cards</span>
          <div>
            <div className="flex justify-between items-center">
              <span>Credit card</span>
              <span className="text-red-400">-$189</span>
            </div>
            <div className="flex justify-between items-center gap-[30px]">
              <Progress value={19} />
              <span>19%</span>
            </div>
          </div>
        </div>
        <BarChartOverview />
        <div className="min-h-[200vh]"></div>
      </div>
      <ExpenseIncomeChanger />
      <FooterDashboard />
    </div>
  );
}
