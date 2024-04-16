import Button from './ui/Button';
import Input from './ui/Input';
import { v4 } from 'uuid';

const inputsList = [
  {
    label: 'Ваше имя',
    placeholder: 'Как вас зовут?',
  },
  {
    label: 'Ваш номер телефона',
    placeholder: 'Какой ваш контактный номер телефона?',
  },
  {
    label: 'Ваше сообщение',
    placeholder: 'Ваше сообщение',
  },
];

const ContactForm = () => {
  return (
    <form className="w-[400px] flex flex-col gap-[78px] ">
      <div className="flex flex-col gap-[20px]">
        {inputsList.map((input) => (
          <Input key={v4()} label={input.label} placeholder={input.placeholder} />
        ))}
      </div>
      <Button text="Отправить" />
    </form>
  );
};

export default ContactForm;
