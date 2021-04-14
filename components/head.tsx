import Head from 'next/head';

export const PageHead = () => {
  return (
    <Head>
      <meta property="og:image" content="https://colbygarland.ca/img/social-share.jpg" />
      <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto:300,400,700" rel="stylesheet" />
      <link rel="stylesheet" href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css" />
      <title>Colby Garland Web Development</title>
      <meta name="Description" content="Hi, I'm Colby. I am a web developer. Want to work with me? Get in contact through hello@colbygarland.ca" />
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="mask-icon" href="safari-pinned-tab.svg" color="#0cd07e" />
      <meta name="msapplication-TileColor" content="#0cd07e" />
      <meta name="theme-color" content="#0cd07e" />
      {process.env.NODE_ENV === 'production' && (
        <>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115141806-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];

function gtag() {
 dataLayer.push(arguments);
}

gtag("js", new Date());

gtag("config", "UA-115141806-1");
`,
            }}
          ></script>
        </>
      )}
    </Head>
  );
};
