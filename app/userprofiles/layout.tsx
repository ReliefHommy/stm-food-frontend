// app/userprofiles/layout.tsx

import { Sidebar } from "@/components/userprofiles/sidebar"
import { UserprofileProvider } from "@/lib/userprofile-context"




export default function UserprofileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserprofileProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
         
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </UserprofileProvider>
  )
}