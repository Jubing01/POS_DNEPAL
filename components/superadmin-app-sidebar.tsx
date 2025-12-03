import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";

import { Package, Building } from "lucide-react";

const superAdminItems = [
  {
    title: "Package",
    url: "/admin/package",
    icon: Package,
  },
  {
    title: "Companies",
    url: "/admin/company",
    icon: Building,
  }
];

const SuperAdminSectionSidebar = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Super Admin</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {superAdminItems.map((item) => {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.url}
                    className="flex items-center gap-2 w-full"
                  >
                    <item.icon size={16} />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SuperAdminSectionSidebar;
