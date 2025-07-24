"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label";

type Data = {
  title: string;
  label: string;
  color: string;
  amount: number;
};

type PageProps = {
  chartTitle: string;
  incomeData: Data;
  expenseData: Data;
};

export function PieChartOverview({
  incomeData,
  expenseData,
  chartTitle,
}: PageProps) {
  const chartData = [
    {
      type: incomeData.title,
      amount: incomeData.amount,
      fill: `var(--color-${incomeData.title})`,
    },
    {
      type: expenseData.title,
      amount: expenseData.amount,
      fill: `var(--color-${expenseData.title})`,
    },
  ];

  const chartConfig = {
    amount: {
      label: "Amount",
    },
    income: {
      label: incomeData.label,
      color: incomeData.color,
    },
    expense: {
      label: expenseData.label,
      color: expenseData.color,
    },
  } satisfies ChartConfig;
  return (
    <Card className="flex flex-col bg-[#252525]">
      <CardHeader className="items-center pb-0">
        <CardTitle>{chartTitle}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between min-h-[200px]">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="amount" label nameKey="type" />
          </PieChart>
        </ChartContainer>
        <div className="flex flex-col gap-[5px] justify-end">
          <span className="text-green-400">${incomeData.amount}</span>
          <span className="text-red-400">${expenseData.amount}</span>
          <span
            className={`${
              incomeData.amount - expenseData.amount > 0 ? "text-green-400" : "text-red-400"
            } border-t-[3px] border-slate-200`}
          >
            ${incomeData.amount - expenseData.amount}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
