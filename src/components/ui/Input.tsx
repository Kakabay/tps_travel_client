import { Dispatch, SetStateAction } from 'react';

type PropsType = {
  label: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const Input = ({ label, placeholder, value, setValue }: PropsType) => {
  return (
    <div className="flex flex-col gap-[5px]">
      <label htmlFor="name" className="text-base leading-[140%] text-black">
        {label}
      </label>
      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        type="text"
        id="name"
        placeholder={placeholder}
        className="w-full border outline-none text-[#5B5B5B] border-[#999999] p-[10px] rounded-[5px] focus:border-[#666666] focus:text-[#333333] hover:text-[#424242] hover:border-[#808080]"
      />
    </div>
  );
};

export default Input;
