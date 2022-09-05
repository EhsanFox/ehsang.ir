export let siteMetadata = {
  title: "Ehsan's blog - a Coding journey",
  author: 'Ehsan Golmakani',
  fullName: 'Ehsan Golmakani',
  headerTitle: "Ehsan's Blog - a Coding journey",
  footerTitle: "Ehsan's Blog - a Coding journey",
  description:
    "Ehsan's coding journey - work and life stories through the keyboard of an open-source contributor and developer.",
  language: 'en-us',
  siteUrl: 'https://ehsan.js.org',
  siteRepo: 'https://github.com/ehsanfox/ehsanfox.github.io',
  siteLogo: '/static/images/logo.jpg',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/logo.jpg',
  email: 'exxon.me@gmail.com',
  github: 'https://github.com/EhsanFox',
  twitter: 'https://twitter.com/Ehsan_Fox',
  facebook: 'https://facebook.com/',
  youtube: 'https://www.youtube.com/',
  linkedin: 'https://www.linkedin.com/in/boycode1/',
  locale: 'en-US',
  /** Choose one of these Analytics providers */
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: false, // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'UA-164140501-1', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'ehsanfox',
    twitter: 'ehsan_fox',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  giscusConfig: {
    // Ref: https://giscus.app/
    repo: '', // `process.env.GISCUS_REPO=`
    repositoryId: '', // `process.env.GISCUS_REPOSITORY_ID=`
    category: '', // `process.env.GISCUS_CATEGORY=`
    categoryId: '', // `process.env.GISCUS_CATEGORY_ID=`
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  utterancesConfig: {
    // Ref: https://utteranc.es/
    repo: '', // `process.env.UTTERANCES_REPO=`
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  disqus: {
    // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
    shortname: '', // `process.env.DISQUS_SHORTNAME=`
  },
}
