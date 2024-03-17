import Image from 'next/image';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function MainNav() {
    return (
        <div className="flex items-center space-x-2 lg:space-x-6">
            <Link href={'/'}>

                <Button variant="ghost" className="p-0">
                    <Image src="/logo.svg" alt="Home" width="40" height="40" />

                </Button>
            </Link>
        </div>
    );
}