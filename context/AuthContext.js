'use client'
import Cookies from 'js-cookie'; 
import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const Context = createContext({});

export function ContextAuthProvider({ children, locale }) {
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {

    const token = Cookies.get('token');

    if (token) {
      setIsLogged(true);
    } else {
      router.push(`/${locale}/login`);
    }
    setLoading(false);  
  }, [router, locale]);

  if (loading) {
    return null;
  }

  return (
    <Context.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
