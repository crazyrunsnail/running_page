interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Fake David\'s Running Page',
  siteUrl: 'https://running-page-eight-pied.vercel.app',
  logo: 'https://pub-2f3658b6a0e8409ba95b42bd0c7b8d81.r2.dev/a%20Aisan%20running%20man%20that%20wears%20a%20watch%20in%20a%20sunrise.jpg',
  description: 'Person running page',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://github.com/crazyrunsnail',
    },
    {
      name: 'About',
      url: 'https://github.com/crazyrunsnail',
    },
  ],
};

export default data;
