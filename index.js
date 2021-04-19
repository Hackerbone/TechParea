const express = require('express');
const app = express();

const PORT = 8080;

const fs = require('fs');

const animeList = './animes.json';

app.use(express.json());

// localhost:8080/animes
app.get('/animes', (req, res)=>{

    fs.readFile(animeList, (err, animeData)=>{
        if(err){
            throw err;
        }
        
        res.send(JSON.parse(animeData));
    })
});

app.post('/form', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(username==="Hackerb0ne" && password === "i<3coding"){
        res.status(200).send(`${username} you are IN!`);
    }

    res.status(418).send("Try again your creds are wrong");
})


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`) )