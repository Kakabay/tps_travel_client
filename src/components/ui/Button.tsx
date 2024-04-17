import React from 'react';

type PropsType = {
  disabled: boolean;
  children: React.ReactNode;
};

const Button = ({ disabled, children }: PropsType) => {
  return (
    <button
      disabled={disabled}
      className="text-white font-semibold leading-[140%] py-[16px] px-[20px] bg-blue flex justify-center items-center rounded-full min-w-[135px] w-fit m-auto">
      {children}
    </button>
  );
};

export default Button;
