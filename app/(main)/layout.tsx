import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full flex flex-row-reverse">
      <main className="md:pr-[72px] h-full w-full">
        {children}
      </main>
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>
    </div>
   );
}
 
export default MainLayout;