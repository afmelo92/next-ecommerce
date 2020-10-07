import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
// import { Document } from 'prismic-javascript/types/documents';
// import PrismicDOM from 'prismic-dom';
// import { client } from '../../../lib/prismic';

import { Container } from '@/styles/pages/Products';
import CarouselItem from '@/components/CarouselItem';
import SEO from '@/components/SEO';
import Link from 'next/link';

interface IProduct {
  id: string;
  source: string;
  title: string;
  price: number;
  slug: string;
}

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <SEO title={product.title} price={product.price} image="/ntc.png" />
      <h1>{router.query.slug}</h1>
      <CarouselItem
        key={product.id}
        source={product.source}
        name={product.title}
        price={product.price}
        slug={product.slug}
      />
      {/* <h1>{PrismicDOM.RichText.asText(product.data.title)}</h1>

      <img
        src={product.data.thumbnail.url}
        width="450"
        alt={product.data.title}
      />

      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: PrismicDOM.RichText.asHtml(product.data.description),
        }}
      />

      <p>Price: ${product.data.price} </p> */}
    </Container>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  // const categories = await client().query([
  //   Prismic.Predicates.at('document.type', 'category'),
  // ]);

  // const paths = categories.results.map(category => {
  //   return {
  //     params: { slug: category.uid },
  //   };
  // });

  const response = await fetch(`${process.env.API_URL}/products`);
  const products = await response.json();

  const paths = products.map(product => {
    // console.log(product);
    return {
      params: { slug: product.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ProductProps> = async context => {
  const { slug } = context.params;

  // const category = await client().getByUID('category', String(slug), {});

  // const products = await client().query([
  //   Prismic.Predicates.at('document.type', 'product'),
  //   Prismic.Predicates.at('my.product.category', category.id),
  // ]);

  const response = await fetch(`${process.env.API_URL}/products?slug=${slug}`);
  const product = await response.json();
  return {
    props: {
      product: product[0],
    },
    revalidate: 60,
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps<ProductProps> = async context => {
//   const { slug } = context.params;

//   const product = await client().getByUID('product', String(slug), {});

//   // const products = await client().query([
//   //   Prismic.Predicates.at('document.type', 'product'),
//   //   Prismic.Predicates.at('my.product.category', category.id)
//   // ]);

//   return {
//     props: {
//       product,
//     },
//     revalidate: 10,
//   };
// };
