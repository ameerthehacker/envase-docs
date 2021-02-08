module.exports = {
  title: 'Envase',
  tagline: 'App Store for Docker',
  url: 'https://getenvase.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'envase', // Usually your GitHub org/user name.
  projectName: 'envase-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Envase',
      logo: {
        alt: 'Envase Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ameerthehacker/envase',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: 'docs',
            },
            {
              label: 'Create your first App',
              to: 'docs/create-your-first-app',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ayt2KDVytk',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ameerthehacker',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/ameerthehacker/envase',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ameer Jhan`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ameerthehacker/envase-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ameerthehacker/envase-docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
