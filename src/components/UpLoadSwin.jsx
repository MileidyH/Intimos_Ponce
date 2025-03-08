import React, { Component } from "react";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { storage, db } from "../firebase"; // Asegúrate de importar Firestore
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy, serverTimestamp } from "firebase/firestore";
import "./UpLoadFile.css"
import HeaderAdmin from "./HeaderAdmin";
import Footer from "./Footer";

class UpLoadSwin extends Component {
    constructor() {
        super();
        this.state = {
            uploadValue: 0,
            images: [],
            newName: "",
            newDescription: "",
            newPrice: "",
        };
    }

    async componentDidMount() {
        this.loadImages();
    }

    async loadImages() {
        const q = query(collection(db, "vestidosbanio"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const images = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        this.setState({ images });
    }

    handleUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const storageRef = ref(storage, `vestidosbanio/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                this.setState({ uploadValue: percentage });
            },
            (error) => {
                console.error("Error al subir archivo:", error);
            },
            async () => {
                const URL = await getDownloadURL(uploadTask.snapshot.ref);
                await addDoc(collection(db, "vestidosbanio"), {
                    url: URL,
                    path: storageRef.fullPath,
                    name: this.state.newName,
                    description: this.state.newDescription,
                    price: this.state.newPrice,
                    createdAt: serverTimestamp()
                });
                this.setState({ newName: "", newDescription: "", newPrice: "", uploadValue: 0 });
                this.loadImages();
            }
        );
    };

    handleDelete = async (imageId, imagePath) => {
        try {
            await deleteObject(ref(storage, imagePath));
            await deleteDoc(doc(db, "vestidosbanio", imageId));
            this.loadImages();
        } catch (error) {
            console.error("Error al eliminar la imagen:", error);
        }
    };

    handleEdit = async (imageId, updatedData) => {
        try {
            await updateDoc(doc(db, "vestidosbanio", imageId), updatedData);
            this.loadImages();
        } catch (error) {
            console.error("Error al actualizar la imagen:", error);
        }
    };

    render() {
        return (
            <section>
            <div><HeaderAdmin /></div>
            <section className="upload-section">
            <div className="upload-container">
                
                <h2>Administrador de Imágenes</h2>
                <input type="text" className="input-field" placeholder="Nombre" value={this.state.newName} onChange={(e) => this.setState({ newName: e.target.value })} />
                <input type="text" className="input-field" placeholder="Descripción" value={this.state.newDescription} onChange={(e) => this.setState({ newDescription: e.target.value })} />
                <input type="number" className="input-field" placeholder="Precio" value={this.state.newPrice} onChange={(e) => this.setState({ newPrice: e.target.value })} /><br />
                <input type="file" className="file-input" onChange={this.handleUpload} />
                <progress className="progress-bar" value={this.state.uploadValue} max="100"></progress>
                <div className="image-gallery">
                    {this.state.images.map(image => (
                        <div className="image-card" key={image.id}>
                            <img src={image.url} alt={image.name} />
                            <input type="text" className="edit-input" defaultValue={image.name} onBlur={(e) => this.handleEdit(image.id, { name: e.target.value })} />
                            <input type="text" className="edit-input" defaultValue={image.description} onBlur={(e) => this.handleEdit(image.id, { description: e.target.value })} />
                            <input type="number" className="edit-input" defaultValue={image.price} onBlur={(e) => this.handleEdit(image.id, { price: e.target.value })} />
                            <button className="delete-button" onClick={() => this.handleDelete(image.id, image.path)}>Eliminar</button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            </section>
            </section>
            
        );
    }
}


export default UpLoadSwin;