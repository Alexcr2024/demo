import React, { useEffect } from 'react';

export default function PdfViewer() {
    const isMobileDevice = () => {
        return /Mobi|Android/i.test(navigator.userAgent);
    };

    useEffect(() => {
        if (isMobileDevice()) {
            document.getElementById('enlaceDescargarPdf').click();
            window.close();
        }
    }, []);

    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <iframe
                src="/demo.pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
            />
            <a href="/demo-2.pdf" id="enlaceDescargarPdf" download="demo-2.pdf">
                Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo.
            </a>
        </div>
    );
}