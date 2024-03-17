import { Button, buttonVariants } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Link from 'next/link';
import { Settings2Icon, UserCircle2Icon } from 'lucide-react';

export default async function UserButton() {
    return (
      <div className="flex items-center space-x-3">
        <Link href={'/login'} className={buttonVariants({
            variant: 'outline'
        })}>Login</Link>
      </div>
    )

 
}