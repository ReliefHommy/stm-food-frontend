'use client';

export default function Topbar() {
  // TODO: replace with real vendor data from Django `/api/vendor/profile/`
  const vendorName = 'My Thai Store';
  return (
    <header className="h-14 border-b bg-white flex items-center justify-between px-4">
      <div className="text-sm text-gray-500">
        Vendor Dashboard in using
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-800">{vendorName}</span>
        <form action="/logout" method="post">
          {/* replace with your auth/logout flow */}
          <button
            type="submit"
             
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        </form>
      </div>
    </header>
  );
}
