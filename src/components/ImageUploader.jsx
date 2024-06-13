import React, { useState } from 'react';
import axios from 'axios';
import DownloadButton from './DownloadButton';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const analyzeImage = async () => {
        if (!image) {
            alert("Por favor, selecciona una imagen");
            return;
        }

        const subscriptionKey = 'ef2e30c734e24e5995561b165c46c5a0';
        const endpoint = 'https://appfacturas.cognitiveservices.azure.com/';
        const uriBase = endpoint + 'vision/v3.0/ocr';

        const formData = new FormData();
        formData.append('image', image);

        const requestData = {
            language: 'es',
            detectOrientation: true
        };

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Ocp-Apim-Subscription-Key': subscriptionKey
            },
            params: requestData
        };

        try {
            const response = await axios.post(uriBase, formData, config);
            const extractedText = response.data.regions.map(region =>
                region.lines.map(line =>
                    line.words.map(word => word.text).join(' ')
                ).join('\n')
            ).join('\n');
            setText(extractedText);
        } catch (error) {
            console.error('Error al analizar imagen: ', error);
            alert('Error al analizar imagen. Intente de nuevo más tarde');
        }
    };

    return (
        <div style={styles.container}>
            <h1>WhaleCapture Demo</h1>
            <input type="file" accept="image/jpeg, image/png" onChange={handleImageUpload} />
            {image && <img src={URL.createObjectURL(image)} alt="Uploaded" style={styles.image} />}
            <button onClick={analyzeImage} style={styles.button}>Analizar imagen</button>
            {text && (
                <>
                    <pre style={styles.text}>{text}</pre>
                    <DownloadButton content={text} />
                </>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px'
    },
    image: {
        marginTop: '20px',
        maxWidth: '300px'
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px'
    },
    text: {
        marginTop: '20px',
        whiteSpace: 'pre-wrap',
        textAlign: 'center',
        maxWidth: '80%'
    }
};

export default ImageUploader;
