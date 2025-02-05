const math = require("remark-math");
const katex = require("rehype-katex");

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jodichris/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/jodichris17",
  },
  email: {
    label: "Email",
    href: "mailto:jodichris17@gmail.com",
  },
  youtube: {
    label: "Youtube",
    href: "https://www.youtube.com/@jodichris8813",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  docs: {
    label: "Documentation",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
};

module.exports = {
  title: "Jodi Chris",
  tagline:
    "I am a DevOps Engineer passionate about solving meaningful problems.",
  url: "https://jodichris17.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "jodichris17",
  projectName: "docusite",
  deploymentBranch: "gh-pages",

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "Jodi Chris",
      logo: {
        alt: "Jodi Chris",
        src: "img/logo.png",
        target: "_self",
      },
      items: [
        { to: "blog/", label: "Blog", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "projects/", label: "Projects", position: "right" },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            internetProfiles.linkedin,
            internetProfiles.github,
            internetProfiles.email,
          ],
        },
        {
          title: "Discover",
          items: [
            internetProfiles.blog,
            internetProfiles.docs,
            internetProfiles.projects,
          ],
        },
      ],
      // I built this website for my own personal use, but you are free to use it so long as you credit me. You can do so by linking back to evantay.com :)
      copyright: `<a href="https://github.com/jodichris17//jodichris17.github.io">Jodi Chris © 2022 </a> • <a href="https://github.com/DigiPie/kaya-folio">Design by Evan Tay</a> • <a href="https://github.com/facebook/docusaurus">Built with Docusaurus</a> • <a href="https://github.com/jodichris17/jodichris17.github.io/commits/main">Updated ${new Date().toLocaleDateString()}</a>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/jodichris17/jodichris17.github.io",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  plugins:    [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};
