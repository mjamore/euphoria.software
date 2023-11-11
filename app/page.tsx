/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YM1e2ZtOUpa
 */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-800'>
      <header className='w-full px-6 py-4 flex justify-between items-center bg-gray-800 shadow'>
        <a className='flex items-center' href='/'>
          <svg
            className='h-8 w-8 text-blue-300'
            fill='none'
            height='24'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            width='24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polyline points='16 18 22 12 16 6' />
            <polyline points='8 6 2 12 8 18' />
          </svg>
          <span className='hidden md:inline ml-3 text-xl font-semibold text-white'>Euphoria Software</span>
        </a>
        <nav className='space-x-4'>
          <Link className='text-gray-200 hover:text-blue-400' target='_blank' href='https://popularbelief.info'>
            popularbelief.info
          </Link>
          <Link className='text-gray-200 hover:text-blue-400' target='_blank' href='https://codewithlove.blog'>
            codewithlove.blog
          </Link>
          <Link className='hidden sm:inline text-gray-200 hover:text-blue-400' href='#'>
            Contact
          </Link>
        </nav>
      </header>
      <main className='flex-grow'>
        <section className='py-36 px-6 text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
          <h1 className='text-3xl sm:text-5xl mb-12 font-bold text-white/75 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_100%)]'>Euphoria Software</h1>
          <h2 className='mt-4 text-xl sm:text-2xl text-black'>Having fun building for the web</h2>
        </section>
        <section className='py-20 px-6 bg-gray-900'>
          <h2 className='text-4xl mb-20 font-bold text-center text-white/75'>Projects</h2>
          <div className='gap-20 flex flex-col md:flex-row justify-evenly items-center'>
            <a className='flex flex-col items-center text-center rounded-lg p-1' href='https://popularbelief.info' target='_blank'>
              <Image alt='Popular Belief' className='mb-6 rounded-lg' height={100} src='/popular-belief-logo.png' width={100} />
              <h3 className='text-2xl font-semibold text-white'>popularbelief.info</h3>
              <p className='mt-2 text-gray-400'>What Do People Really Believe?</p>
              <p className='mt-2 text-gray-400'>Now you can find out!</p>
            </a>
            <a className='flex flex-col items-center text-center rounded-lg p-1' href='https://codewithlove.blog' target='_blank'>
              <Image alt='Popular Belief' className='mb-6 rounded-lg' height={100} src='/code-with-love-logo.png' width={100} />
              <h3 className='text-2xl font-semibold text-white'>codewithlove.blog</h3>
              <p className='mt-2 text-gray-400'>Follow my journey as a software engineer.</p>
            </a>
          </div>
        </section>
        <section className='py-20 px-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
          <h2 className='text-4xl font-bold text-center text-white/75'>Let&apos;s Connect</h2>
          <div className='mt-10 max-w-md mx-auto bg-white/10 rounded-lg shadow-lg overflow-hidden'>
            <form className='space-y-6 p-6 backdrop-blur-lg'>
              <input
                aria-label='Email Address'
                className='w-full px-4 py-3 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-black bg-white'
                placeholder='Email Address'
                type='email'
              />
              <textarea
                aria-label='Message'
                className='w-full px-4 py-3 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-black bg-white'
                placeholder='Message'
              />
              <Button className='w-full px-8 py-3 rounded bg-white hover:bg-gray-200 text-black' type='submit' variant='default'>
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className='w-full py-6 px-6 bg-gray-800 shadow'>
        <div className='flex justify-center items-center'>
          <p className='text-gray-300'>© {new Date().getFullYear()} Euphoria Software LLC</p>
        </div>
      </footer>
    </div>
  );
}
