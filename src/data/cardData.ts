const projectsData: Array<any> = [
  {
    title: 'On Your Mental Podcast',
    description: `Website for Reuben's podcast On Your Mental. This was a great learning experience to teach me about Tailwind CSS and Nextjs.`,
    imgSrc:
      'https://lh3.googleusercontent.com/IzsRuPJku1k3Ejr7OjGuPmIWra4IfcK-YQ0hPu2Ic-W-RZ4dAChtjQXsr34c2p1MGU1UFEg2SHUHJ0jk1GNXnN4heW0v0kafV8aCvw',
    href: 'https://www.toxicskullsclub.io/',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
  {
    title: 'Kimetsu no Yaiba',
    description: `TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly). Includes features such as authentication, analytics dashboard, hashed passwords, encrypted cookies. Built with Express and EJS.`,
    imgSrc:
      'https://1.bp.blogspot.com/-8Opg1d6SYh8/YTYHDofgdqI/AAAAAAAABY8/WzgNgoxoN3En3HPhBVyfz7mnZw_ufnFLQCLcBGAsYHQ/s1536/Anime%2BKimetsu%2Bno%2BYaiba%2BConfirma%2Bdata%2Bde%2Bestreia%2Bda%2Bsua%2BSegunda%2BTemporada%2BMANUAL%2BDO%2BOTAKU.webp',
    href: 'https://github.com/Cwarcup/tinyapp',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
  {
    title: 'Days Gone',
    description: `A library similar to lodash for JavaScript. This project was created and published by me as part of my learnings at Lighthouse Labs. The library provides utilities that are not built into native JavaScript such as 'flatten()' to convert nested arrays into a single array.`,
    imgSrc:
      'https://image.api.playstation.com/vulcan/ap/rnd/202011/0921/B7jV8ThPs8eqDz8NRRllf7g6.jpg',
    href: 'https://www.npmjs.com/package/@cwarcup/lotide',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
  {
    title: 'Snake Client Game',
    description: `The goal of this project was to better understand how networking works from the perspective of the client. This project covers concepts including: callbacks, asynchronous programming, importing/exporting modules , refactoring code, and working with stdin`,
    imgSrc:
      'https://verdict.co.uk/wp-content/uploads/2021/04/shutterstock_1583248045.jpg',
    href: 'https://github.com/Cwarcup/snake-client',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
  {
    title: 'jsBooks - Interactive Notes and Code Cells',
    description: `This is an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown.`,
    imgSrc:
      'https://lh3.googleusercontent.com/IzsRuPJku1k3Ejr7OjGuPmIWra4IfcK-YQ0hPu2Ic-W-RZ4dAChtjQXsr34c2p1MGU1UFEg2SHUHJ0jk1GNXnN4heW0v0kafV8aCvw',
    href: 'https://github.com/Cwarcup/jbook',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
  {
    title: 'React with Redux Youtube Search',
    description: `Youtube API to search youtube and return list of popular videos. Uses hooks to handle video search and set the playing video.`,
    imgSrc:
      'https://lh3.googleusercontent.com/IzsRuPJku1k3Ejr7OjGuPmIWra4IfcK-YQ0hPu2Ic-W-RZ4dAChtjQXsr34c2p1MGU1UFEg2SHUHJ0jk1GNXnN4heW0v0kafV8aCvw',
    href: 'https://yt-video-player.vercel.app/',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
  {
    title: 'Bar Chart Generator',
    description: `Create bar charts with custom data, labels and colors. Bars can display up to two data fields to produce a stacked bar chart. Created with vanilla HTML, CSS, JS with a touch of jQuery.`,
    imgSrc:
      'https://lh3.googleusercontent.com/IzsRuPJku1k3Ejr7OjGuPmIWra4IfcK-YQ0hPu2Ic-W-RZ4dAChtjQXsr34c2p1MGU1UFEg2SHUHJ0jk1GNXnN4heW0v0kafV8aCvw',
    href: 'https://github.com/Cwarcup/stretch-project-1',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
  {
    title: 'CSS Toggle Theme',
    description: `Toggle theme created with pure CSS.`,
    imgSrc:
      'https://lh3.googleusercontent.com/IzsRuPJku1k3Ejr7OjGuPmIWra4IfcK-YQ0hPu2Ic-W-RZ4dAChtjQXsr34c2p1MGU1UFEg2SHUHJ0jk1GNXnN4heW0v0kafV8aCvw',
    href: 'https://cwarcup.github.io/css-toggle-theme/',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
  {
    title: 'Responsive Icon Navbar',
    description: `Small amount of JS, icons provided by Font Awesome.`,
    imgSrc:
      'https://lh3.googleusercontent.com/IzsRuPJku1k3Ejr7OjGuPmIWra4IfcK-YQ0hPu2Ic-W-RZ4dAChtjQXsr34c2p1MGU1UFEg2SHUHJ0jk1GNXnN4heW0v0kafV8aCvw',
    href: 'https://cwarcup.github.io/responsive-icon-navbar/',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
  {
    title: 'Search NPM Modules',
    description: `Want to search NPM for a module? Here's a quick and easy example using the NPM Registry API to search NPM modules.`,
    imgSrc:
      'https://1.bp.blogspot.com/-8Opg1d6SYh8/YTYHDofgdqI/AAAAAAAABY8/WzgNgoxoN3En3HPhBVyfz7mnZw_ufnFLQCLcBGAsYHQ/s1536/Anime%2BKimetsu%2Bno%2BYaiba%2BConfirma%2Bdata%2Bde%2Bestreia%2Bda%2Bsua%2BSegunda%2BTemporada%2BMANUAL%2BDO%2BOTAKU.webp',
    href: 'https://cwarcup.github.io/redux-ts-react/',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
  {
    title: 'Infinite Scroll',
    description: `Infinite scroll website with images generated using Unsplash API.`,
    imgSrc:
      'https://1.bp.blogspot.com/-8Opg1d6SYh8/YTYHDofgdqI/AAAAAAAABY8/WzgNgoxoN3En3HPhBVyfz7mnZw_ufnFLQCLcBGAsYHQ/s1536/Anime%2BKimetsu%2Bno%2BYaiba%2BConfirma%2Bdata%2Bde%2Bestreia%2Bda%2Bsua%2BSegunda%2BTemporada%2BMANUAL%2BDO%2BOTAKU.webp',
    href: 'https://cwarcup.github.io/infinite_scroll/',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },

  {
    title: 'Wavy Website',
    description: `Some fun with CSS to create a wavy website.`,
    imgSrc:
      'https://1.bp.blogspot.com/-8Opg1d6SYh8/YTYHDofgdqI/AAAAAAAABY8/WzgNgoxoN3En3HPhBVyfz7mnZw_ufnFLQCLcBGAsYHQ/s1536/Anime%2BKimetsu%2Bno%2BYaiba%2BConfirma%2Bdata%2Bde%2Bestreia%2Bda%2Bsua%2BSegunda%2BTemporada%2BMANUAL%2BDO%2BOTAKU.webp',
    href: 'https://cwarcup.github.io/wavy-website/',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
  {
    title: 'Dad Quotes',
    description: `Basic use of Dad Quote API.`,
    imgSrc:
      'https://1.bp.blogspot.com/-8Opg1d6SYh8/YTYHDofgdqI/AAAAAAAABY8/WzgNgoxoN3En3HPhBVyfz7mnZw_ufnFLQCLcBGAsYHQ/s1536/Anime%2BKimetsu%2Bno%2BYaiba%2BConfirma%2Bdata%2Bde%2Bestreia%2Bda%2Bsua%2BSegunda%2BTemporada%2BMANUAL%2BDO%2BOTAKU.webp',
    href: 'https://cwarcup.github.io/dad-quotes/',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
  {
    title: 'Node Weather App',
    description: `Uses Mapbox for geocoding and Weatherstack for weather forecast.`,
    imgSrc:
      'https://1.bp.blogspot.com/-8Opg1d6SYh8/YTYHDofgdqI/AAAAAAAABY8/WzgNgoxoN3En3HPhBVyfz7mnZw_ufnFLQCLcBGAsYHQ/s1536/Anime%2BKimetsu%2Bno%2BYaiba%2BConfirma%2Bdata%2Bde%2Bestreia%2Bda%2Bsua%2BSegunda%2BTemporada%2BMANUAL%2BDO%2BOTAKU.webp',
    href: 'https://basic-weather-node-app.herokuapp.com/',
    authorAvatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/69/69e67a92e18a30adf84cb79bb13cb8d1862fc0b4_full.jpg',
  },
];

export default projectsData;
