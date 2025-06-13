export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    {/* LEFT   */}
    <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[16%] bg-red-100">LEFT</div>
     {/* RIGHT   */}
    <div className="w-[84%] md:w-[92%] lg:w-[84%] xl:w-[84%] bg-blue-100">RIGHT</div>
    
    </div>;
}