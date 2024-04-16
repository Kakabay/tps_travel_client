import clsx from 'clsx';

type PropsType = {
  color?: 'black' | 'blue' | 'white';
  text: string;
  type?: 'default' | 'underline';
};

const SectionTitle = ({ color = 'black', text, type = 'default' }: PropsType) => {
  return type === 'default' ? (
    <h2
      className={clsx('text-[44px] font-semibold', {
        'text-black': color === 'black',
        'text-blue': color === 'blue',
        'text-white': color === 'white',
      })}>
      {text}
    </h2>
  ) : (
    <h2
      className={clsx('text-[44px] font-semibold text-center', {
        'text-black': color === 'black',
        'text-blue': color === 'blue',
      })}>
      Начни <span className="border-b-[3px] border-blue">своё</span> путешествие с нами
    </h2>
  );
};

export default SectionTitle;
