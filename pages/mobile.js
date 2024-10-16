
import Choose from "@/components/sections/home1/Choose";
import initTranslations from "@/config/initTranslations";

export function getStaticProps(context) {
    return {
        props: {
            locale: context.locale,
        },
    };
}

export default function DemoMovil(props) {
    const { i18n } = initTranslations({ defaultLocale: props.locale });

    return(
        <>
        
        <Choose />
        </>
    )
}