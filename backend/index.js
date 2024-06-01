import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"mydb"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.json("hello this is the backend!")
})

app.get("/players", (req, res)=>{
    const q = "SELECT * FROM player"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/players", (req,res)=>{
    const q = "INSERT INTO player (`nickname`, `level`, `experience`, `gold`, `reputation`, `password`, `email`, `class`, `strength`, `charisma`, `agility`, `intelligence`, `mastery`, `constitution`, `wisdom`) VALUES (?)"
    const values = [
        req.body.level,
        req.body.gold,
        req.body.strength
    ];
    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.delete("/players/:id", (req,res)=>{
    const playerId = req.params.id
    const q = "DELETE FROM player WHERE player_id = ?"

    db.query(q, [playerId], (err,data)=>{
        if (err) return res.json(err);
        return res.json("Player has been deleted successfully");
    })
})

app.put("/players/:id", (req,res)=>{
    const playerId = req.params.id
    const q = "UPDATE player SET `nickname`=?, `level`=?, `experience`=?, `gold`=?, `reputation`=?, `password`=?, `email`=?, `class`=?, `strength`=?, `charisma`=?, `agility`=?, `intelligence`=?, `mastery`=?, `constitution`=?, `wisdom`=? WHERE player_id = ?";

    const values=[
        req.body.level,
        req.body.gold,
        req.body.strength
    ]

    db.query(q, [playerId], (err,data)=>{
        if (err) return res.json(err);
        return res.json("Player has been updated successfully");
    })
})

app.listen(8800, ()=>{
    console.log("Connected!")
})