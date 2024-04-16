type PropsType = {
  text: string;
};

const Button = ({ text }: PropsType) => {
  return (
    <button className="text-white font-semibold leading-[140%] py-[16px] px-[20px] bg-blue flex justify-center items-center rounded-full w-fit m-auto">
      {text}
    </button>
  );
};

export default Button;
