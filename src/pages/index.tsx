/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
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
import SEO from '@/components/SEO';
// import Head from 'next/head';

interface HomeProps {
  deviceType?: string;
  products?: any[];
  banners?: any[];
  top?: any[];
}

const Home: NextPage<HomeProps> = ({ deviceType, products, banners, top }) => {
  return (
    <Container>
      <SEO image="/ntc.png" />

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
        {banners.map(banner => (
          <Link
            key={banner.id}
            href={`/catalog/categories/${encodeURIComponent(
              banner.description,
            )}`}
          >
            <img src={banner.source} alt={banner.description} />
          </Link>
        ))}
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
          {top.map(item => (
            <Link
              key={item.id}
              href={`/catalog/categories/${encodeURIComponent(
                item.description,
              )}`}
            >
              <img src={item.source} alt={item.description} />
            </Link>
          ))}
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
          {products.map(product => {
            if (product.category_id === 'moletons') {
              return (
                <CarouselItem
                  key={product.id}
                  source={product.source}
                  name={product.title}
                  price={product.price}
                  slug={product.slug}
                />
              );
            }
          })}
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

        {products.map(product => {
          if (product.category_id === 'camisetas') {
            return (
              <CarouselItem
                key={product.id}
                source={product.source}
                name={product.title}
                price={product.price}
                slug={product.slug}
              />
            );
          }
        })}
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
        {products.map(product => {
          if (
            product.category_id === 'fitness' ||
            product.category_id === 'bermudas'
          ) {
            return (
              <CarouselItem
                key={product.id}
                source={product.source}
                name={product.title}
                price={product.price}
                slug={product.slug}
              />
            );
          }
        })}
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
        {products.map(product => {
          if (
            product.category_id === 'carteiras' ||
            product.category_id === 'gorros-e-toucas'
          ) {
            return (
              <CarouselItem
                key={product.id}
                source={product.source}
                name={product.title}
                price={product.price}
                slug={product.slug}
              />
            );
          }
        })}
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
        {products.map(product => {
          if (
            product.category_id === 'meias' ||
            product.category_id === 'gorros-e-toucas'
          ) {
            return (
              <CarouselItem
                key={product.id}
                source={product.source}
                name={product.title}
                price={product.price}
                slug={product.slug}
              />
            );
          }
        })}
      </SpotLightCarouselOne>
      <Footer>
        <section className="container">
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
          <section className="union">
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
          </section>
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
        </section>
      </Footer>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  req,
}) => {
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

  const bannersResponse = await fetch(`${process.env.API_URL}/banners`);
  const topResponse = await fetch(`${process.env.API_URL}/top`);
  const productsResponse = await fetch(`${process.env.API_URL}/products`);
  const products = await productsResponse.json();
  const banners = await bannersResponse.json();
  const top = await topResponse.json();

  return {
    props: {
      deviceType,
      products,
      banners,
      top,
    },
  };
};

// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//   // const { slug } = context.params;

//   // const product = await client().getByUID('product', String(slug), {});

//   // const products = await client().query([
//   //   Prismic.Predicates.at('document.type', 'product'),
//   //   Prismic.Predicates.at('my.product.category', category.id)
//   // ]);

//   const response = await fetch('process.env.API_URL/banners');
//   const banners = await response.json();

//   return {
//     props: {
//       banners,
//     },
//     revalidate: 10,
//   };
// };

export default Home;
