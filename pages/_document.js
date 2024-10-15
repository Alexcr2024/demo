import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="description"
          content="Descubre cómo Vasco Technologies te ayuda a ser más competitivo, optimizar tus operaciones y aprovechar las oportunidades del futuro digital."
        />
        <meta
          name="keywords"
          content="Vasco Technologies, tecnología, innovación, soluciones digitales, competitividad, operaciones optimizadas, soporte dedicado, escalabilidad"
        />
        <meta name="author" content="Vasco Technologies" />

        <meta
          property="og:title"
          content="Vasco Technologies - Innovación y Soluciones Digitales"
        />
        <meta
          property="og:description"
          content="Con soluciones a la vanguardia, ayudamos a empresas de todo el mundo a crecer en la era digital. Innovación, soporte dedicado y escalabilidad son nuestros pilares."
        />
        <meta
          property="og:image"
          content="/assets/img/vasco-technologies-logo.png"
        />
        <meta property="og:url" content="https://www.vascotechnologies.com" />
        <meta property="og:type" content="website" />

        <link rel="shortcut icon" href="/assets/img/favicon.png" />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=plus-jakarta-sans:300,400,500,600|urbanist:300,400,500,600,700,800"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
