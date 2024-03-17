'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const AuthWrapper = ({
  children,
  isLogo,
  backUrl,
  large,
  isBack
}: PropsWithChildren & {
  isLogo: boolean;
  backUrl?: string;
  large?: boolean;
  isBack?: boolean
}) => {
  return (
    <Card
      className={cn(
        'mt-20 dark:shadow-lg shadow-xl',
        large ? 'w-[460px]' : 'w-[400px]'
      )}
    >
      <CardHeader className="flex items-start">
        <Image src="/logo.svg" height={40} width={40} alt="Logo" />
        {isLogo && <div className="text-xl font-semibold">BrainStorm SM</div>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {isBack && <CardFooter>
        <Button variant="link" className="font-normal w-full" size="sm" asChild>
          <Link href={backUrl || '/'}>Back</Link>
        </Button>
      </CardFooter>}
    </Card>
  );
};