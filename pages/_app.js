import Preloader from "@/components/elements/Preloader";
import { useEffect, useState } from "react";
import AOS from "aos";
import "public/assets/css/bootstrap.min.css";
import "public/assets/css/animate.min.css";
import "public/assets/css/magnific-popup.css";
import "public/assets/css/fontawesome-all.min.css";
import "public/assets/css/flaticon.css";
import "public/assets/css/odometer.css";
import "public/assets/css/jarallax.css";
import "public/assets/css/swiper-bundle.min.css";
import "public/assets/css/slick.css";
import "public/assets/css/aos.css";
import "public/assets/css/default.css";
import "public/assets/css/style.css";
import "public/assets/css/responsive.css";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter, redirect } from 'next/navigation'
import { auth } from "@/firebase";


function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        AOS.init();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                localStorage.setItem("accessToken", user.accessToken);
                const accessToken = localStorage.getItem("accessToken");
            
                if (accessToken) {
                    router.replace("/");
                } 
             
            } else {
                router.push("/login");
            }
        });

      
        return () => unsubscribe();
    }, []);




    return (
        <>
            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <Preloader />
            )}
        </>
    );
}

export default MyApp;
