import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "@/firebase";

export default function Menu() { 
 const router = useRouter();

    const handleLogout = () => {
      signOut(auth)
      .then(() => {
      
        localStorage.removeItem('accessToken');
        
    
        router.push('/login');
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      }); 
    }


      return(
     <nav className="navbar">
        <ul className="navbar-list">
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