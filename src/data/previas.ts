export type PreviaCategory =
  | "refrigeracao"
  | "beleza"
  | "pet"
  | "b2b";

export interface PreviaData {
  id: number;
  name: string;
  niche: string;
  location?: string;
  link: string;
  category: PreviaCategory;
}

export interface PreviaCategoryMeta {
  id: PreviaCategory;
  labelPt: string;
  labelEn: string;
}

export const previaCategories: PreviaCategoryMeta[] = [
  { id: "refrigeracao", labelPt: "Refrigeração & Eletros", labelEn: "Refrigeration & Appliances" },
  { id: "beleza", labelPt: "Beleza & Estética", labelEn: "Beauty & Aesthetics" },
  { id: "pet", labelPt: "Pet", labelEn: "Pet" },
  { id: "b2b", labelPt: "B2B & Serviços", labelEn: "B2B & Services" },
];

// Prévias ao vivo (sites publicados). Entradas sem link registrado foram omitidas.
export const previas: PreviaData[] = [
  // Refrigeração & Eletros
  {
    id: 1,
    name: "Levi Refrigeração",
    niche: "Refrigeração",
    location: "Osasco",
    link: "https://levi-refrigeracao.vercel.app/",
    category: "refrigeracao",
  },
  {
    id: 2,
    name: "Dew Point Refrigeração",
    niche: "Refrigeração & Climatização",
    location: "Osasco",
    link: "https://dewpoint-eosin.vercel.app/",
    category: "refrigeracao",
  },
  {
    id: 3,
    name: "Oliveira Assistência Técnica",
    niche: "Linha branca",
    location: "Osasco",
    link: "https://oliveira-dun.vercel.app/",
    category: "refrigeracao",
  },
  {
    id: 4,
    name: "A Casa do Microondas",
    niche: "Especialista em micro-ondas",
    location: "Osasco",
    link: "https://casa-do-microondas-kappa.vercel.app/",
    category: "refrigeracao",
  },
  {
    id: 5,
    name: "Assistência Técnica Vitória",
    niche: "Ar-condicionado & Refrigeração",
    location: "Barueri",
    link: "https://mr-souza.vercel.app/",
    category: "refrigeracao",
  },
  {
    id: 6,
    name: "S.O.S Granja Vianna",
    niche: "Linha branca Brastemp/Electrolux",
    location: "Granja Viana",
    link: "https://sos-granja-vianna.vercel.app/",
    category: "refrigeracao",
  },
  {
    id: 7,
    name: "LCT Maq-Service",
    niche: "Refrigeração",
    location: "Osasco",
    link: "https://ltc-maq.vercel.app/",
    category: "refrigeracao",
  },
  {
    id: 9,
    name: "Fic Frio",
    niche: "Refrigeração",
    location: "Jundiaí",
    link: "https://ficfrio.vercel.app/",
    category: "refrigeracao",
  },

  // Beleza & Estética
  {
    id: 10,
    name: "Beth Estética",
    niche: "Estética",
    location: "Osasco / Zona Oeste",
    link: "https://beth-estetica-five.vercel.app/",
    category: "beleza",
  },
  {
    id: 14,
    name: "Lisbela Cabelo e Beleza",
    niche: "Salão de beleza",
    location: "Pinheiros",
    link: "https://lisbela-seven.vercel.app/",
    category: "beleza",
  },
  {
    id: 15,
    name: "Espaço Patrícia Beauty",
    niche: "Cílios & Unhas",
    location: "Osasco",
    link: "https://espaco-patricia.vercel.app/",
    category: "beleza",
  },
  {
    id: 16,
    name: "Espaço Da Lu Manicure",
    niche: "Manicure",
    location: "Zona Oeste",
    link: "https://espaco-lu.vercel.app/",
    category: "beleza",
  },
  {
    id: 17,
    name: "Studio Bella Cílios",
    niche: "Cílios",
    location: "Osasco",
    link: "https://studio-bella-three.vercel.app/",
    category: "beleza",
  },

  // Pet
  {
    id: 11,
    name: "Faro Fino Pet",
    niche: "Banho, tosa & veterinário",
    link: "https://faro-fino-pet.vercel.app/",
    category: "pet",
  },
  {
    id: 12,
    name: "Banho e Tosa da Lydi",
    niche: "Banho & tosa",
    location: "Rio Pequeno",
    link: "https://lydi.vercel.app/",
    category: "pet",
  },
  {
    id: 13,
    name: "Dom Peludo Pet Shop",
    niche: "Pet shop",
    link: "https://dom-peludo-pet.vercel.app/",
    category: "pet",
  },

  // B2B & Serviços
  {
    id: 8,
    name: "Bricks Tec",
    niche: "Equipamentos odontológicos",
    location: "Osasco / SP",
    link: "https://bricks-tec.vercel.app/",
    category: "b2b",
  },
  {
    id: 18,
    name: "SS Serralheria",
    niche: "Serralheria",
    location: "Morumbi",
    link: "https://ss-serralheria.vercel.app/",
    category: "b2b",
  },
];
