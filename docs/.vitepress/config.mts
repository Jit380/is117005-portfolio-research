import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Career Atlas',
  description: 'IS 117005 portfolio research: emerging AI careers and real opportunities in New York and New Jersey.',
  base: '/is117005-portfolio-research/',
  lang: 'en-US',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'AI Career Atlas',
    nav: [
      { text: 'Research', link: '/research' },
      { text: 'Career map', link: '/careers' },
      { text: 'NY / NJ jobs', link: '/jobs' },
      { text: 'Sources', link: '/sources' }
    ],
    sidebar: [
      { text: 'IS 117005 · Research portfolio', items: [
        { text: 'Research question & findings', link: '/research' },
        { text: 'Emerging career map', link: '/careers' },
        { text: 'NY / NJ job tracker', link: '/jobs' },
        { text: 'Skills & portfolio projects', link: '/pathways' },
        { text: 'Sources & methodology', link: '/sources' }
      ] }
    ],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Jit380/is117005-portfolio-research' }],
    footer: { message: 'IS 117005 · Evidence before hype', copyright: 'Research checked November 5, 2026' }
  }
})
