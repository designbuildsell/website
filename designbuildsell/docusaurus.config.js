// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Design Build Sell',
  tagline: 'tag',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://designbuildsell.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'designbuildsell', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          /*
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          */
          {
            to: '/design', label: 'Design', position: 'left'
          },
          {
            to: '/build', label: 'Build', position: 'left'
          },
          {
            to: '/sell', label: 'Sell', position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Essays',
                to: '/blog',
              },
              {
                label: 'Tutorial',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/designbuildsell',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/@DesignBuildSell',
              },
              {
                label: 'SubStack',
                href: 'https://designbuildsell.substack.com',
              },
              {
                label: 'Twitch',
                href: 'https://twitch.com/designbuildsell',
              },

            ],
          },
          {
            title: 'More',
            items: [

              {
                label: 'Site Map',
                href: 'https://designbuildsell.substack.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/designbuildsell',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DesignBuildSell.xyz`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;