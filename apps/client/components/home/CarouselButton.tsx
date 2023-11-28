import React, { PropsWithChildren } from 'react';

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const CarouselButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type='button' {...restProps}>
      {children}
    </button>
  );
};
