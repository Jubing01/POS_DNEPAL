import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import SuperAdminSectionSidebar from "./superadmin-app-sidebar";
import MainSectionSidebar from "./main-app-sidebar";
import InventorySectionSidebar from "./inventory-app-sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <MainSectionSidebar />
      </SidebarHeader>
      <SidebarContent>
        <SuperAdminSectionSidebar />
        <InventorySectionSidebar />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
