import ExpenseIncomeChanger from "@/components/dashboardComponents/expenseIncomeChanger";
import HeaderDashboard from "@/components/headerDashboard";

export default function TransactionsPage() {
  return (
    <div>
      <HeaderDashboard>Transactions</HeaderDashboard>
      <ExpenseIncomeChanger />
    </div>
  );
}
