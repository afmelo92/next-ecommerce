import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
// import { client } from '../../../lib/prismic';
// import Prismic from 'prismic-javascript';
// import {Document} from 'prismic-javascript/types/documents';
import Link from 'next/link';
// import PrismicDOM from 'prismic-dom';

// import { Container } from './styles';

interface CategoryProps {
  category: Document;
  products: Document[];
}

const Category: React.FC<CategoryProps> = ({ products, category }) => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.slug}</h1>
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
    </div>
  );
};

export default Category;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const categories = await client().query([
//     Prismic.Predicates.at('document.type', 'category'),
//   ]);

//   const paths = categories.results.map(category => {
//     return {
//       params: { slug: category.uid },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps<CategoryProps> = async context => {
//   const { slug } = context.params;

//   const category = await client().getByUID('category', String(slug), {});

//   const products = await client().query([
//     Prismic.Predicates.at('document.type', 'product'),
//     Prismic.Predicates.at('my.product.category', category.id),
//   ]);

//   return {
//     props: {
//       category,
//       products: products.results,
//     },
//     revalidate: 60,
//   };
// };
