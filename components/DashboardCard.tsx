type Props = { title: string; value: string };

export default function DashboardCard({ title, value }: Props) {
  return (
    <div className="rounded-2xl bg-white dark:bg-gray-800 shadow p-5">
      <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
      <div className="text-3xl font-extrabold mt-2">{value}</div>
    </div>
  );
}
