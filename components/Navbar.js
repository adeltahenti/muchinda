import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = ({ setSubTitle, txtConf }) => {
  const router = useRouter();

  useEffect(() => {
    const sMenu = menu.filter((m) => router.pathname.includes(m.path));

    sMenu.length < 2
      ? setSubTitle(` | ${sMenu[0].name}`)
      : setSubTitle(` | ${sMenu[1].name}`);
  }, []);

  const menu = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Photos',
      path: '/photos',
      subMenu: [
        {
          name: 'Art / Abstrait',
          path: '/photos/art',
        },
        {
          name: 'Alimentation / Culinaire',
          path: '/photos/alimentation',
        },
        {
          name: 'Animaux / Faune',
          path: '/photos/animaux',
        },
        {
          name: 'Architecture Intérieur / Extérieur',
          path: '/photos/architechture',
        },
        {
          name: 'Nature / Flore',
          path: '/photos/nature',
        },
        {
          name: 'Paysage / Voyage',
          path: '/photos/paysage',
        },
        {
          name: 'Portrait',
          path: '/photos/portrait',
        },
      ],
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <nav className='bg-transparent absolute w-full'>
      <div className='at-container'>
        <div
          className={`flex items-center justify-between pt-10 pb-4 ${
            txtConf === 'black' ? 'text-black' : 'text-white'
          }`}
        >
          <span>Logo</span>
          <div className='flex items-center space-x-3'>
            {menu.map((m, index) => (
              <span
                key={index}
                className={`hover:text-pink-600 ${
                  router.pathname.includes(m.path) &&
                  (m.path === router.pathname
                    ? 'text-pink-600'
                    : m.path.length > 1 && 'text-pink-600')
                } ${m.subMenu && 'relative group'}`}
              >
                <Link href={m.path}>{m.name}</Link>
                {m.subMenu && (
                  <span className='absolute -left-32 top-6 bg-white text-black hidden group-hover:block'>
                    <div className='grid grid-cols-1 divide-y w-56 text-center z-10'>
                      {m.subMenu.map((me, index) => (
                        <span
                          key={index}
                          className={`text-xs py-1 hover:bg-bluegray-600 hover:text-white ${
                            me.path === router.asPath &&
                            'bg-bluegray-600 text-white'
                          }`}
                        >
                          <Link href={me.path}>{me.name}</Link>
                        </span>
                      ))}
                    </div>
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  txtConf: 'white',
};

export default Navbar;
