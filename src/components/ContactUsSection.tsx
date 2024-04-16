import React from 'react';
import SectionTitle from './ui/SectionTitle';
import Container from './Container';
import ContactForm from './ContactForm';

const ContactUsSection = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-[40px] items-center">
          <SectionTitle color="black" text="Начни своё путешествие с нами" type="underline" />
          <p className="text-black text-base leading-[140%] text-center">
            оставьте заявку и с вами свяжутся
          </p>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default ContactUsSection;
