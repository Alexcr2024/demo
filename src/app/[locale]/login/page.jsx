'use client'
import { PUBLIC_ASSET } from "@/config/common";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React,{ useState } from "react";
import { auth } from "../../../../firebase";
import Cookies from 'js-cookie'
import { LazyLoadImage } from "react-lazy-load-image-component";


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null); 
    const [loading, setLoading] = useState(false); 
    const { push } = useRouter();
      const t = useTranslations()

      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
           
            const token = userCredential.user.getIdToken(); 
            token.then((tkn) => {
              Cookies.set('token', tkn, { expires: 7 });
              push('/');
            });
          })
          .catch((error) => {
            setLoading(false); 
            const errorCode = error.code;
            const errorMessage = error.message;
            setStatus('Ingrese un contraseña o usuarios validos.'); 
          });
    };
    return(
        <section className="login-form-container">
        <aside className="login-form-container__image-container">
          <h1 className="login-form-container__title1">
           {t("Welcome to the Vasco Technologies demo session")}
          </h1>
          <span className="login-form-container__subtitle1">
           {t("welcome_message")}
          </span>
        </aside>
  
        <div className="login-form-container__form-group-container">
          <LazyLoadImage src={PUBLIC_ASSET.login} alt="Farmalink Logo" height="100px" width="200px" />
  
          <div className="alert-container">
            {status && <div className="alert alert-danger">{status}</div>}
          </div>
  
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
              <div className="form__group">
                <label htmlFor="email" className="form__label">{t("E-Mail Address")}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form__input"
                  placeholder="E-Mail Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <span className="form__error-message">{errors.email}</span>}
              </div>
  
              <div className="form__group">
                <label htmlFor="password" className="form__label">
                 {t("Password")}
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form__input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.password && <span className="form__error-message">{errors.password}</span>}
              </div>
  
              <div className="form__group--checkbox">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="form__checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <label htmlFor="remember" className="form__checkbox-label">
                 {t("Remember Me")}
                </label>
              </div>
  
              <div className="form__group">
                <button type="submit" className="form__submit-button" disabled={loading}>
                  {loading ? (
                    <div className="spinner"></div> 
                  ) : (
                      t("Login")
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
}

export default LoginForm;