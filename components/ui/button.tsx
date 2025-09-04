'use client'; import * as React from 'react'; import { cn } from '@/lib/cn';
type P=React.ButtonHTMLAttributes<HTMLButtonElement>&{asChild?:boolean};
export function Button({asChild,className,children,...props}:P){
 if(asChild&&React.isValidElement(children)){const ch=children as React.ReactElement<any>;return React.cloneElement(ch,{className:cn(ch.props.className,className)})}
 return <button className={cn('inline-flex items-center justify-center',className)} {...props}>{children}</button>;
} export default Button;
