import clsx from 'clsx';

type PropsType = {
  color: string;
  text: string;
};

const SectionTitle = ({ color, text }: PropsType) => {
  return (
    <h2
      className={clsx('text-[44px] font-semibold', {
        'text-black': color === 'black',
        'text-blue': color === 'blue',
      })}>
      {text}
    </h2>
  );
};

export default SectionTitle;
