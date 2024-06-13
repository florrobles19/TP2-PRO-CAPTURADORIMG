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
        <button onClick={downloadTxtFile} style={styles.button}>
            Descargar como TXT
        </button>
    );
};

const styles = {
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px'
    }
};

export default DownloadButton;
