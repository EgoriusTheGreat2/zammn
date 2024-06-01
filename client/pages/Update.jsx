import axios from 'axios';
import e from 'express';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
    const [players, setPlayers] = useState({
        nickname:"",
        gold:null,
    });
    const navigate = useNavigate()
    const location = useLocation()

    const playerId = location.pathname.split("/")[2]

    

    const handleChange = (e) =>{
        setPlayers(prev=>({...prev, [e.target.name]: e.target.value}))
    };
    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("https://localhost:8800/players/"+ playerId, players)
            navigate("/")
        }catch(err){
            console.log(err)
        }
        
    }
    console.log(players)
    return (
        <div className='form'>
            <h1>Update player</h1>
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
            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    )
}

export default Update;