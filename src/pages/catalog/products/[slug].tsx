import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
// import { Document } from 'prismic-javascript/types/documents';
// import PrismicDOM from 'prismic-dom';
// import { client } from '../../../lib/prismic';

interface ProductProps {
  product: Document;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>
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
    </div>
  );
};

export default Product;

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
