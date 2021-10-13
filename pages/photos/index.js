import Layout from '../../components/Layout';
import { server } from '../../config';
import PhotosGrid from '../../components/PhotosGrid';
import { useState } from 'react';
import PhotoModal from '../../components/PhotoModal';

const PhotosPage = ({ photos, users }) => {
  const [selectPhoto, setSelectPhoto] = useState(null);

  return (
    <Layout>
      <div className='bg-bluegray-900 min-h-screen'>
        <div className='at-container pt-32'>
          <h1 className='text-3xl mb-3 text-white'>All Photos...</h1>
          <PhotosGrid photos={photos} setSelectPhoto={setSelectPhoto} />
          {selectPhoto && (
            <PhotoModal
              selectPhoto={selectPhoto}
              setSelectPhoto={setSelectPhoto}
              users={users}
              photos={photos}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PhotosPage;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/photos`);
  const photos = await res.json();

  const res1 = await fetch(`${server}/api/users`);
  const users = await res1.json();

  return {
    props: {
      photos,
      users,
    },
  };
};
