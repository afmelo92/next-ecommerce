import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Container, MainCarrousel, Secure, Top3 } from '@/styles/pages/Home';
import Header from '@/components/Header';
import MobileDetect from 'mobile-detect';
import { FaRegCreditCard } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi';
// import Head from 'next/head';

interface HomeProps {
  deviceType?: string;
}

const Home: NextPage<HomeProps> = ({ deviceType }) => {
  const responsive = {
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
  };
  return (
    <Container>
      <Header />
      <MainCarrousel
        autoPlay
        deviceType={deviceType}
        removeArrowOnDeviceType={['mobile', 'tablet']}
        swipeable
        draggable
        responsive={responsive}
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
      </Secure>

      <Top3>
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
      </Top3>
    </Container>
  );
};

Home.getInitialProps = async ({ req }) => {
  let userAgent;
  let deviceType;
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
