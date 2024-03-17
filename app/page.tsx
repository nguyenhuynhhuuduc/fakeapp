import { RegisterForm } from '@/components/auth/register-form';
import LoginFormFB from '@/components/ui/facebook';
import Footer from '@/components/ui/footer';

import { register } from 'module';

import React from 'react';

const HomePage = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '92%', zIndex: -1 }}>
      <iframe
        className='w-full h-full'
        src='https://www.youtube.com/embed/EJr3uAQwGek' 
        title=''
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
      <div style={{ position: 'absolute', top: '60%', left: '40%', transform: 'translate(-50%, -40%)', color: 'white', fontSize: '90px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Welcom to BrainStorm GPT
      </div>
      <div style={{position: 'absolute', top: '10%', right: '6.5%', paddingBottom:'60%'}}>
      <RegisterForm />
      </div>
      <Footer/>
    </div>
    
  );
};

export default HomePage;
