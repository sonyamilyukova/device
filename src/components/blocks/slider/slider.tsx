import React, { useState }  from 'react';
import { useStore } from 'effector-react';
import { $slides } from '../../../model/slides';
import { buyProduct } from '../../../model/cart';
import { Title, Table } from '../../ui';
import {
  StyledSlider,
  Slides,
  Slide,
  Number,
  Wrapper,
  LeftArrow,
  RightArrow,
  TextContent,
  BulletList,
  Bullet,
  StyledButton
} from './styles';

export interface IBulletProps {
  isCurrent: boolean;
}

const Slider: React.FC = () => {
  const slides = useStore($slides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const lastSlide = slides.length - 1;
  const slide = slides[currentSlide];

  return (
    <StyledSlider>
      <h2 className='visually-hidden'>Примеры товаров</h2>
      <Slides>
        <Slide>
          <Number>{slide.id.toString().length === 1 ? `0${slide.id}` : slide.id}</Number>
          <Wrapper>
            <LeftArrow
              type='button'
              onClick={() =>
              currentSlide === 0 ?
                setCurrentSlide(lastSlide) :
                setCurrentSlide(currentSlide - 1)}>
              <span className='visually-hidden'>Предыдущий слайд</span>
            </LeftArrow>
            <img src={slide.image} alt={slide.title} width={560} height={560} />
            <RightArrow
              type='button'
              onClick={() =>
                currentSlide === lastSlide ?
                  setCurrentSlide(0) :
                  setCurrentSlide(currentSlide + 1)}>
              <span className='visually-hidden'>Следующий слайд</span>
            </RightArrow>
          </Wrapper>
          <TextContent>
            <Title as='h3' size='L' marginTop={130} marginBottom={30}>{slide.moto}</Title>
            <p>{slide.description}</p>
            <StyledButton
              highlighted
              light
              type='button'
              onClick={() => buyProduct(slide)}
            >
              Купить
            </StyledButton>
            <BulletList>
              {slides.map((_, index) => (
                <li key={index}>
                  <Bullet
                    type='button'
                    onClick={() => setCurrentSlide(index)}
                    isCurrent={index === currentSlide}
                  />
                </li>
              ))}
            </BulletList>
            {slide.qualities?.length ? (
              <Table rows={slide.qualities} />
            ) : null}
          </TextContent>
        </Slide>
      </Slides>
    </StyledSlider>
  )
};

export default Slider;
