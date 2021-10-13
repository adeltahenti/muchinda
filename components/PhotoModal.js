const PhotoModal = ({ selectPhoto, setSelectPhoto, users, photos }) => {
  const onClickHandle = (e) => {
    if (e.target.classList.contains('showPhoto')) {
      setSelectPhoto(null);
    }
  };

  const user = users.filter(
    (user) =>
      user.id ===
      photos.filter((photo) => photo.url === selectPhoto)[0].publishedBy
  )[0];

  return (
    <div className='showPhoto' onClick={onClickHandle}>
      <div className='w-3/5 my-10 mx-auto bg-gray-50 p-1'>
        <img
          src={selectPhoto}
          alt='Photo'
          className='object-cover overflow-hidden'
        />
        <div className='flex items-center justify-between text-black mt-1 text-xs sm:text-sm px-2 sm:px-5'>
          <div className='flex items-center justify-center space-x-1 sm:space-x-2'>
            <img
              src={user.avatar}
              alt={user.name}
              className='rounded-full w-4 sm:w-8 h-4 sm:h-8 object-cover overflow-hidden'
            />
            <span>{user.name}</span>
          </div>
          <button className='px-2 py-1 bg-pink-500 rounded text-white hover:bg-pink-600'>
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
