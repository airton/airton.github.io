import { useState } from "react";
import { UserAvatar } from "./UserAvatar";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { IconWashDrycleanOff, IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Blog", href: "/blog" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
    {
      label: "Zero Downtime",
      href: "/zero-downtime",
      icon: <IconWashDrycleanOff className="h-4 w-4" />,
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <Menubar className="hidden md:flex rounded-full border-foreground shadow-lg gap-4 opacity-95 bg-white dark:bg-gray-900 px-4">
        <UserAvatar />
        {navItems.map((item) => (
          <MenubarMenu key={item.href}>
            <MenubarTrigger
              className="rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              asChild
            >
              <a href={item.href} className="flex items-center gap-1">
                {item.icon} {item.label}
              </a>
            </MenubarTrigger>
          </MenubarMenu>
        ))}
      </Menubar>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex items-center justify-between w-full px-4">
        <UserAvatar />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-white dark:bg-gray-900 border border-foreground shadow-lg text-foreground focus:outline-none transition-all active:scale-95"
          aria-label="Toggle menu"
        >
          {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden flex flex-col items-center pt-8 gap-6 px-4",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-medium text-foreground hover:text-stone-600 dark:hover:text-stone-300 transition-colors flex items-center gap-3"
          >
            {item.icon} {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
