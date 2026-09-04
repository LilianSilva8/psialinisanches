import type { Metadata } from 'next'
import Image from 'next/image'
import {
  BookOpenCheck,
  Check,
  Heart,
  Lock,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react'
import { CheckoutButton } from '@/components/checkout-button'

export const metadata: Metadata = {
  title: 'Ebook: Compreender para Transformar: Um novo olhar a partir da psicanálise | Alini Sanches',
  description:
    'Nossa história influencia emoções, escolhas e relações, mas compreendê-la permite questionar repetições, escutar desejos e construir novas formas de viver o presente. Por Alini Sanches, psicanalista.',
}

const beneficios = [
  'Compreender melhor a própria história',
  'dentificar padrões e repetições',
  'Desenvolver o autoconhecimento',
  'efletir sobre as próprias escolhas',
  'Aprender a escutar as próprias emoções e desejos',
  'Construir novas formas de viver o presente',
]

const capitulos = [
  { n: '01', title: 'O que é, de verdade, autoestima', text: 'Desmistificando o conceito e entendendo suas raízes na sua história.' },
  { n: '02', title: 'As vozes que te aprisionam', text: 'Como identificar a autocrítica e as crenças que sabotam o seu valor.' },
  { n: '03', title: 'O reencontro com você', text: 'Exercícios de autoconhecimento para olhar para dentro com coragem.' },
  { n: '04', title: 'Amor-próprio na prática', text: 'Ferramentas concretas para cultivar uma relação mais gentil consigo.' },
  { n: '05', title: 'Sustentando a mudança', text: 'Como manter viva a sua transformação e seguir florescendo.' },
]

export default function EbookPage() {
  return (
    <>
      {/* Hero de venda */}
      <section className="relative overflow-hidden bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">
              <Sparkles className="size-3.5" /> Ebook exclusivo
            </span>
            <h1 className="mt-6 text-balance font-serif text-4xl leading-[1.1] text-foreground md:text-5xl">
              Compreender para Transformar: Um novo olhar a partir da psicanálise
            </h1>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Um convite à reflexão, escrito por uma psicanalista, para você compreender sua história, 
              escutar seus desejos e construir novas formas de viver o presente.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><BookOpenCheck className="size-4 text-primary" /> Leitura leve e acolhedora</span>
              <span className="flex items-center gap-2"><Heart className="size-4 text-primary" /> Reflexões sobre experiências passadas</span>
            </div>

            <div className="mt-9">
              <CheckoutButton />
              <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="size-3.5" /> Compra 100% segura processada pela Hotmart
              </p>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-accent/40 blur-2xl" />
            <Image
              src="/images/ebook-mockup.png"
              alt="Capa do ebook Autoestima e Autoconhecimento"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Identificação da dor */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Este ebook é para você</span>
        <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
          Você se reconhece em alguma dessas situações?
        </h2>
        <div className="mt-12 grid gap-5 text-left sm:grid-cols-2">
          {[
            'Sente que nunca é bom o suficiente, por mais que se esforce.',
            'Depende da aprovação dos outros para se sentir bem.',
            'Vive se comparando e se cobrando em excesso.',
            'Sente que precisa da aprovação dos outros para reconhecer o próprio valor.',
          ].map((dor) => (
            <div key={dor} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-6">
              <Heart className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="leading-relaxed text-foreground/90">{dor}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Se você respondeu sim a alguma delas, saiba que não está sozinho — e que é possível
          reescrever essa história. Este ebook é o convite para esse novo começo.
        </p>
      </section>

      {/* O que você vai conquistar */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div className="relative order-2 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-lg shadow-primary/10 md:order-1">
              <Image
                src="/images/alini-hero.png"
                alt="Alini Sanches, autora do ebook"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">O que você vai conquistar</span>
              <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
                Uma nova relação com você mesmo
              </h2>
              <ul className="mt-8 space-y-4">
                {beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <Check className="size-4" />
                    </span>
                    <span className="leading-relaxed text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O que tem dentro */}
      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">O que tem dentro</span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Uma jornada em 6 capítulos
          </h2>
        </div>
        <div className="mt-14 space-y-4">
          {capitulos.map((c) => (
            <div
              key={c.n}
              className="flex items-start gap-6 rounded-3xl border border-border/60 bg-card p-7 transition-shadow hover:shadow-md hover:shadow-primary/10"
            >
              <span className="font-serif text-3xl text-primary/50">{c.n}</span>
              <div>
                <h3 className="font-serif text-xl text-foreground">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Quem já leu</span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Transformações reais
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { text: 'Alini sempre maravilhosa! Me ajudou muito com meu processo de cura e a me perceber melhor, conhecer e entender o que me causava tanta ansiedade.', name: 'Jaqueline F.' },
              { text: 'Profissional bem atenciosa e disponível. Foi a primeira vez que precisei de serviços dessa área, achei que me sentiria desconfortável, mas a Alini é super gentil e paciente.', name: 'Gabrielly N.' },
              { text: 'Muito bom, as conversas me ajudaram sobre minha vida pessoal e o quanto não somos perfeitos. E que cada dia podemos mudar se acreditarmos em nós mesmos.', name: 'Felipe L.' },
            ].map((t) => (
              <figure key={t.name} className="rounded-3xl border border-border/60 bg-card p-8">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 leading-relaxed text-foreground/90">{t.text}</blockquote>
                <figcaption className="mt-6 text-sm font-medium text-primary">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta / Preço */}
      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <div className="overflow-hidden rounded-[2.5rem] border border-border/60 bg-card text-center shadow-xl shadow-primary/10">
          <div className="bg-primary px-6 py-6 text-primary-foreground">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80">Oferta de lançamento</p>
          </div>
          <div className="px-6 py-12 md:px-12">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Compreender para Transformar
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Ebook digital em PDF, acesso imediato e vitalício após a compra.
            </p>

            <div className="mt-8 flex items-end justify-center gap-2">
              <span className="text-lg text-muted-foreground line-through">R$ 67</span>
              <span className="font-serif text-6xl leading-none text-primary">R$ 37</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">ou em até 3x no cartão</p>

            <div className="mt-9">
              <CheckoutButton label="Comprar agora pelo Hotmart" />
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row sm:gap-8">
              <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> 7 dias de garantia</span>
              <span className="flex items-center gap-2"><Lock className="size-4 text-primary" /> Pagamento seguro</span>
              <span className="flex items-center gap-2"><BookOpenCheck className="size-4 text-primary" /> Acesso imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="bg-card">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 py-16 text-center md:px-8 md:py-20">
          <span className="flex size-16 items-center justify-center rounded-full bg-secondary text-primary">
            <ShieldCheck className="size-8" />
          </span>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">
            Garantia incondicional de 7 dias
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Se dentro de 7 dias você sentir que o ebook não é para você, basta solicitar o reembolso
            através da plataforma Hotmart e devolvemos 100% do seu investimento.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Dúvidas frequentes</span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Perguntas frequentes
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {[
            { q: 'Como recebo o ebook?', a: 'Após a confirmação do pagamento, você recebe o acesso imediato por e-mail, com o link para baixar o ebook em PDF.' },
            { q: 'Consigo ler no celular?', a: 'Sim! O ebook em PDF pode ser lido no celular, tablet, computador ou e-reader, quando e onde você quiser.' },
            { q: 'Preciso ter conhecimento prévio de psicanálise?', a: 'Não. O conteúdo foi escrito em linguagem acessível e acolhedora, pensado para qualquer pessoa em busca de autoconhecimento.' },
            { q: 'O ebook substitui a terapia?', a: 'Não. Ele é um material de apoio ao autoconhecimento e não substitui o acompanhamento terapêutico individual.' },
            { q: 'Posso pedir reembolso?', a: 'Sim. Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor.' },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border/60 bg-card p-6 [&_summary]:cursor-pointer"
            >
              <summary className="flex items-center justify-between font-serif text-lg text-foreground marker:content-none">
                {item.q}
                <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
          <h2 className="text-balance font-serif text-3xl leading-tight md:text-5xl">
            Um novo olhar sobre você começa hoje
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
            Dê a si mesmo o espaço para compreender a sua história. Comece agora uma jornada de reflexão, escuta
            e novas possibilidades para viver o presente
          </p>
          <div className="mt-9">
            <CheckoutButton
              label="Quero meu ebook agora"
              className="bg-background text-primary shadow-background/20 hover:bg-background/90"
            />
          </div>
        </div>
      </section>
    </>
  )
}
