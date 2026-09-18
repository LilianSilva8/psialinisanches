import Link from 'next/link'
import { Camera, Mail, MessageCircle } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-semibold text-primary">Alini Sanches</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Psicanalista
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Um espaço de escuta para compreender sua história e elaborar aquilo que atravessa sua experiência.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg text-foreground">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/sobre" className="transition-colors hover:text-primary">Sobre</Link></li>
              <li><Link href="/servicos" className="transition-colors hover:text-primary">Serviços</Link></li>
              <li><Link href="/ebook" className="transition-colors hover:text-primary">Ebook</Link></li>
              <li><Link href="/contato" className="transition-colors hover:text-primary">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-foreground">Vamos conversar</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://instagram.com/psi.alinisanches"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Camera className="size-4" /> @psi.alinisanches
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=5511919931336&text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+os+atendimentos+e+sess%C3%B5es+de+psican%C3%A1lise.+&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:psi.alinisanches@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="size-4" /> psi.alinisanches@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Alini Sanches · Psicanalista. Todos os direitos reservados.</p>
          <p>Este site não substitui atendimento médico ou psicológico de emergência.</p>
        </div>
      </div>
    </footer>
  )
}
