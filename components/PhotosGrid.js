import Link from 'next/link';

const PhotosGrid = ({ photos, setSelectPhoto }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      {photos.map((photo, index) => (
        <span
          key={index}
          className='bg-cover h-56 w-full cursor-pointer'
          style={{ backgroundImage: `url(${photo.url})` }}
          onClick={() => setSelectPhoto(photo.url)}
        ></span>
      ))}
    </div>
  );
};

export default PhotosGrid;
