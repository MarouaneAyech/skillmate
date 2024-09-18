import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { storage, db } from '../firebaseConfig';

const UploadPDF = () => {
    const [file, setFile] = useState(null);
    const [pdfList, setPdfList] = useState([]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) return;

        const storageRef = ref(storage, `pdfs/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Optional: Handle upload progress here
            },
            (error) => {
                console.error('Upload error:', error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    // Save metadata to Firestore
                    await addDoc(collection(db, 'pdfs'), {
                        name: file.name,
                        url: downloadURL,
                        uploadedAt: new Date(),
                    });

                    // Refresh the PDF list
                    fetchPdfList();
                });
            }
        );
    };

    const fetchPdfList = async () => {
        const querySnapshot = await getDocs(collection(db, 'pdfs'));
        const pdfs = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setPdfList(pdfs);
    };

    useEffect(() => {
        fetchPdfList();
    }, []);

    return (
        <div className="upload-pdf">
            <h3>Upload a PDF</h3>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button className="btn btn-primary mt-2" onClick={handleUpload}>Upload PDF</button>
            <div className="pdf-list mt-4">
                <h3>Uploaded PDFs</h3>
                <ul>
                    {pdfList.map((pdf) => (
                        <li key={pdf.id}>
                            <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                                {pdf.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UploadPDF;
