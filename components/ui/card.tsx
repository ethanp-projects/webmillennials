import * as React from 'react'; import { cn } from '@/lib/cn';
export function Card(p:React.HTMLAttributes<HTMLDivElement>){return <div {...p} className={cn('rounded-2xl border border-slate-200 bg-white',p.className)} />}
export function CardContent(p:React.HTMLAttributes<HTMLDivElement>){return <div {...p} className={cn('p-4',p.className)} />}
