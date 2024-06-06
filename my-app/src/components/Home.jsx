import React from 'react'
import axios from 'axios';
import styles from './Styles/Home.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
export default function Home() {

    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/produtos/${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchData();
    }, []);
    console.log(data)
    return (
        <>
            <div className='div-main'>
                <h2>{data.nome}</h2>
                <img src={data.imagem} alt="foto do produto clicado" />
                <p>{data.preco}</p>
            </div>
            <div className='div-b'>
              <Link to='/'><button>Voltar</button></Link>
            </div>
        </>
    )
}
