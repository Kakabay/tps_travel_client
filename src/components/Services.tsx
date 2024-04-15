import React from 'react';
import Container from './Container';
import SectionTitle from './ui/SectionTitle';
import { servicesData } from '../data/servicesData';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-[40px] ">
          <div className="flex flex-col gap-[40px]">
            <SectionTitle color="blue" text={'Наши услуги'} />
            <p className="text-[24px] text-black font-light leading-[140%] max-w-[985px]">
              Мы предлагаем туры в самые разные страны, в удивительные уголки и на лучшие урорты
              нашей страны и нашей планеты
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[20px]">
            {servicesData.map((service) => (
              <ServiceCard img={service.img} text={service.text} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
