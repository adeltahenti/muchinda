import { useState } from 'react';
import Meta from './Meta';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [subTitle, setSubTitle] = useState('');

  return (
    <>
      <Meta title={subTitle} />
      <div className='flex flex-col'>
        <Navbar setSubTitle={setSubTitle} />
        <main className='flex-grow'>{children}</main>
      </div>
    </>
  );
};

export default Layout;
