import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Link } from "react-router-dom";

const dataProjects = [
  {
    id: 1,
    project: "Balancewise.io",
    desc: "Rebalanceie sua carteira de investimentos com o balancewise. Otimize seus investimentos com o balancewise. Rebalanceie sua carteira de forma simples e eficiente para maximizar seus ganhos.",
    image: "",
    link: "https://balancewise.io/",
  },
  {
    id: 183,
    project: "Timberoad",
    desc: "Timberoad é sobre liberdade. Em um mundo cheio de regras, tudo o que buscamos é um pedaço de paraíso tranquilo para nos divertirmos. Ao projetar uma van, prezamos pela funcionalidade, conforto e confiabilidade. Temos grandes sonhos e adoramos compartilhá-los com cada van, criando memórias duradouras.",
    image: "",
    link: "https://timberoad.vercel.app/",
  },
  {
    id: 3,
    project: "Pablo Escobar Ipsum",
    desc: "Pablo Escobar Ipsum. O lorem ipsum do pablito. Ustedes pueden aceptar mi negocio o aceptar las consequências. ¿Plata o plomo? Compremos una lavadora más grande, pues. Los políticos se espantan fácil. Una pistola y ya. La cárcel em Estados Unidos es peor que la muerte. ",
    image: "",
    link: "https://www.pabloescobaripsum.com/",
  },
];

export function SectionProjects() {
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataProjects.map(({ project, desc, link, id }) => (
            <Card key={project} className="bg-white dark:bg-muted/70 border-foreground">
              <CardContent className="p-4 pb-20 h-full !relative">
                <img
                  src={`https://picsum.photos/id/${id}/300/200?grayscale`}
                  alt={`Project ${project}`}
                  className="rounded-lg object-cover w-full"
                />
                <h3 className="text-xl font-bold mt-4 mb-2">{project}</h3>
                <p className="text-stone-500 dark:text-stone-300">{desc}</p>
                <Button className="mt-4 absolute bottom-4" variant="outline">
                  <Link to={link} target="_blank">Ver projeto</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
