/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
// import { client } from '../../../lib/prismic';
// import Prismic from 'prismic-javascript';
// import {Document} from 'prismic-javascript/types/documents';
import Link from 'next/link';
import CarouselItem from '@/components/CarouselItem';
// import PrismicDOM from 'prismic-dom';

import { Container } from '@/styles/pages/Categories';
import Loading from '@/components/Loading';
import SEO from '@/components/SEO';
import Header from '@/components/Header';

interface IProduct {
  id: string;
  source: string;
  title: string;
  price: number;
  slug: string;
}

interface ICategory {
  id: string;
  title: string;
}

interface CategoryProps {
  products: IProduct[];
  category: ICategory[];
}

const Category: React.FC<CategoryProps> = ({ products, category }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Container>
        <SEO title={category[0].title} shouldExcludePrice image="/ntc.png" />

        <h1>{router.query.slug}</h1>

        {products.map(product => (
          <CarouselItem
            key={product.id}
            source={product.source}
            name={product.title}
            price={product.price}
            slug={product.slug}
          />
        ))}
        {/* <h1>{PrismicDOM.RichText.asText(category.data.title)}</h1>

      <ul>
        {products.map(prod => {
          return (
            <li key={prod.id}>
              <Link href={`/catalog/products/${prod.uid}`}>
                <a>{PrismicDOM.RichText.asText(prod.data.title)}</a>
              </Link>
            </li>
          );
        })}
      </ul> */}
      </Container>
    </>
  );
};

export default Category;

export const getStaticPaths: GetStaticPaths = async () => {
  // const categories = await client().query([
  //   Prismic.Predicates.at('document.type', 'category'),
  // ]);

  // const paths = categories.results.map(category => {
  //   return {
  //     params: { slug: category.uid },
  //   };
  // });

  const response = await fetch(`${process.env.API_URL}/categories`);
  const categories = await response.json();

  const paths = categories.map(category => {
    return {
      params: { slug: category.id },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CategoryProps> = async context => {
  const { slug } = context.params;

  // const category = await client().getByUID('category', String(slug), {});

  // const products = await client().query([
  //   Prismic.Predicates.at('document.type', 'product'),
  //   Prismic.Predicates.at('my.product.category', category.id),
  // ]);
  const category = await await fetch(
    `${process.env.API_URL}/categories?id=${slug}`,
  ).then(data => data.json());

  const response = await fetch(
    `${process.env.API_URL}/products?category_id=${slug}`,
  );
  const products = await response.json();

  return {
    props: {
      products,
      category,
    },
    revalidate: 60,
  };
};
