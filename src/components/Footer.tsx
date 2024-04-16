import React from 'react';
import Container from './Container';
import SectionTitle from './ui/SectionTitle';

const Footer = () => {
  return (
    <footer className="bg-blue pt-[80px] pb-[310px] relative overflow-hidden">
      <img src="/footer-pattern.svg" alt="" className="absolute bottom-0 left-0" />

      <Container>
        <div className="flex flex-col items-center">
          <SectionTitle text="Белавиа — туристический партнёр" color="white" />
          <div>
            <img src="/images/Footer-img.png" alt="" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
