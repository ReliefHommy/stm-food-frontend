// Layout.tsx


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
     
      <main className="p-6 max-w-7xl mx-auto">{children}</main>
    </>
  );
};


// This Layout component wraps the main content of the application with a Navbar and a main section.