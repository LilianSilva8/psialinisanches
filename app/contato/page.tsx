import type { Metadata } from 'next'
import { Camera, Clock, Mail, MapPin, MessageCircle } from 'lucide-react'
import { ContatoForm } from '@/components/contato-form'

export const metadata: Metadata = {
  title: 'Contato | Alini Sanches',
  description:
    'Agende sua sessão de psicanálise com Alini Sanches. Atendimento online ou presencial.',
}

export default function ContatoPage() {
  return (
    <>
      {/* Cabeçalho */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Contato</span>
          <h1 className="mt-4 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Vamos conversar?
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Entre em contato pelo canal que preferir para saber mais sobre os atendimentos ou solicitar um horário.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl leading-tight text-foreground">
               Canais de Atendimento
           </h2>

            <div className="mt-10 space-y-6">
              {[
                { icon: MessageCircle, label: 'WhatsApp', value: 'Envie uma mensagem', href: 'https://api.whatsapp.com/send/?phone=5511919931336&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+os+atendimentos+e+sess%C3%B5es+de+psican%C3%A1lise.+&type=phone_number&app_absent=0' },
                { icon: Mail, label: 'E-mail', value: 'psi.alinisanches@gmail.com', href: 'mailto:psi.alinisanches@gmail.com' },
                { icon: Camera, label: 'Instagram', value: '@psi.alinisanches', href: 'https://www.instagram.com/psi.alinisanches/' },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-shadow hover:shadow-md hover:shadow-primary/10"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</p>
                    <p className="mt-0.5 text-foreground">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 space-y-4 rounded-2xl bg-secondary/50 p-6">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Sessões com horário marcado.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Atendimento</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Online para todo o Brasil e presencial mediante agendamento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <ContatoForm />
        </div>
      </section>
    </>
  )
}
