import Layout from '../../../components/Layout';
import { server } from '../../../config';
import { useRouter } from 'next/router';
import { useState } from 'react';
import PhotosGrid from '../../../components/PhotosGrid';
import PhotoModal from '../../../components/PhotoModal';

const CategoryPage = ({ photos, users, categories }) => {
  const router = useRouter();

  const [selectPhoto, setSelectPhoto] = useState(null);

  const title = categories.filter(
    (cat) => cat.name === router.query.category
  )[0].description;

  return (
    <Layout>
      <div className='bg-bluegray-900 min-h-screen'>
        <div className='at-container pt-32'>
          <h1 className='text-3xl mb-3 text-white'>{title}</h1>
          {photos.length > 0 ? (
            <PhotosGrid photos={photos} setSelectPhoto={setSelectPhoto} />
          ) : (
            <h1 className='text-xl text-white'>No photos for the moment !</h1>
          )}
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

export default CategoryPage;

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/photos/${context.params.category}`);
  const photos = await res.json();

  const res1 = await fetch(`${server}/api/users`);
  const users = await res1.json();

  const res2 = await fetch(`${server}/api/categories`);
  const categories = await res2.json();

  return {
    props: {
      photos,
      users,
      categories,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/categories`);

  const categories = await res.json();

  const names = categories.map((cat) => cat.name);
  const paths = names.map((name) => ({
    params: { category: name.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
