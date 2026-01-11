//app/vendor/layout.tsx
import Sidebar from "../components/vendor/Sidebar";
import Topbar from "../components/vendor/Topbar";


export default function VendorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="p-6 max-w-6xl">{children}</main>
        </div>
      </div>
    </div>
  );
}
