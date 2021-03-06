export default {
  titleSuffix: ' – GiveAways Docs',
  feedbackLink: () => {
    return 'Give us some feedback →';
  },
  feedbackLabels: 'feedback',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  footerText: () => {
    return (
      <>
        <a
          rel="noopener"
          className="w-full inline-flex items-center no-underline text-current font-semibold grayscale opacity-75 hover:opacity-100"
          href="https://nodejs.org/"
          target="_blank"
        >
          <span className="mr-1">© 2022 GiveAways Bot | Powered By</span>
          <span>
            <img src="/Nodejs.png" height={20} width={20} />
          </span>
        </a>
      </>
    );
  },
  footerEditOnGitHubLink: false, // will link to the docs repo
  floatTOC: false,
  logo: () => {
    return (
      <>
        <img
          className="md:inline object-contain hidden"
          style={{ height: '2em' }}
          src="/infinity.png"
        />
        <span className="ml-2 mr-2 font-extrabold hidden md:inline">
          GiveAways
        </span>
        <span className="text-color2 font-normal hidden md:inline">Docs</span>
      </>
    );
  },
  footerEditLink: () => {
    return 'Edit this page on GitHub →';
  },
  head: (
    <>
      <meta name="msapplication-TileColor" content="#7289DA" />
      <meta name="theme-color" content="#7289DA" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Official Documentation for the GiveAways Bot, Discord Server, Staff Team and API"
      />
      <meta
        name="og:description"
        content="Official Documentation for the GiveAways Bot, Discord Server, Staff Team and API"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/InfinityBotList-Banner.png" />
      <meta name="twitter:site:domain" content="docs.giveaways-bot.com" />
      <meta name="twitter:url" content="https://docs.giveaways-bot.com" />
      <meta name="og:title" content="GiveAways Bot | Documentation" />
      <meta name="og:image" content="/infinity.png" />
      <meta name="apple-mobile-web-app-title" content="GiveAways Bot" />
      <link rel="apple-touch-icon" sizes="180x180" href="/infinity.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/infinity.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/infinity.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/infinity.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/infinity.png" />
      <meta name="msapplication-TileImage" content="/infinity.png" />
    </>
  ),
};
