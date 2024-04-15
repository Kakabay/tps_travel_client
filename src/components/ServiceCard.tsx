type PropsType = {
  img: string;
  text: string;
};
const ServiceCard = ({ img, text }: PropsType) => {
  return (
    <div className="flex flex-col gap-[10px] justify-start items-center bg-lightBlue p-[10px] rounded-[5px]">
      <div className="w-[120px]">
        <img src={img} alt="service" />
      </div>
      <p className="max-w-[295px] text-center text-blue text-[20px] leading-[140%]">{text}</p>
    </div>
  );
};

export default ServiceCard;
