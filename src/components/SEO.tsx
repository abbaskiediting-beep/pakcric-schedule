import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const location = useLocation();
  const baseUrl = 'https://pakcric-schedule.online';
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
