import { useRef, useState } from "react";
import styles from "./styles.module.css";

export default function FormPage () {
    const baseData = {
        nama: "",
        email: "",
        nomor: 0,
        jurusan: "",
        kelas: "",
        file: "",
        deskripsi:"",
    }

    const [data, setData] = useState(baseData)

    const fileFoto = useRef(null)

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        setData ({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = () =>{
        if (errMsg !== "") {
            alert ("Terdapat data kosong")
        } else {
            alert ("Data berhasil diterima")
        }
    }

    const handleReset = () => {
        setData({
            nama: "",
            email: "",
            nomor: 0,
            jurusan: "",
            kelas: "",
            file: "",
            deskripsi:"",
        })
    }


    return (
        <>
            <h1 className={styles.h1}>Pendaftaran Peserta Coding Bootcamp</h1>
            <form action="">
                <div>
                    <label>Nama Lengkap
                    <br/>
                        <input
                            type="text"
                            name="nama"
                            className={styles.input}
                            value={data.nama}
                            onChange={handleInput}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>Email
                    <br/>
                        <input
                            type="text"
                            name="email"
                            className={styles.input}
                            value={data.email}
                            onChange={handleInput}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>Nomor handphone
                    <br/>
                        <input
                            type="number"
                            name="nomor"
                            className={styles.input}
                            value={data.nomor}
                            onChange={handleInput}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>Latar belakang pendidikan :
                        <br/>
                        <input type="radio" value="IT" name="jurusan" required/>IT
                        <input type="radio" value="nonIT" name="jurusan"/>Non IT
                    </label>
                </div>
                <div>
                    <label>Kelas Coding yang Dipilih:
                        <br/>
                        <select name="kelas" className={styles.listBox} required>
                            <option value="Golang">Coding Backend with Golang</option>
                            <option value="React JS">Coding Frondend with React JS</option>
                            <option value="FullStack">Fullstack Developer</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>Foto Surat Kesungguhan:
                        <br/>
                        <input type="file" refs={fileFoto} name="file" required/>
                    </label>
                </div>
                <div>
                    <label>Harapan Untuk Coding Bootcamp ini:</label>
                    <br/>
                    <input type="textarea" name="deskripsi" />
                </div>
                <div>
                    <button className={styles.submit}>Submit</button>
                    <button onClick={handleReset} type="reset" className={styles.reset}>Reset</button>
                </div>
            </form>
        </>
    )
}