"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  // Storing the route the menu was opened on closes it automatically on navigation.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/95 backdrop-blur supports-[backdrop-filter]:bg-ink-950/85">
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "text-gold-400"
                        : "text-plum-100/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/comparatif"
            className="hidden rounded-full bg-gradient-to-r from-plum-500 to-plum-700 px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Voir le classement
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-white/5 bg-ink-950 lg:hidden"
        >
          <nav aria-label="Navigation mobile" className="container-page py-4">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-plum-100/85 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/comparatif"
              className="mt-3 block rounded-full bg-gradient-to-r from-plum-500 to-plum-700 px-5 py-3 text-center text-sm font-bold text-white"
            >
              Voir le classement
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
