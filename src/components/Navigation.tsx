import { useEffect, useId, useRef, useState } from "react";
import { UserAvatar } from "./UserAvatar";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { IconWashDrycleanOff, IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Blog", href: "/blog" },
  { label: "Plugins", href: "/plugins" },
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  {
    label: "Zero Downtime",
    href: "/zero-downtime",
    icon: <IconWashDrycleanOff className="h-4 w-4" />,
  },
];

/** Marks the item whose route the visitor is already on, including nested routes. */
function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [pathname, setPathname] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  // Resolved after mount so the static build and the hydrated island agree.
  useEffect(() => setPathname(window.location.pathname), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      toggleRef.current?.focus();
    };

    // The overlay covers the viewport; letting the page scroll behind it strands
    // the visitor somewhere else when the menu closes.
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <Menubar className="hidden md:flex rounded-full border-foreground shadow-lg gap-4 opacity-95 bg-white dark:bg-gray-900 pr-1">
        <UserAvatar />
        {navItems.map((item) => (
          <MenubarMenu key={item.href}>
            <MenubarTrigger
              className={cn(
                "rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                focusRing
              )}
              asChild
            >
              <a
                href={item.href}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                // Weight carries the current-page cue alongside colour, so it
                // survives greyscale and colour-vision deficiency (WCAG 1.4.1).
                className="flex items-center gap-1 aria-[current=page]:font-semibold aria-[current=page]:text-indigo-600 dark:aria-[current=page]:text-indigo-400"
              >
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
          ref={toggleRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className={cn(
            "p-2 rounded-full bg-white dark:bg-gray-900 border border-foreground shadow-lg text-foreground transition-all active:scale-95",
            focusRing
          )}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls={menuId}
        >
          {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <nav
        id={menuId}
        aria-label="Navegação principal"
        // `inert` keeps the hidden links out of the tab order and the a11y tree
        // while the overlay is still painted for its fade transition.
        inert={!isOpen}
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
            aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            onClick={() => setIsOpen(false)}
            className={cn(
              "text-2xl font-medium text-foreground hover:text-stone-600 dark:hover:text-stone-300 transition-colors flex items-center gap-3 rounded-full px-4 py-1 aria-[current=page]:font-bold aria-[current=page]:text-indigo-600 dark:aria-[current=page]:text-indigo-400",
              focusRing
            )}
          >
            {item.icon} {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
