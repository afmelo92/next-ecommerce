import React from 'react';
import Head from 'next/head';
import formatValue from '@/utils/formatValue';

interface SEOProps {
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldExcludePrice?: boolean;
  shouldIndexPage?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  price,
  image,
  shouldExcludePrice = false,
  shouldIndexPage = true,
}) => {
  const defaultTitle =
    '[NTC] Nao Tem Como :: A loja com o clutch perfeito para seu estilo';

  const defaultDescription =
    'NTC - Não tem como - A loja do FNX que vai elevar o seu estilo para o próximo clutch. Camisetas, Moletons, Bermudas, Meias, Toucas, Carteiras e muito mais! Confira nossa nova linha fitness!';

  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`
    : null;

  return (
    <Head>
      {title ? (
        <>
          <title>
            {`Loja :: [NTC] Nao Tem Como :: ${title} ${
              !shouldExcludePrice ? `:: ${formatValue(price)}` : ''
            } `}
          </title>
          <meta
            name="description"
            content={`Loja NTC - Não tem como - A loja do FNX que vai elevar o seu estilo para o próximo clutch - ${title} ${
              !shouldExcludePrice ? `:: ${formatValue(price)}` : ''
            } `}
          />
          {!shouldIndexPage && (
            <meta name="robots" content="noindex,nofollow" />
          )}
        </>
      ) : (
        <>
          <title>{defaultTitle}</title>
          <meta name="description" content={defaultDescription} />
          {!shouldIndexPage && (
            <meta name="robots" content="noindex,nofollow" />
          )}
        </>
      )}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#fff" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="900" />
      <meta property="og:image:height" content="900" />

      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ntc" />
      <meta name="twitter:creator" content="@ntc" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="900" />
      <meta name="twitter:image:height" content="900" />
    </Head>
  );
};

export default SEO;
