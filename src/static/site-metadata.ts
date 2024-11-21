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

const data: ISiteMetadataResult = {
  siteTitle: 'Fake David\'s Running Page',
  siteUrl: 'https://running-page-eight-pied.vercel.app',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Person running page',
  navLinks: [
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
