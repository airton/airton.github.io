import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { CloudLightning } from "lucide-react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <header className="m-auto p-2 flex items-center justify-center fixed w-full">
            <Menubar className="rounded-full border-foreground shadow-lg gap-4">
              <Avatar className="w-[30px] h-[30px]">
                <AvatarImage
                  src="https://github.com/airton.png"
                  className="p-0 m-0 "
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <MenubarMenu>
                <MenubarTrigger className="rounded-full">
                  <Link href={"/blog"}>Blog</Link>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="rounded-full">
                  <Link
                    href={"/zero-downtime"}
                    className="flex items-center gap-1"
                  >
                    <CloudLightning className="h-4 w-4" /> Zero Downtime
                  </Link>
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 @airton. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                Privacy
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
