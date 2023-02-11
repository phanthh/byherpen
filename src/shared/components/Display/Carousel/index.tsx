import styled from "styled-components";
import React, { useState, useEffect } from "react";

//-------------------------------------------------------

type CarouselItemProps = React.PropsWithChildren<{
  width?: string;
}>;

export const CarouselItemComponent: React.FC<CarouselItemProps> = ({
  children,
  width = "100%",
}) => {
  return <CarouselItem width={width}>{children}</CarouselItem>;
};

const CarouselItem = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: green;
  color: #fff;
  border: 1px solid red;
`;

//-------------------------------------------------------

type CarouselProps = React.PropsWithChildren<{
  autoScroll?: boolean;
  scrollStep?: number;
  scrollInterval?: number;
  numberPerPage?: number;
  hoverPaused?: boolean;
}>;

export const CarouselComponent: React.FC<CarouselProps> = ({
  children,
  autoScroll = true,
  scrollStep = 1,
  scrollInterval = 1000,
  numberPerPage = 1,
  hoverPaused = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        if (!paused) {
          const childCount = React.Children.count(children);
          let newIndex = activeIndex + scrollStep;
          if (newIndex > childCount - numberPerPage) {
            newIndex = 0;
          }
          setActiveIndex(newIndex);
        }
      }, scrollInterval);

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
    return;
  });

  return (
    <Carousel
      onMouseEnter={() => hoverPaused && setPaused(true)}
      onMouseLeave={() => hoverPaused && setPaused(false)}
    >
      <CarouselInner
        style={{
          transform: `translateX(-${(activeIndex * 100) / numberPerPage}%)`,
        }}
      >
        {React.Children.map(children, (child, _) => {
          if (!React.isValidElement<CarouselItemProps>(child)) {
            return child;
          }
          return React.cloneElement(child, {
            width: `${100 / numberPerPage}%`,
          });
        })}
      </CarouselInner>
    </Carousel>
  );
};

const Carousel = styled.div`
  overflow: hidden;
`;

const CarouselInner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;
