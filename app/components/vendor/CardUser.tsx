function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
}