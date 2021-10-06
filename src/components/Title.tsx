import React, { FC } from "react";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = (props: TitleProps) => {
  const {title} = props;
  return (
  <div className="section-title">
    <h2>{title || 'default title'}</h2>
    <div className="underline"></div>
  </div>
  );
}

export default Title;
