import React, { createContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSeances } from '../Services/API';



export default function SeancesPage () {
    let navigate = useNavigate()

    const [seances, setSeance] = useState([])
    let interval = useRef()

    useEffect(() => {
        interval.current = setInterval(() => {
            getSeances().then((res) => {
                setSeance(res)
                console.log(res);
            })
        }, 1000)



        return () => {
            clearInterval(interval.current)
        }
    },[])



    return (

        <div>
            {
                seances ? seances.map(({date, id})=> {
                    return <div key={id}>
                        <p>Seance du {date}</p>
                        <button className='button' onClick={() => navigate(`/seances/${id}`)}> Go to the seances </button>
                    </div>
                }) : <p> nothing</p>
            }
        </div>
    )
}