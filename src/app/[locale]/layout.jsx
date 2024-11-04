import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import '../globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextAuthProvider } from '../../../context/AuthContext';
import "../../../public/css/animate.min.css";
import "../../../public/css/magnific-popup.css";
import "../../../public/css/fontawesome-all.min.css";
import "../../../public/css/flaticon.css";
import "../../../public/css/odometer.css";
import "../../../public/css/jarallax.css";
import "../../../public/css/swiper-bundle.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../public/css/default.css";
import "../../../public/css/responsive.css";

export default async function LocaleLayout({
  children,
  params: {locale}
}) {
  const messages = await getMessages();
 
  return (
    <>
    <html lang={locale}>
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
      
      <body>
        <NextIntlClientProvider messages={messages}>
        <ContextAuthProvider locale={locale}>
          {children}
          </ContextAuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
    </>
  );
}