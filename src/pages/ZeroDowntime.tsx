import { SectionNewsletter } from "@/components/SectionNewsletter";
import { ZeroDowntimeCTA } from "@/components/ZeroDowntime";
import { Prose } from "@/components/Prose";
import clsx from "clsx";
import type { SVGProps } from "react";

export default function ZeroDowntime() {
  return (
    <>
      <ZeroDowntimeCTA />
      <SectionNewsletter />
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6 max-w-4xl">
          <Prose>
            <p>
              Essa solução foi pensada e implementada na AWS, mas pode ser
              adaptada para outras plataformas de Cloud, como Google Cloud e
              afins.
            </p>

            <h2>Ideia</h2>
            <p>
              Utilizar uma estratégia de deploy chamada{' '}
              <strong>Blue-Green</strong> Deployment que reduz downtime e
              riscos ao manter duas versões do ambiente:
            </p>
            <ul>
              <li>🔵 Blue (versão atual em produção)</li>
              <li>🟢 Green (nova versão)</li>
            </ul>
            <p>
              Após testar o Green, o tráfego é redirecionado para ele
              instantaneamente. Se houver problemas, basta reverter para o
              Blue. Isso garante atualizações seguras e contínuas. 🚀
            </p>

            <h2>Requisitos</h2>
            <ul>
              <li className="flex items-center">
                <CheckIcon className="mr-2" /> Cloudfront
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2" /> Key Value Storage (KVS)
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2" /> S3
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2" /> CI/CD (Github Actions)
              </li>
            </ul>
          </Prose>
        </div>
      </section>
    </>
  );
}

const CheckIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      className={clsx(
        "w-3.5 h-3.5 text-gray-500 dark:text-gray-400 shrink-0",
        className
      )}
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
};
