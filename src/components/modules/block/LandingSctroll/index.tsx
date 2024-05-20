import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import * as S from './LandingSctroll';

const data = [
  {
    description:
      ' I have been using this product for a few weeks now and I am blown away by the results.',
    description_skin:
      'My skin looks visibly brighter and smoother, and I have received so many compliments on my complexion.',
    contact_name: 'Nick Cregan',
    contact_description: 'CEO, Fairlight Management',
  },
  {
    description:
      ' I have been using this product for a few weeks now and I am blown away by the results.',
    description_skin:
      'My skin looks visibly brighter and smoother, and I have received so many compliments on my complexion.',
    contact_name: 'Nick Cregan',
    contact_description: 'CEO, Fairlight Management',
  },
  {
    description:
      ' I have been using this product for a few weeks now and I am blown away by the results.',
    description_skin:
      'My skin looks visibly brighter and smoother, and I have received so many compliments on my complexion.',
    contact_name: 'Nick Cregan',
    contact_description: 'CEO, Fairlight Management',
  },
  {
    description:
      ' I have been using this product for a few weeks now and I am blown away by the results.',
    description_skin:
      'My skin looks visibly brighter and smoother, and I have received so many compliments on my complexion.',
    contact_name: 'Nick Cregan',
    contact_description: 'CEO, Fairlight Management',
  },
  {
    description:
      ' I have been using this product for a few weeks now and I am blown away by the results.',
    description_skin:
      'My skin looks visibly brighter and smoother, and I have received so many compliments on my complexion.',
    contact_name: 'Nick Cregan',
    contact_description: 'CEO, Fairlight Management',
  },
];

export default function LandingSctroll() {
  return (
    <S.LandingSctroll>
      <div className="list-item">
        <Splide
          options={{
            rewind: true,
            width: '100%',
            gap: '1rem',
            perPage: 3,
            perMove: 1,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            breakpoints: {
              1024: {
                perPage: 2,
              },
              768: {
                perPage: 1,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {data.map((item, index) => (
            <SplideSlide
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className="item" key={index}>
                <Image
                  src={'/icons/common/icon-sctroll.svg'}
                  width={48}
                  height={48}
                  alt=""
                />
                <p className="description">{item.description}</p>
                <p className="description-skin">{item.description_skin}</p>
                <div className="contact">
                  <span className="contact-name">{item.contact_name}</span>
                  <p className="contact-description">
                    {item.contact_description}
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </S.LandingSctroll>
  );
}
