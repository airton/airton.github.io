import { Button } from "@/components/ui/button";
import { IconArrowRight, IconWashDrycleanOff } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Background from "../Background";

export function ZeroDowntimeCTA() {
  const isPage = false; // Temporarily set to false, will be handled by react-router-dom in main App.tsx

  return (
    <>
      <section className="relative overflow-hidden z-10 w-full py-20 md:py-22 lg:py-30 bg-gradient-to-r from-slate-600 to-slate-600 flex justify-center">
        <Background />
        <div className="relative container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 space-y-4 text-center">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <IconWashDrycleanOff className="w-[90px] h-[90px] lg:w-[120px] lg:h-[120px] text-slate-50 mx-auto" />

                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Front End Zero Downtime
                </h2>
                <p className="mx-auto max-w-[700px] text-slate-200 md:text-xl dark:text-slate-200">
                  Garanta que suas aplicações Web estejam sempre disponíveis,
                  sem interrupções, sem perda de receita.
                </p>
              </div>
              {!isPage && (
                <div className="w-full max-w-sm space-y-2 justify-end">
                  <Button
                    className="w-full bg-white text-slate-600 hover:bg-slate-100"
                    size="lg"
                    asChild
                  >
                    <Link to="/zero-downtime">
                      Saiba mais
                      <IconArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <p className="text-xs text-slate-200 dark:text-slate-200">
                    Disponível por tempo limitado.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
