"use client";
import { SectionNewsletter } from "@/components/SectionNewsletter";
import { ZeroDowntimeCTA } from "@/components/ZeroDowntime";

export default function ZeroDowntime() {
  return (
    <>
      <ZeroDowntimeCTA />
      <SectionNewsletter />
      <div className="relative py-6 mb-8">
        <div className="container max-w-4xl mx-auto">
          <p className="text-lg font-normal mt-2 text-slate-700">
            Essa solução foi pensada e implementada na AWS, mas pode ser
            adaptada para outras plataformas de Cloud, como Google Cloud e
            afins.
          </p>
          <h2 className="mt-8 mb-2 text-xl font-semibold text-slate-700 dark:text-white">
            Ideia
          </h2>
          <p className="text-lg font-normal mt-2 text-slate-700">
            Utilizar uma estratégia de deploy chamada{" "}
            <span className="font-bold">Blue-Green</span> Deployment que reduz
            downtime e riscos ao manter duas versões do ambiente:
            <ul className="mb-2 mt-4">
              <li className="font-bold mb-1">
                🔵 Blue (versão atual em produção)
              </li>
              <li className="font-bold mb-1">🟢 Green (nova versão)</li>
            </ul>
            Após testar o Green, o tráfego é redirecionado para ele
            instantaneamente. Se houver problemas, basta reverter para o Blue.
            Isso garante atualizações seguras e contínuas. 🚀
          </p>

          <h2 className="mt-8 mb-2 text-xl font-semibold text-slate-700">
            Requisitos
          </h2>
          <ul className="max-w-md space-y-1 text-slate-700 list-inside">
            <li className="flex items-center">
              <CheckIcon />
              Cloudfront
            </li>
            <li className="flex items-center">
              <CheckIcon />
              Key Value Storage (KVS)
            </li>
            <li className="flex items-center">
              <CheckIcon />
              S3
            </li>
            <li className="flex items-center">
              <CheckIcon />
              CI/CD (Github Actions)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

const CheckIcon = () => {
  return (
    <svg
      className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
};
