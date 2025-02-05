import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  url: string;
}

const MetaTags = ({ title, description, url }: MetaTagsProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={'https://doit-together.vercel.app/doitto.svg'} />
      <meta property='og:url' content={url} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='ko_KR' />
    </Helmet>
  );
};

export default MetaTags;
