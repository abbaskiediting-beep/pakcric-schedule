import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const location = useLocation();
  const baseUrl = 'https://pakcric-schedule.online';
  // Normalize canonical URL: remove trailing slashes and index.html
  let path = location.pathname;
  if (path !== '/' && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  if (path === '/index.html') {
    path = '/';
  }
  const canonicalUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
