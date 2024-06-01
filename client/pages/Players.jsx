import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Players = () => {
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        const fetchAllPlayers = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/players")
                setPlayers(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllPlayers()
    }, [])
    
    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/players/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }

    }
    return(
        <div>
        <h1>Players</h1>
            <div className='player' key={Players.id}>
                <p>{Players.nickname}</p>
                <span>{Players.level}</span>
                <span>{Players.experience}</span>
                <span>{Players.gold}</span>
                <span>{Players.reputation}</span>
                <p>{Players.password}</p>
                <p>{Players.email}</p>
                <p>{Players.class}</p>
                <span>{Players.strength}</span>
                <span>{Players.charisma}</span>
                <span>{Players.agility}</span>
                <span>{Players.intelligence}</span>
                <span>{Players.mastery}</span>
                <span>{Players.constitution}</span>
                <span>{Players.wisdom}</span>
                <button className="delete" onClick= {()=>handleDelete(player.id)}>Delete</button>
                <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
            </div>
            <button><Link to="/add">Add new player</Link></button>
        </div>
    );
};

export default Players