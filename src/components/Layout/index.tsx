import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { IconWashDrycleanOff } from "@tabler/icons-react";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-stone-900 dark:text-stone-100 transition-colors duration-300">
      <header className="m-auto p-2 flex items-center justify-center fixed w-full z-50">
        <Menubar className="rounded-full border-foreground shadow-lg gap-4 opacity-95 bg-white dark:bg-gray-900">
          <Avatar className="w-[30px] h-[30px]">
            <a href="/">
              <AvatarImage
                src="https://github.com/airton.png"
                className="p-0 m-0 "
              />
            </a>
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
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
      </header>
      <main className="flex-1">{children}</main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-stone-500 dark:text-stone-400">
          © {new Date().getFullYear()} @airton. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            to="/termos"
          >
            Termos de Uso
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            to="/politicas"
          >
            Políticas de Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
