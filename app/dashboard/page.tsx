import { Suspense } from "react";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from "../ui/skeletons";
import { lusitana } from "../ui/fonts";
import { fetchLatestInvoices, fetchRevenue } from "../lib/data";

export default async function Page() {
  // const revenue = await fetchRevenue();
  // console.log(revenue);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{}</div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
