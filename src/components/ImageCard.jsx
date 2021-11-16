import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div class='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
      <div className={`card rounded overflow-hidden shadow-lg`}>
        <div className='overflow-hidden w-full'>
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className='image w-full'
          />
        </div>
        <div className='px-6 py-4'>
          <div class='flex items-center'>
            <img
              class='avatar rounded-full mr-4 mb-3'
              src={image.user.profile_image.small}
              alt={image.user.name}
            />
            <div className='card-title font-bold text-purple-500 text-xl mb-2'>
              {image.user.name}
            </div>
          </div>
          <ul className='info'>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
            <div className='flex items-center'>
              <img
                src='https://www.svgrepo.com/show/5414/like.svg'
                alt='like'
                className='w-5 h-5 mr-2'
              />
              like
              <img
                src='https://www.svgrepo.com/show/146716/dislike.svg'
                alt='dislike'
                className='w-5 h-5 mx-2'
              />
              dislike
            </div>
          </ul>
        </div>
        <div className='px-6 py-4'>
          {image.tags.map((tag, index) => (
            <span
              key={index}
              className='tag inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2'
            >
              #{tag.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
