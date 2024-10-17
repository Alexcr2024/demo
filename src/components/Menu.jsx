"use client";
import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {Link} from '@/i18n/routing';

export default function Menu() {
  const params = useParams();
   const [selectedLanguage, setSelectedLanguage] = useState(params.locale); 
  const router = useRouter();


  const handleLogout = async () => {
    try {
      await signOut(auth);
      Cookies.remove("token");

      router.push(`${params.locale}/login`);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
        <li>
        <ul className="languagepicker">
          {selectedLanguage === 'es' ? (
            <>
              <li>
                <Link href="es" onClick={() => handleLanguageChange('es')}>
                  <img width="20" height="20" src="https://img.icons8.com/color/48/spain.png" alt="spain" />
                  Español
                </Link>
              </li>
              <li>
                <Link href="en" onClick={() => handleLanguageChange('en')}>
                  <img width="20" height="20" src="https://img.icons8.com/color/48/usa.png" alt="usa" />
                  English
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="en" onClick={() => handleLanguageChange('en')}>
                  <img width="20" height="20" src="https://img.icons8.com/color/48/usa.png" alt="usa" />
                  English
                </Link>
              </li>
              <li>
                <Link href="es" onClick={() => handleLanguageChange('es')}>
                  <img width="20" height="20" src="https://img.icons8.com/color/48/spain.png" alt="spain" />
                  Español
                </Link>
              </li>
            </>
          )}
        </ul>
      </li>
        </li>

        <li className="navbar-item" onClick={handleLogout}>
          <span className="left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              height={25}
              width={25}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
              />
            </svg>
          </span>
        </li>
      </ul>
    </nav>
  );
}
