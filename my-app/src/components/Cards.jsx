import React, { useState, useEffect } from 'react';
import Card from "./Cards/Card.jsx"
import styles from "./Styles/Cards.css"
import axios from "axios"
import { Link } from 'react-router-dom';
export default function Cards() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/produtos');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // const deletePost = async (id) => {
    //     await axios.delete(`http://localhost:8081/produtos/${id}`)
    // }
    return (
        <>
            {data.length ? (<>
                <div className="divCards2" >
                    {data.map((e) => {
                        return <div key={e._id}>

                            <Link to={{ pathname: `/home/${e._id}` }}><Card imagem={e.imagem} nome={e.nome} preco={e.preco}  /> 
                            
                            </Link>

                            
            

                        </div>

                    })}
                </div></>) : <>
                <h3>AINDA NAO EXISTEM PRODUTOS CADASTRADOS </h3>
            </>}
        </>
    )
}