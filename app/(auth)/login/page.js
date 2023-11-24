import React from 'react'
import LoginForm from './Form/LoginForm'
import logo from "@/public/logo.png"
import loginImage from "@/public/fpr-login.svg"
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
    return (
        <main className='min-h-[100vh] flex items-center'>
            <div className='w-[80%] mx-auto justify-between flex flex-wrap'>
                <div className='w-full lg:w-[40%]'>
                    <div className='lg:mb-10 mb-5'>
                        <Image height={250} src={logo} width={250} alt='logo main' />
                    </div>
                    <div className='mb-4'>
                        <h4 className='text-xl font-semibold'>Login</h4>
                        <p className='text-sm font-light tracking-wider'>login using your email id and password</p>
                    </div>
                    <LoginForm />
                    <div className='mt-2'>
                        <Link href={"/forget-password"} className='text-blue-600 text-sm'>Forget Password?</Link>
                    </div>
                </div>
                <div className='w-full lg:w-[49%] mt-5 sm:flex sm:justify-center lg:flex-none lg:justify-start'>
                    <div className='w-full '>
                        <Image className='my-2 mx-auto' src={loginImage} width={450} alt='login page image' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login