import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Compass, Feather, HeartHandshake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre | Alini Sanches',
  description:
    'Conheça a trajetória e a abordagem da psicanalista Alini Sanches: escuta, acolhimento e autoconhecimento.',
}

export default function SobrePage() {
  return (
    <>
      {/* Cabeçalho */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Sobre mim</span>
          <h1 className="mt-4 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
            A escuta como forma de cuidado
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Prazer, sou a Alini Sanches. Dedico o meu trabalho a acompanhar pessoas em suas jornadas
            de autoconhecimento e reencontro consigo mesmas.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative w-full max-w-md">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-lg shadow-primary/10">
              <Image
                src="/images/alini-profissional.png"
                alt="Alini Sanches, psicanalista, em retrato profissional"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl border border-border/60 bg-background px-5 py-3 shadow-md shadow-primary/10">
              <p className="font-serif text-lg leading-none text-foreground">Alini Sanches</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary">Psicanalista clínica</p>
            </div>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Minha história com a psicanálise nasceu de uma inquietação profunda: entender o que nos
              move, o que nos machuca e o que nos liberta. Foi essa busca que me trouxe até a clínica
              e que sustenta o meu compromisso com cada pessoa que atendo.
            </p>
            <p>
              Acredito que ninguém deveria carregar suas dores em silêncio. No espaço analítico, a
              palavra ganha lugar, e aquilo que antes parecia confuso começa a fazer sentido. Meu
              papel é oferecer uma escuta atenta, sem pressa e sem julgamentos.
            </p>
            <p>
              Trabalho com adultos que desejam compreender suas emoções, reconstruir a autoestima e
              viver relações mais saudáveis — consigo mesmos e com o mundo ao redor.
            </p>
          </div>
        </div>
      </section>

      {/* Abordagem */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Minha abordagem</span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Pilares que guiam o meu trabalho
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {[
              { icon: HeartHandshake, title: 'Vínculo e confiança', text: 'A relação terapêutica é o coração do processo. Construímos um espaço seguro para você se abrir no seu tempo.' },
              { icon: Feather, title: 'Escuta sem julgamentos', text: 'Cada história é única e merece ser ouvida com respeito, delicadeza e presença genuína.' },
              { icon: Compass, title: 'Sentido e direção', text: 'Juntas, damos nome àquilo que você sente e encontramos caminhos possíveis para seguir.' },
              { icon: BookOpen, title: 'Base psicanalítica', text: 'Fundamento minha prática na teoria psicanalítica, sempre atualizada e a serviço de você.' },
            ].map((p) => (
              <div key={p.title} className="flex items-start gap-5 rounded-3xl border border-border/60 bg-background p-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <p.icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citação */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
        <p className="text-balance font-serif text-2xl italic leading-relaxed text-primary md:text-3xl">
          &ldquo;Transformar a dor em palavra é o primeiro passo para transformar a própria vida.&rdquo;
        </p>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">Alini Sanches</p>
      </section>

      {/* CTA */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-24">
          <h2 className="text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Quer dar o primeiro passo?
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Vamos conversar sobre como a psicanálise pode te acompanhar neste momento.
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Agende sua sessão <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
