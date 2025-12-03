//@ts-nocheck
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Link from "next/link";
import App from "next/app";

const AdminLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <div className="w-full">
        <div className="flex w-full h-16 items-center justify-between px-12">
          <Link href={"/"} className="text-xl font-bold">
            POS <span className="">DNEPAL</span>
          </Link>
          <div className="flex gap-8">
            <div>Settings</div>
            <div>User Profile</div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
