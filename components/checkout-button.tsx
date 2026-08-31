import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// Substitua pelo link real do produto no Hotmart
const HOTMART_URL = 'https://pay.hotmart.com/'

export function CheckoutButton({
  label = 'Quero meu exemplar agora',
  className,
}: {
  label?: string
  className?: string
}) {
  return (
    <a
      href={HOTMART_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:bg-primary/90',
        className,
      )}
    >
      {label}
      <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}
