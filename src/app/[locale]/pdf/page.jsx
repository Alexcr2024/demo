'use client'
import React, { useEffect } from 'react';

export default function PdfViewer() {
    const isMobileDevice = () => {
        return /Mobi|Android/i.test(navigator.userAgent);
    };

    useEffect(() => {
        // Verificar si es un dispositivo móvil
        if (isMobileDevice()) {
            const enlaceDescargarPdf = document.getElementById('enlaceDescargarPdf');
            // Disparar el click si el enlace existe
            if (enlaceDescargarPdf) {
                enlaceDescargarPdf.click();
                // window.close(); // Esto puede bloquear la página, evalúa si lo necesitas
            }
        }
    }, []);

    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            {/* Incrustar el PDF */}
            <iframe
                src="https://farmacdn.nyc3.cdn.digitaloceanspaces.com/demo-2.pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
            />
            {/* Enlace para descargar el PDF */}
            <a
                href="https://farmacdn.nyc3.cdn.digitaloceanspaces.com/demo-2.pdf"
                id="enlaceDescargarPdf"
                download="demo.pdf"
                style={{
                    position: 'absolute',
                    bottom: '10px', // Ajusta la posición
                    left: '50%',
                    transform: 'translateX(-50%)', // Centra el enlace horizontalmente
                    backgroundColor: '#f0f0f0',
                    padding: '10px 20px',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    color: '#333',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo.
            </a>
        </div>
    );
}
