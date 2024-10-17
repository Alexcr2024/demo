import React, { useEffect, useState } from 'react';


const LanguageDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [languages, setLanguages] = useState([
        { code: 'es', name: 'Español', flag: 'https://img.icons8.com/color/48/spain.png' },
        { code: 'en', name: 'English', flag: 'https://img.icons8.com/color/48/usa.png' },
    ]);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default to Spanish

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleLocaleChange = (locale) => {
        const currentPathname = window.location.pathname;
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${locale};expires=${expires};path=/`;

        if (locale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            window.location.href = ('/' + locale + currentPathname);
        } else {
            window.location.href = (
                currentPathname.replace(`/${i18nConfig.defaultLocale}`, `/${locale}`)
            );
        }

        const newLanguage = languages.find(lang => lang.code === locale);
        if (newLanguage) {
            setSelectedLanguage(newLanguage);
        }
        toggleDropdown();
    };

    return (
        <div className="dropdown header-link-btn">
            {selectedLanguage && (
                <button onClick={toggleDropdown} className='dropdown-btn btn-header-language'>
                    <img src={selectedLanguage.flag} alt={`flag_${selectedLanguage.code}`} />
                    <span className={`arrow-down`}></span>
                    <span className='lenguage'>{selectedLanguage.name}</span>
                </button>
            )}
            {isOpen && (
                <ul className="dropdown-content show">
                    {languages.map(({ code, name, flag }) => (
                        <li
                            key={code}
                            onClick={() => handleLocaleChange(code)}
                            className={`dropdown-item ${selectedLanguage.code === code ? 'selected' : ''}`}
                        >
                            {name}
                            <LazyLoadImage src={flag} alt={`flag_${code}`} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageDropdown;
