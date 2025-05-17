import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { formatInTimeZone } from 'date-fns-tz'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateTime(isoString: string) {
  try {
    return formatInTimeZone(
      new Date(isoString),
      'America/Sao_Paulo',
      'HH:mm - dd/MM/yyyy',
      { locale: ptBR }
    )
  } catch (error) {
    console.error('Erro ao formatar data:', error)
    return 'Data inválida'
  }
}
