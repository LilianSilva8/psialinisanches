import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Users, Video, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Serviços | Alini Sanches',
  description:
    'Atendimento psicanalítico individual online, presencial e grupos terapêuticos com Alini Sanches.',
}

const servicos = [
  {
    icon: Video,
    title: 'Atendimento individual online',
    text: 'Sessões de psicanálise por videochamada, com o mesmo acolhimento do presencial. Ideal para quem busca flexibilidade e conforto de casa.',
    items: ['Sessões semanais por vídeo', 'Horários flexíveis', 'Sigilo e segurança garantidos', 'De onde você estiver'],
  },
  {
    icon: Heart,
    title: 'Atendimento presencial',
    text: 'Encontros presenciais em um ambiente acolhedor e reservado, pensado para que você se sinta segura para falar e ser ouvida.',
    items: ['Espaço acolhedor e reservado', 'Escuta atenta e cuidadosa', 'Ambiente seguro e sigiloso', 'Presença e proximidade'],
  },
  {
    icon: Users,
    title: 'Grupos terapêuticos',
    text: 'Encontros em grupo para compartilhar experiências, sentir-se pertencente e crescer no encontro com o outro. A força de não estar sozinha.',
    items: ['Grupos reduzidos', 'Troca e pertencimento', 'Temas norteadores', 'Ambiente de confiança'],
  },
]

export default function ServicosPage() {
  return (
    <>
      {/* Cabeçalho */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Serviços</span>
          <h1 className="mt-4 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Um cuidado para cada momento da sua jornada
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Escolha a forma de atendimento que melhor se encaixa na sua vida. Todos com a mesma
            escuta atenta e o mesmo compromisso com o seu bem-estar.
          </p>
        </div>
      </section>

      {/* Lista de serviços */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-8 md:grid-cols-3">
          {servicos.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-3xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                <s.icon className="size-7" />
              </span>
              <h2 className="mt-6 font-serif text-2xl text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <ul className="mt-6 space-y-3 border-t border-border/60 pt-6">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/90">
                    <Check className="size-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contato"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Quero agendar <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Como funciona</span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
              O caminho até a sua primeira sessão
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { step: 'Primeiro contato', text: 'Você me envia uma mensagem e conversamos sobre o que te trouxe até aqui.' },
              { step: 'Agendamento', text: 'Encontramos juntas o melhor formato e horário para as suas sessões.' },
              { step: 'Início do processo', text: 'Começamos a caminhada de escuta, acolhimento e autoconhecimento.' },
            ].map((item, i) => (
              <div key={item.step} className="relative rounded-3xl border border-border/60 bg-background p-8">
                <span className="font-serif text-4xl text-primary/40">{`0${i + 1}`}</span>
                <h3 className="mt-3 font-serif text-xl text-foreground">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-24">
          <h2 className="text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Pronta para começar?
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Ainda tem dúvidas sobre qual atendimento é o ideal para você? Vamos conversar.
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Falar com a Alini <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
