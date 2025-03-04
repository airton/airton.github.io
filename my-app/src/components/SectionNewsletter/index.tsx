import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function SectionNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("E-mail enviado:", email);
    setEmail("");
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-blue-800 py-8 px-2 sm:px-4 lg:px-6 mb-8">
      <div className="container max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <label htmlFor="email" className="text-white">
            Deixe seu email para ser avisado sobre as atualizações
          </label>
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow bg-white"
            aria-label="Endereço de e-mail"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto bg-primary text-white hover:bg-primary-600"
          >
            Salvar
          </Button>
        </form>
      </div>
    </div>
  );
}
