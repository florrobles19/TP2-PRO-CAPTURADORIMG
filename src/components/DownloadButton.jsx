import React from 'react';

const DownloadButton = ({ content }) => {
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([content], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "contenido.txt";
        document.body.appendChild(element); // Requerido para que funcione en FireFox
        element.click();
    };

    return (
        <button onClick={downloadTxtFile} >
            Descargar como TXT
        </button>
    );
};


export default DownloadButton;
