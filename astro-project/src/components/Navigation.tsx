import { UserAvatar } from "./UserAvatar";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { IconWashDrycleanOff } from "@tabler/icons-react";

export function Navigation() {
  return (
    <Menubar className="rounded-full border-foreground shadow-lg gap-4 opacity-95 bg-white dark:bg-gray-900">
      <UserAvatar />
      <MenubarMenu>
        <MenubarTrigger className="rounded-full" asChild>
          <a href="/blog">Blog</a>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="rounded-full" asChild>
          <a href="/zero-downtime" className="flex items-center gap-1">
            <IconWashDrycleanOff className="h-4 w-4" /> Zero Downtime
          </a>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
