import React from 'react';
type IconProps = {
  id: string;
  className?: string;
  size?: number | string;
  height?: number | string;
};

export const Icon: React.FC<IconProps> = ({ id, className, size, height }) => {
  return (
    <svg className={className} height={height} width={size}>
      <use href={`svg/sprite.svg#${id}`}></use>
    </svg>
  );
};
