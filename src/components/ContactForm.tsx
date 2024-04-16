import { useState } from 'react';
import Button from './ui/Button';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';

type FormFields = {
  name: string;
  phoneNumber: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const [mailSuccess, setMailSuccess] = useState<boolean>(false);
  const [mailError, setMailError] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setMailSuccess(false);
    const serviceId = 'service_g2szae9';
    const templateId = 'template_3pjy02a';
    const publicKey = 'zdvl0WPgMwiv7__9i';

    const dataParams = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: data.name,
        from_phone: data.phoneNumber,
        to_name: 'TPS',
        message: data.message,
      },
    };

    try {
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', dataParams);
      if (res.status === 200) {
        setMailSuccess(true);
        setMailError(false);
      }
    } catch (error) {
      setMailError(true);
      console.error(error);
    }
  };

  return (
    <form className="w-[400px] flex flex-col gap-[78px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[20px]">
        {/* {inputsList.map((input) => (
          <Input
            value={input.type === 'name' ? name : input.type === 'phone' ? phoneNumber : message}
            setValue={
              input.type === 'name' ? setName : input.type === 'phone' ? setPhoneNumber : setMessage
            }
            key={v4()}
            label={input.label}
            placeholder={input.placeholder}
          />
        ))} */}
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="name" className="text-base leading-[140%] text-black">
            Ваше имя
          </label>
          <input
            {...register('name', {
              required: true,
              minLength: 2,
            })}
            type="text"
            id="name"
            placeholder="Как вас зовут?"
            className={clsx(
              'w-full border outline-none text-[#5B5B5B] border-[#999999] p-[10px] rounded-[5px] focus:border-[#666666] focus:text-[#333333] hover:text-[#424242] hover:border-[#808080]',
              { 'border-[#D12A2A]': errors.name },
            )}
          />
          {errors.name && (
            <p className="text-[#D12A2A] text-[14px] leading-[140%]">
              Ошибка. Имя должно состоять как минимум из 2 символов.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="phone" className="text-base leading-[140%] text-black">
            Ваш номер телефона
          </label>
          <div
            className={clsx(
              'flex items-center gap-1 w-full border outline-none text-[#5B5B5B] border-[#999999] pr-[10px] pl-[0px] rounded-[5px] focus:border-[#666666] focus:text-[#333333] hover:text-[#424242] hover:border-[#808080] overflow-hidden',
              { 'border-[#D12A2A]': errors.phoneNumber },
            )}>
            <span className="text-base p-[10px] px-[15px] bg-lightBlue">+</span>
            <input
              {...register('phoneNumber', {
                required: true,
                minLength: 11,
              })}
              type="text"
              id="phone"
              placeholder="Какой ваш контактный номер телефона?"
              className="w-full  outline-none text-[#5B5B5B]  focus:border-[#666666] focus:text-[#333333] hover:text-[#424242] hover:border-[#808080]"
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-[#D12A2A] text-[14px] leading-[140%]">
              Ошибка. Номер телефона должен состоять как минимум из 11 цифр.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="message" className="text-base leading-[140%] text-black">
            Ваше сообщение
          </label>
          <input
            {...register('message', {
              required: true,
              minLength: 5,
            })}
            type="text"
            id="message"
            placeholder="Ваше сообщение"
            className={clsx(
              'w-full border outline-none text-[#5B5B5B] border-[#999999] p-[10px] rounded-[5px] focus:border-[#666666] focus:text-[#333333] hover:text-[#424242] hover:border-[#808080]',
              { 'border-[#D12A2A]': errors.message },
            )}
          />
          {errors.message && (
            <p className="text-[#D12A2A] text-[14px] leading-[140%]">
              Ошибка. Сообщение должно состоять как минимум из 5 символов.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Button disabled={false} text="Отправить" />
        {mailSuccess ? (
          <p className="text-[#2ad154] text-[18px] leading-[140%] text-center font-semibold">
            Ваше сообщение успешно отправленно!
          </p>
        ) : mailError ? (
          <p className="text-[#D12A2A] text-[18px] text-center leading-[140%] font-semibold">
            Ошибка. Попробуйте снова.
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
