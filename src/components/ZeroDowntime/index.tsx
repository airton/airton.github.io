"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ZeroDowntimeCTA() {
  const pathname = usePathname();
  const isPage = pathname.includes("zero-downtime");

  return (
    <section className="w-full py-10 md:py-22 lg:py-30 bg-gradient-to-r from-slate-600 to-slate-600 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 space-y-4 text-center">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Front End Zero Downtime
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-200 md:text-xl dark:text-slate-200">
                Garanta que suas aplicações Web estejam sempre disponíveis, sem
                interrupções, sem perda de receita.
              </p>
            </div>
            {!isPage && (
              <div className="w-full max-w-sm space-y-2 justify-end">
                <Button
                  className="w-full bg-white text-slate-600 hover:bg-slate-100"
                  size="lg"
                  asChild
                >
                  <Link href="/zero-downtime">
                    Saiba mais
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-xs text-slate-200 dark:text-slate-200">
                  Disponível por tempo limitado.
                </p>
              </div>
            )}
          </div>
          <div className="w-[450px] h-[450px]">
            <img src="/assets/images/zero-downtime.png" />
            {/* <Image
              src="/assets/images/zero-downtime.png"
              alt={"xxx"}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
