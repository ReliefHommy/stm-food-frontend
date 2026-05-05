import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <AdminSidebar isOpen={false} setIsOpen={function (value: boolean): void {
        throw new Error("Function not implemented.");
      } } />
      <div className="lg:pl-64">
        <AdminTopbar onMenuClick={function (): void {
          throw new Error("Function not implemented.");
        } } />
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}