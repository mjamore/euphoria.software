/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YM1e2ZtOUpa
 */
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-800'>
      <header className='w-full px-6 py-4 flex justify-between items-center bg-gray-800 shadow'>
        <div className='flex items-center'>
          <svg
            className=' h-8 w-8 text-blue-300'
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
          <span className='ml-3 text-xl font-semibold text-white'>Euphoria Software</span>
        </div>
        <nav className='space-x-4'>
          <Link className='text-gray-200 hover:text-blue-400' href='#'>
            Projects
          </Link>
          <Link className='text-gray-200 hover:text-blue-400' href='#'>
            About
          </Link>
          <Link className='text-gray-200 hover:text-blue-400' href='#'>
            Contact
          </Link>
        </nav>
      </header>
      <main className='flex-grow'>
        <section className='py-20 px-6 text-center'>
          <h1 className='text-5xl font-bold text-white'>Euphoria Software</h1>
          <p className='mt-4 text-lg text-gray-300'>Having fun building things for the web</p>
        </section>
        <section className='py-20 px-6 bg-gray-900'>
          <h2 className='text-4xl font-bold text-center text-white'>Projects</h2>
          <div className='mt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='flex flex-col items-center text-center'>
              <svg
                className=' h-16 w-16 mb-4 text-blue-300'
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
              <h3 className='text-2xl font-semibold text-white'>Web Development</h3>
              <p className='mt-2 text-gray-400'>We build responsive and performant web applications.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <svg
                className=' h-16 w-16 mb-4 text-blue-300'
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
                <rect height='20' rx='2' ry='2' width='14' x='5' y='2' />
                <path d='M12 18h.01' />
              </svg>
              <h3 className='text-2xl font-semibold text-white'>Mobile Development</h3>
              <p className='mt-2 text-gray-400'>We create mobile apps that run on iOS and Android devices.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <svg
                className=' h-16 w-16 mb-4 text-blue-300'
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
                <ellipse cx='12' cy='5' rx='9' ry='3' />
                <path d='M3 5V19A9 3 0 0 0 21 19V5' />
                <path d='M3 12A9 3 0 0 0 21 12' />
              </svg>
              <h3 className='text-2xl font-semibold text-white'>Database Design</h3>
              <p className='mt-2 text-gray-400'>We design efficient and scalable databases.</p>
            </div>
          </div>
        </section>
        <section className='py-20 px-6 bg-gray-800'>
          <h2 className='text-4xl font-bold text-center text-white'>Say Hello</h2>
          <div className='mt-10 max-w-md mx-auto bg-gray-700 rounded-lg shadow-lg overflow-hidden'>
            <form className='space-y-6 p-6'>
              <input
                aria-label='Email Address'
                className='w-full px-4 py-3 rounded border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-100 bg-gray-700'
                placeholder='Email Address'
                type='email'
              />
              <textarea
                aria-label='Message'
                className='w-full px-4 py-3 rounded border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-100 bg-gray-700'
                placeholder='Message'
              />
              <Button className='w-full px-8 py-3 rounded bg-blue-500 text-white' type='submit' variant='default'>
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
