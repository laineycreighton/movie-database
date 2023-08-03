const express = require('express')
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );

app.get('/api/movies', (req, res) => {
    // get movies select * from 
    db.query('SELECT * FROM movies', function(err, results) {
        if(err){
            console.log(err)
        }
        console.log(results)
        // send movies
        res.json(results)
    })    
});

// app.get('/api/reviews', (req, res) => {
//     // get movies select * from 
//     db.query('SELECT * FROM reviews', function(err, results) {
//         if(err){
//             console.log(err)
//         }
//         console.log(results)
//         // send movies
//         res.json(results)
//     })    
// });

app.post('/api/add-movie', (req, res) => {
    console.log(req.body)
    const movieName = req.body.movie
    // adding a new movie
    db.query('INSERT INTO movies (movie_name) VALUES (?)', movieName, function(err, results) {
        if(err){
            console.log(err)
        }
        console.log(results)
        // send movies
        res.json(results)
    })
});

app.delete('/api/movies/:id', (req, res) =>{
    console.log(req.body)
    const movieId = req.body.id
   db.query('DELETE FROM movies WHERE id = (?)', )
})



app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
 }); 