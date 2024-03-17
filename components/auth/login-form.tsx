'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/shcemas';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useState, useTransition } from 'react';
import Link from 'next/link';
// import { login } from '@/actions/login';
import { Button, buttonVariants } from '../ui/button';
import { AuthWrapper } from './auth-wrapper';
import { FormError } from './form-error';
import { login } from '@/actions/login';
import { Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('');
    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data?.error);
          }
            })
        .catch(() => {
          setError('Something went wrong');
        });
    });
    setError('Not find your account in system')
  };

  return (
    <AuthWrapper isLogo isBack>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <div className="flex items-center justify-between p-3">
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal"
                    >
                      <Link href="/auth/reset">Forgot password?</Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal ml-2"
                    >
                      <Link href="/auth/register">
                        Don&apos;t have an account!
                      </Link>
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Link href={'/login/facebook'} className={cn(buttonVariants({variant:'link'}),'w-full')} >
            <Facebook />
            Login with FaceBook
          </Link>
        </form>
      </Form>
    </AuthWrapper>
  );
};