import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarClock, Heart, Leaf, MessageCircleHeart, Quote, Users, Video } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-14 md:px-8 md:py-24">
          <div className="order-2 md:order-1">
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-secondary-foreground">
              Psicanálise clínica
            </span>
            <h1 className="mt-6 text-balance font-serif text-4xl leading-[1.1] text-foreground md:text-6xl">
              Compreender sua história pode transformar a forma como você vive o presente
            </h1>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Um espaço de escuta para compreender o que você sente, elaborar suas experiências e construir novas 
              possibilidades para a forma como você vive e se relaciona.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Agende sua sessão <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/ebook"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
              >
                Conheça meu e-book
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-accent/50" />
              <div className="absolute inset-0 rotate-1 overflow-hidden rounded-[2rem] shadow-xl shadow-primary/10">
                <Image
                  src="/images/alini-hero.png"
                  alt="Alini Sanches, psicanalista"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa sobre psicanálise */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-8 text-center md:px-8 md:py-10">
          <p className="text-pretty text-base leading-relaxed">
            A psicanálise oferece um espaço de escuta para aquilo que, muitas vezes, é difícil nomear. 
            Um percurso para compreender sua história, elaborar conflitos e reconhecer como suas experiências 
            atravessam seus sentimentos, escolhas e relações. Cada processo é único e respeita o tempo e a 
            singularidade de cada pessoa.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="mx-auto max-w-6xl px-5 py-14 text-center md:px-8 md:py-16">
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">Como funciona?</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">O primeiro passo pode começar pela escuta.</p>
      </section>

      {/* Etapas do processo */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
          {[
            {
              icon: CalendarClock,
              title: 'Agende um horário',
              text: 'Escolha o dia e o horário que forem mais adequados para você.',
            },
            {
              icon: MessageCircleHeart,
              title: 'Primeiro contato',
              text: 'Um encontro inicial para nos conhecermos, compreender o que motivou sua busca pela análise e esclarecer dúvidas sobre o processo.',
            },
            {
              icon: Leaf,
              title: 'Início do processo',
              text: 'A partir desse primeiro encontro, caso faça sentido para você, definimos a frequência e o formato dos atendimentos.',
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <item.icon className="size-5" />
              </span>
              <div>
                <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-6 pb-14 text-center md:px-8 md:pt-8 md:pb-16">
        <h2 className="font-serif text-base text-foreground md:text-lg">Os atendimentos são conduzidos com ética, 
        respeito à singularidade e confidencialidade.</h2>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 text-center md:px-8 md:py-16">
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">Quando buscar análise?</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A análise pode ser procurada quando algo 
        causa sofrimento, se repete ou parece difícil de compreender. Ansiedade, conflitos nos relacionamentos, 
        angústias, perdas, mudanças, dificuldades nas escolhas ou questões que nem sempre conseguem ser nomeadas 
        podem encontrar na análise um espaço de escuta e elaboração.</p>
      </section>

      {/* Apresentação */}
<section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
  <div className="grid items-center gap-12 md:grid-cols-2">
    <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-lg shadow-primary/10">
      <Image
        src="/images/alini-sobre.png"
        alt="Alini Sanches em seu espaço de atendimento"
        fill
        className="object-cover"
      />
    </div>
    <div>
      <h2 className="text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
        Alini Sanches | Psicanalista
      </h2>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        Cada pessoa chega à análise trazendo uma história singular, atravessada por experiências,
        relações, escolhas, conflitos e questões que nem sempre encontram palavras.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Na psicanálise, não há respostas prontas. É por meio da fala e da escuta que aquilo que se repete, 
        inquieta ou causa sofrimento pode ganhar novos sentidos ao longo do processo.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Atendo crianças, adolescentes, adultos e casais, nas modalidades online e presencial. 
        Cada atendimento é conduzido respeitando o tempo, a história e a singularidade de quem chega até esse espaço.
      </p>
      <Link
        href="/sobre"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
      >
        Conheça minha trajetória <ArrowRight className="size-4" />
      </Link>
    </div>
  </div>
</section>

      {/* Serviços */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Como posso ajudar</span>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Diferentes formas de iniciar seu processo de análise
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Video, title: 'Atendimento individual online', text: 'Sessões de psicanálise por videochamada, possibilitando a continuidade do processo analítico independentemente de onde você esteja.' },
              { icon: Heart, title: 'Atendimento presencial', text: 'Sessões presenciais em um espaço reservado, destinado à fala, à escuta e à elaboração.' },
              { icon: Users, title: 'Atendimento de casais', text: 'Um espaço de escuta para compreender os impasses, conflitos e repetições presentes na relação. A partir da fala de cada um, o processo possibilita reconhecer os modos de se relacionar e os sentidos que atravessam o vínculo, favorecendo a elaboração das questões que emergem na relação.' },
            ].map((s) => (
              <div
                key={s.title}
                className="group rounded-3xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              Ver todos os serviços <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Destaque do Ebook */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 overflow-hidden rounded-[2.5rem] bg-primary px-6 py-12 text-primary-foreground md:grid-cols-2 md:px-14 md:py-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
              Meu ebook
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight md:text-4xl">
              Compreender sua história pode transformar seu presente.
            </h2>
            <p className="mt-5 leading-relaxed text-primary-foreground/85">
              Este e-book é um convite à reflexão a partir da psicanálise. Um percurso para olhar para suas repetições, 
              inquietações e experiências com menos julgamento e mais curiosidade, abrindo espaço para compreender os 
              sentidos presentes na forma como você se relaciona consigo e com o outro.**
            </p>
            <Link
              href="/ebook"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3 text-sm font-medium text-primary transition-transform hover:scale-[1.02]"
            >
              Conheça meu e-book <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <Image
              src="/images/ebook-mockup.png"
              alt="Capa do ebook de Alini Sanches"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-secondary/50">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
          <h2 className="text-balance font-serif text-3xl leading-tight text-foreground md:text-5xl">
            Há questões que só começam a encontrar novos sentidos quando podem ser colocadas em palavras.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            A análise oferece um espaço de escuta para aquilo que inquieta, se repete ou ainda não pôde ser elaborado.
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
