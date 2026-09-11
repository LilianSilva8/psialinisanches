'use client'

import { useState } from 'react'
import { Check, Send } from 'lucide-react'

export function ContatoForm() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border/60 bg-card p-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
          <Check className="size-7" />
        </span>
        <h3 className="mt-5 font-serif text-2xl text-foreground">Mensagem enviada</h3>
        <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">
          Obrigada por entrar em contato. Responderei o mais breve possível, com todo o cuidado que
          você merece.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border/60 bg-card p-8 md:p-10"
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm text-foreground/80">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            placeholder="Como posso te chamar?"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-foreground/80">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label htmlFor="assunto" className="mb-1.5 block text-sm text-foreground/80">
            Interesse
          </label>
          <select
            id="assunto"
            name="assunto"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          >
            <option>Atendimento individual online</option>
            <option>Atendimento presencial</option>
            <option>Atendimento de casais</option>
            <option>Dúvidas sobre o ebook</option>
            <option>Outro assunto</option>
          </select>
        </div>
        <div>
          <label htmlFor="mensagem" className="mb-1.5 block text-sm text-foreground/80">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            required
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            placeholder="Conte um pouco sobre o que te traz até aqui..."
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Enviar mensagem <Send className="size-4" />
        </button>
      </div>
    </form>
  )
}
