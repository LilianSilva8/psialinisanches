'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/ebook', label: 'Ebook' },
  { href: '/contato', label: 'Contato' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl font-semibold tracking-wide text-primary">
            Alini Sanches
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
            Psicanalista
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary',
                pathname === link.href && 'text-primary',
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1.5 left-0 h-px w-full bg-primary" />
              )}
            </Link>
          ))}
          <Link
            href="/contato"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Agende sua sessão
          </Link>
        </nav>

        <button
          type="button"
          className="text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 bg-background px-5 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'rounded-lg px-3 py-2.5 text-sm tracking-wide text-foreground/80 transition-colors hover:bg-muted hover:text-primary',
                pathname === link.href && 'bg-muted text-primary',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
          >
            Agende sua sessão
          </Link>
        </nav>
      )}
    </header>
  )
}
