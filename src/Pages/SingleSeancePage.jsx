
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { getExoById, getSeancesyId } from '../Services/API';
import './Styles/SingleSeancePage.css'


export default function SingleSeancePage() {

    const [loading, setLoading] = useState(false)


    const [seanceData, setSeanceData] = useState()
    const [exercices, setExercice] = useState([])
    const [dataExercices, setDataExercices] = useState([])



    const { id } = useParams();

    function callSeance () {
        getSeancesyId(id).then((res) => {
            setSeanceData(res)
            setExercice(res.exercices)
            setLoading(true)
        }) 
    }

    function exercicesData() {
        exercices.forEach(element => getExoById(element).then((res) =>{
            setDataExercices(dataExercices => [...dataExercices, res]);
        })) 
    }

    useEffect(() => {
        callSeance()
    },[])

    useEffect(() => {
        if (loading) {
            exercicesData()
            console.log(dataExercices)
        }
    },[loading])
    
        
    return (
        <div>
        {
            dataExercices ? dataExercices.map(({name, sets,reps, id})=> {
                return <div className='item' key={id}>
                    <p>Nom de l'exercice : {name}</p>
                    <p>Nombre de sets : {sets}</p>
                    <p>Nombre de reps : {reps}</p>
                </div>
            }) : <p> nothing</p>
        } 
        </div>
    )

    

}


