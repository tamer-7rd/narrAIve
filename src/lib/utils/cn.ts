// Утилита для объединения нескольких классов (используется при слиянии двух и более строк)
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}
