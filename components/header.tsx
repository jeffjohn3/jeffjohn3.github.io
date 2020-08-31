import Head from "next/head";

export default function Header() {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Jeffrey Kim",
    url: "http://jeffjohn3.github.io",
    jobTitle: "Student",
    alumniOf: "University of California, Berkeley",
    gender: "male",
    image: "https://jeffjohn3.github.io/imgs/profilePicture.jpg",
    sameAs: [
      "https://www.facebook.com/jeffjohn333",
      "https://www.linkedin.com/in/jeffreyki-m/",
      "https://www.instagram.com/jeffjohn3/",
      "https://twitter.com/JeffreyKim0",
    ],
  };
  return (
    <Head>
      <link rel="icon" href="/favicon.png" />
      <title>Jeffrey Kim's Personal Website</title>
      <meta
        name="keywords"
        content="Jeffrey, Berkeley, Kim, Murrieta, UC Berkeley, Cal, Website, California"
      />
      <meta
        name="description"
        content="Personal website of Jeffrey Kim, a college student studying Electrical Engineering and Computer Science at the University of California, Berkeley."
      />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta http-equiv="content-language" content="en-us" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-167704928-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-167704928-1');
            </script>`,
        }}
      />
    </Head>
  );
}
