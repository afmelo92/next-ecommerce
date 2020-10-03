import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import {
  Container,
  MainCarrousel,
  Secure,
  Top3,
  SpotLight,
  CarouselContainer,
  SpotLightCarouselOne,
  Footer,
} from '@/styles/pages/Home';
import Header from '@/components/Header';
import MobileDetect from 'mobile-detect';
import {
  FaFacebook,
  FaInstagram,
  FaRegCreditCard,
  FaTwitter,
} from 'react-icons/fa';
import { FiLock } from 'react-icons/fi';
import CarouselItem from '@/components/CarouselItem';
// import Head from 'next/head';

interface HomeProps {
  deviceType?: string;
}

const Home: NextPage<HomeProps> = ({ deviceType }) => {
  return (
    <Container>
      <Header />
      <MainCarrousel
        autoPlay
        deviceType={deviceType}
        removeArrowOnDeviceType={['mobile', 'tablet']}
        swipeable
        draggable
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={5000}
        keyBoardControl
        showDots={deviceType === 'desktop'}
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* Here i have to call cms to get initial images */}
        <img
          src="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-3840895049.jpg"
          alt="banner-1"
        />
        <img
          src="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-3890828086.jpg"
          alt="banner-2"
        />
        <img
          src="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-1990314993.jpg"
          alt="banner-3"
        />
        <img
          src="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-2135565350.jpg"
          alt="banner-4"
        />
      </MainCarrousel>

      <Secure>
        <div className="container">
          <div className="banner">
            <FaRegCreditCard size={30} />
            <div>
              <h3>PARCELAMENTO</h3>
              <p>EM ATÉ 12X SEM JUROS</p>
            </div>
          </div>
          <div className="banner">
            <FiLock size={30} />
            <div>
              <h3>COMPRA SEGURA</h3>
              <p>CERTIFICADO SSL</p>
            </div>
          </div>
        </div>
      </Secure>

      <Top3>
        <div>
          <Link href="/">
            <img
              src="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-1497214986.jpg"
              alt="vestuario"
            />
          </Link>
          <Link href="/">
            <img
              src="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-2204818397.jpg"
              alt="acessorios"
            />
          </Link>
          <Link href="/">
            <img
              src="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/0x0-4159844946.jpg"
              alt="multimarcas"
            />
          </Link>
        </div>
      </Top3>
      <SpotLight>
        <h1>DESTAQUES</h1>
      </SpotLight>
      <CarouselContainer>
        <SpotLightCarouselOne
          autoPlay
          deviceType={deviceType}
          swipeable
          draggable
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 3,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 3,
            },
          }}
          ssr // means to render carousel on server-side.
          infinite
          autoPlaySpeed={5000}
          keyBoardControl
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {/* Here i have to call cms to get initial images */}
          <CarouselItem
            source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-835333117.jpg"
            name="Moletom Strip Crown"
            price={204.9}
          />
          <CarouselItem
            source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-2156034489.jpg"
            name="Moletom Rainbow"
            price={194.9}
          />
          <CarouselItem
            source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-1969949767.jpg"
            name="Moletom Orbital Triangle"
            price={194.9}
          />
          <CarouselItem
            source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-3473355599.jpg"
            name="Moletom Has No Way"
            price={199.9}
          />
          <CarouselItem
            source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-2470263399.jpg"
            name="Moletom Suply NTC"
            price={199.9}
          />
          <CarouselItem
            source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-576326848.jpg"
            name="Moletom This is NTC"
            price={199.9}
          />
          <CarouselItem
            source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-596856701.jpg"
            name="Moletom Outlined"
            price={194.9}
          />
          <CarouselItem
            source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-564417470.jpg"
            name="Moletom Broken Out"
            price={199.9}
          />
          <CarouselItem
            source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-13312860.jpg"
            name="Moletom Helmet"
            price={189.9}
          />
        </SpotLightCarouselOne>
      </CarouselContainer>
      <SpotLightCarouselOne
        autoPlay
        deviceType={deviceType}
        swipeable
        draggable
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
          },
        }}
        ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={5000}
        keyBoardControl
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* Here i have to call cms to get initial images */}

        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-310149795.jpg"
          name="Camiseta Abstract"
          price={99.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-1302968441.jpg"
          name="Camiseta Geometric Skull"
          price={99.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-2077981964.jpg"
          name="Camiseta Follow The Vibe"
          price={94.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-1981331846.jpg"
          name="Camiseta Coat Of Arms"
          price={94.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-2179449156.jpg"
          name="Camiseta Long Chemical"
          price={99.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-2001613427.jpg"
          name="Camiseta Palm Trees Paradise"
          price={199.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-14793564.jpg"
          name="Camiseta Plank board"
          price={94.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-805187245.jpg"
          name="Camiseta One Step"
          price={94.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-4084554184.jpg"
          name="Camiseta Long NTCESQC"
          price={99.9}
        />
      </SpotLightCarouselOne>
      <SpotLightCarouselOne
        autoPlay
        deviceType={deviceType}
        swipeable
        draggable
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
          },
        }}
        ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={5000}
        keyBoardControl
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* Here i have to call cms to get initial images */}

        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-1800735592.jpg"
          name="Regata Aberta"
          price={59.92}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-3766619370.jpg"
          name="Regata Nadador"
          price={59.92}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-3039593691.jpg"
          name="Regata Running"
          price={194.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-223652853.jpg"
          name="Bermuda Striped"
          price={79.92}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-254883889.jpg"
          name="Bermuda Scratched"
          price={79.92}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-691562679.jpg"
          name="Bermuda Two Collors Embroidery"
          price={79.92}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-2268683486.jpg"
          name="Camiseta Dry Fit Stripes"
          price={59.92}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-345670412.jpg"
          name="Camiseta Dry Fit"
          price={199.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-1128180370.jpg"
          name="Bermuda Basic Military"
          price={79.92}
        />
      </SpotLightCarouselOne>
      <SpotLightCarouselOne
        autoPlay
        deviceType={deviceType}
        swipeable
        draggable
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
          },
        }}
        ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={5000}
        keyBoardControl
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* Here i have to call cms to get initial images */}

        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-2234268191.jpg"
          name="Carteira Urban NTC"
          price={69.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-927134102.png"
          name="Carteira Street NTC"
          price={69.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-1270834314.jpg"
          name="Meia Street"
          price={23.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-2206056216.jpg"
          name="Meia Crown"
          price={23.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-3191358777.jpg"
          name="Touca Black Letter"
          price={59.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-759152460.jpg"
          name="Touca Stripes"
          price={49.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-295449404.png"
          name="Carteira Style NTC"
          price={69.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-584560831.jpg"
          name="Carteira Life Style NTC"
          price={199.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-4028856904.jpg"
          name="Meia Não Tem Como"
          price={21.9}
        />
      </SpotLightCarouselOne>
      <SpotLightCarouselOne
        autoPlay
        deviceType={deviceType}
        swipeable
        draggable
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
          },
        }}
        ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={5000}
        keyBoardControl
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* Here i have to call cms to get initial images */}

        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-2234268191.jpg"
          name="Carteira Urban NTC"
          price={69.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-927134102.png"
          name="Carteira Street NTC"
          price={69.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-1270834314.jpg"
          name="Meia Street"
          price={23.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-2206056216.jpg"
          name="Meia Crown"
          price={23.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-3191358777.jpg"
          name="Touca Black Letter"
          price={59.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-759152460.jpg"
          name="Touca Stripes"
          price={49.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-295449404.png"
          name="Carteira Style NTC"
          price={69.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-584560831.jpg"
          name="Carteira Life Style NTC"
          price={199.9}
        />
        <CarouselItem
          source="https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/ntc/400x600-4028856904.jpg"
          name="Meia Não Tem Como"
          price={21.9}
        />
      </SpotLightCarouselOne>
      <Footer>
        <div className="section company">
          <h3>INSTITUCIONAL</h3>
          <Link href="/">Home</Link>
          <Link href="/">Sobre</Link>
          <Link href="/">Dúvidas</Link>
          <Link href="/">Contato</Link>
        </div>
        <div className="section account">
          <h3>MINHA CONTA</h3>
          <section>
            <Link href="/">Meus dados</Link>
            <Link href="/">Meus pedidos</Link>
            <Link href="/">Lista de desejos</Link>
          </section>
        </div>
        <div className="section support">
          <h3>ATENDIMENTO</h3>
          <p>(11) 94778-5076</p>
          <p id="email">contato@oficialnaotemcomo.com.br</p>

          <p>Rua General Osório, 62 - cj 71</p>
          <p>Vila Bocaina - Mauá | SP</p>
          <p>CEP: 09310-050 </p>
        </div>
        <div className="section payment">
          <h3>FORMAS DE PAGAMENTO</h3>
          <img src="/cards.png" alt="cards" />
        </div>
        <div className="section social">
          <h3>SIGA-NOS</h3>
          <section>
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
          </section>
        </div>
        <div className="section news">
          <h3>NEWSLETTER</h3>
          <p>Faça seu cadastro para receber nossas dicas</p>
          <p>novidades e promoções.</p>
          <form action="section user-form">
            <input type="text" name="name" id="name" placeholder="Seu nome" />
            <input type="text" name="email" id="email" placeholder="E-mail" />
            <button type="button">Cadastrar</button>
          </form>
        </div>
      </Footer>
    </Container>
  );
};

Home.getInitialProps = async ({ req }) => {
  let userAgent: string;
  let deviceType: string;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  const md = new MobileDetect(userAgent);
  if (md.tablet()) {
    deviceType = 'tablet';
  } else if (md.mobile()) {
    deviceType = 'mobile';
  } else {
    deviceType = 'desktop';
  }

  return { deviceType };
};

export default Home;
