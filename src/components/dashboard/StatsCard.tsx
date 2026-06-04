import { Card, CardContent } from "@heroui/react";
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

export default function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <Card className="border border-default-200 bg-content1">
      <CardContent className="p-6">
        <div className="flex flex-col gap-6">
          <div className="w-fit rounded-lg border border-default-200 p-2 text-default-500">
            {icon}
          </div>

          <div>
            <p className="text-sm text-default-500">{title}</p>
            <h3 className="mt-1 text-3xl font-semibold">{value}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
