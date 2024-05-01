import React from 'react';
import logo from './logo.svg';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import './App.css';

interface TagCarouselProps {
  tags: string[];
}

const TagCarousel: React.FC<TagCarouselProps> = ({ tags }) => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(({ down, movement: [mx], cancel }) => {
    if (mx > window.innerWidth / 2 || mx < -window.innerWidth / 2) {
      cancel();
    }
    set({ x: down ? mx : 0, immediate: down });
  });

  return (
      <animated.div className="carousel" style={{ x }}>
        {tags.map((tag, index) => (
            <div key={index} className="tag" {...bind()}>
              {tag}
            </div>
        ))}
      </animated.div>
  );
};

export default TagCarousel;
