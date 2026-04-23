const pathPrefix = process.env.PATH_PREFIX || '/';
const siteUrl = process.env.SITE_URL || 'https://bluewings.github.io/';
const repository = process.env.GITHUB_REPOSITORY || 'bluewings/dev-dad';
const repositoryUrl = `https://github.com/${repository}`;
const repositoryOwner = repository.split('/')[0];

module.exports = {
  pathPrefix,
  // Customize your site metadata:
  siteMetadata: {
    title: [
      ['ko', '아빠는 개발자'],
      ['en', 'Dev Dad'],
    ],
    author: 'Cha Sung Won',
    description: [
      [
        'ko',
        '개발자를 꿈꾸는 아들을 둔 아빠 개발자입니다.\n데이터 시각화에 관심이 있으며, 재미있는 프로그램을 만드는 것을 좋아합니다.',
      ],
      [
        'en',
        "I am a developer dad with a son who dreams of a developer.\nI'm interested in data visualization and enjoy creating fun programs.",
      ],
    ],
    siteUrl,
    social: [
      {
        name: 'GitHub',
        url: `https://github.com/${repositoryOwner}`,
      },
    ],
  },
  plugins: [
    // "gatsby-theme-blog",
    {
      resolve: 'gatsby-plugin-bluewings',
      options: {
        langKeyDefault: 'ko',
        editOnGithub: {
          url: repositoryUrl,
          directory: '',
          branch: 'master',
        },
        disqusShortname: 'dev-dad',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-87089021-5',
      },
    },
    'gatsby-plugin-sitemap',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'Gatsby Starter Blog',
    //     short_name: 'GatsbyJS',
    //     start_url: '/',
    //     background_color: '#ffffff',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     icon: 'content/assets/gatsby-icon.png',
    //     icons: [],
    //   },
    // },
    'gatsby-plugin-feed-mdx',
  ],
};
