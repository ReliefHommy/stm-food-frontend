export default async function DashboardPage() {
  // You can fetch quick stats from Django here
  // const stats = await apiFetch('/api/vendor/stats/');

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card title="Products" value="—" />
        <Card title="Orders (This Month)" value="—" />
        <Card title="Pending Orders" value="—" />
      </div>
    </section>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
}
