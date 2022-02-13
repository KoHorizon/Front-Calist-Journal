
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

import { makeStyles } from '@material-ui/core/styles';
import { CreateExerciceAPI } from '../Services/API';
import { useNavigate } from 'react-router-dom';

export default function CreateExercicePage () {

	let navigate = useNavigate()

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
          },
        },
        button: {
          margin: theme.spacing(1),
        }
      }))
    
    const classes = useStyles();
    const [inputFields, setInputFields] = useState([
        { name: '', sets: '', reps: ''},
    ]);

    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            let response = await CreateExerciceAPI(inputFields);
            console.log(response);
			navigate('/seances')

        } catch (err){
            console.log(err);

        }
        console.log(inputFields);
    };

    const handleAddFields = () => {
    	setInputFields([...inputFields, { name: '', sets: '' , reps: ''}])
    }
    
    const handleRemoveFields = (index) => {
    	const values  = [...inputFields];
    	console.log(index);
    	if (index !== 0) {
            values.splice(index, 1);
    	setInputFields(values);
    }
    }


    

    const handleChangeInput = (index, event) => {  // done
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        
        setInputFields(values);
    }


    return (
        <Container>
            <h1>Decrit ta seance :</h1>
            <form className={classes.root} onSubmit={handleSubmit}>
                { inputFields.map((inputField,index) => (
                    <div key={index}>
                        <TextField
                            name="name"
                            label="Nom de l'exercice"
                            variant="filled"
                            value={inputField.name}
                            onChange={event => handleChangeInput(index, event)}
                            />
                        <TextField
                        	type="number"
                            name="sets"
                            label="Sets"
                            variant="filled"
                            value={inputField.sets}
                            InputProps={{ inputProps: { min: 0, max: 200 } }}
                            onChange={event => { // Need to handle error message
                                if (!isNaN(event.target.value)) { 
                                    // console.log('is int')
                                    handleChangeInput(index, event);
                                } else {
                                
                                }
                            }}
                            />
                        <TextField
                        	type="number"
                            name="reps"
                            label="Reps"
                            variant="filled"
                            value={inputField.reps}
                            InputProps={{ inputProps: { min: 0, max: 200 } }}
                            onChange={event => { // Need to handle error message
                                if (!isNaN(event.target.value)) { 
                                    // console.log('is int')
                                    handleChangeInput(index, event);
                                } else {
                                
                                }
                            }}
                            />
                        <IconButton
                            onClick={() => handleRemoveFields(index)}
                        >
                        <RemoveIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleAddFields()}
                        >
                        <AddIcon />
                        </IconButton>
                </div>
                ))}
            <Button
                className={classes.button}
                variant="contained" 
                color="primary" 
                type="submit" 
                endIcon={<Icon>send</Icon>}
                onClick={handleSubmit}
            >Send</Button>
        </form>
        </Container>
    )
}