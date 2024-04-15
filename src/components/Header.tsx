import Container from './Container';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header-inner py-[10px] flex items-center justify-between">
          <div className="h-[55px]">
            <img src="/logo.svg" alt="" />
          </div>
          <p className="text-black text-base leading-[140%]">Наш телефон: +993 (XX) XX-XX-XX</p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
