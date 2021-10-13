import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HomePage = () => {
  const router = useRouter();

  console.log(router.asPath);

  return (
    <Layout>
      <div
        id='home'
        className='bg-cover bg-center grid place-items-center min-h-screen text-white'
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
      >
        <div className='flex flex-col items-center space-y-5'>
          <span className='text-4xl'>Home Page</span>
          <span className='text-lg px-3 py-2 bg-pink-800 hover:bg-pink-900'>
            <Link href='#about'>About Me</Link>
          </span>
        </div>
      </div>
      <div
        id='about'
        className='grid place-items-center min-h-screen bg-olive-200'
      >
        <div className='flex flex-col items-center space-y-5'>
          <span className='text-4xl'>About Page</span>
          <span className='flex flex-row space-x-3'>
            <span className='text-lg px-3 py-2 border-2 border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white'>
              <Link href='#services'>Services</Link>
            </span>
            <span className='text-lg px-3 py-2 border-2 border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white'>
              <Link href='#home'>
                <i className='fas fa-home cursor-pointer'></i>
              </Link>
            </span>
          </span>
        </div>
      </div>
      <div
        id='services'
        className='grid place-items-center min-h-screen bg-olive-800 text-white'
      >
        <div className='flex flex-col items-center space-y-5'>
          <span className='text-4xl'>Services Page</span>
          <span className='flex flex-row space-x-3'>
            <span className='text-lg px-3 py-2 bg-pink-800 hover:bg-pink-900'>
              <Link href='#contact'>Contact</Link>
            </span>
            <span className='text-lg px-3 py-2 bg-pink-800 hover:bg-pink-900'>
              <Link href='#about'>
                <i className='far fa-address-card cursor-pointer'></i>
              </Link>
            </span>
            <span className='text-lg px-3 py-2 bg-pink-800 hover:bg-pink-900'>
              <Link href='#home'>
                <i className='fas fa-home cursor-pointer'></i>
              </Link>
            </span>
          </span>
        </div>
      </div>
      <div
        id='contact'
        className='grid place-items-center min-h-screen bg-olive-50'
      >
        <div className='flex flex-col items-center space-y-5'>
          <span className='text-4xl'>Contact Page</span>
          <span className='flex flex-row space-x-3'>
            {/* <span className='text-lg px-3 py-2 border-2 border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white'>
              <Link href='#services'>Services</Link>
            </span> */}
            <span className='text-lg px-3 py-2 border-2 border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white'>
              <Link href='#services'>
                <i className='fas fa-concierge-bell cursor-pointer'></i>
              </Link>
            </span>
            <span className='text-lg px-3 py-2 border-2 border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white'>
              <Link href='#about'>
                <i className='fas fa-address-card cursor-pointer'></i>
              </Link>
            </span>
            <span className='text-lg px-3 py-2 border-2 border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white'>
              <Link href='#home'>
                <i className='fas fa-home cursor-pointer'></i>
              </Link>
            </span>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
