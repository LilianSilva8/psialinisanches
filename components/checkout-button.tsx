import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// URL de checkout do produto Hotmart
const HOTMART_URL = 'https://pay.hotmart.com/K107610707K?bid=1789427133847'

interface CheckoutButtonProps {
  label?: string
  className?: string
}

export function CheckoutButton({
  label = 'Quero conhecer o e-book',
  className,
}: CheckoutButtonProps) {
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
