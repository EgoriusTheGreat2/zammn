import axios from 'axios';
import e from 'express';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [players, setPlayers] = useState({
        nickname:"",
        level: null,
        experience: null,
        gold: null,
        reputation: null,
        password: "",
        email: "",
        class: "",
        strength: null,
        charisma: null,
        agility: null,
        intelligence: null,
        mastery: null,
        constitution: null,
        wisdom: null
    });
    const navigate = useNavigate()

    const handleChange = (e) =>{
        setPlayers(prev=>({...prev, [e.target.name]: e.target.value}))
    };
    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("https://localhost:8800/players", players)
            navigate("/")
        }catch(err){
            console.log(err)
        }
        
    }
    console.log(players)
    return (
        <div className='form'>
            <h1>Add new player</h1>
            <input type='text' placeholder='nickname' onChange={handleChange} name='nickname' />
            <input type='number' placeholder='level' onChange={handleChange} name='level'/>
            <input type='number' placeholder='experience' onChange={handleChange} name='experience'/>
            <input type='number' placeholder='reputation' onChange={handleChange} name='reputation'/>
            <input type='number' placeholder='gold' onChange={handleChange} name='gold'/>
            <input type='text' placeholder='password' onChange={handleChange} name='password' />
            <input type='text' placeholder='email' onChange={handleChange} name='email' />
            <input type='text' placeholder='class' onChange={handleChange} name='class' />
            <input type='number' placeholder='strength' onChange={handleChange} name='strength'/>
            <input type='number' placeholder='charisma' onChange={handleChange} name='charisma'/>
            <input type='number' placeholder='agility' onChange={handleChange} name='agility'/>
            <input type='number' placeholder='intelligence' onChange={handleChange} name='intelligence'/>
            <input type='number' placeholder='mastery' onChange={handleChange} name='mastery'/>
            <input type='number' placeholder='constitution' onChange={handleChange} name='constitution'/>
            <input type='number' placeholder='wisdom' onChange={handleChange} name='wisdom'/>
            <button className="formButton" onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add