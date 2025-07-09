const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const PORT = 4000;

app.use (cors());
app.use (express.json());

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'samplesuperstore',
});

db.connect(err =>{
    if(err) throw err;
    console.log('Database Connected.....!');
});

app.get ('/api/samplesuperstore/gallery', (req, res) =>{
  db.query('SELECT * FROM gallery', (err, results) =>{
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});


app.get ('/api/samplesuperstore/orders', (req, res) =>{
  db.query('SELECT * FROM orders', (err, results) =>{
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});



app.post ('/api/gallery/insert', (req, res) =>{
    const{
        Username,
        Email,
        Country,
        Position,
        Months,
        Year,
        Manpower,
        Type,
        Createddate
    } = req.body;

    const query = `    INSERT INTO gallery
    (Username, Email, Country, Position, Months, Year, Manpower, Type, Createddate)
        VALUES(?,?,?,?,?,?,?,?,?)`;

    db.query(query, [
      Username,
      Email,
      Country,
      Position,
      Months,
      Year,
      Manpower,
      Type,
      Createddate
    ], (err, result) =>{
          if (err) return res.status(500).json(err);
          res.json({message:'Gallery Added Successfully', id: result.insertId});
  });
});

app.put ('/api/gallery/update/:id', (req, res) =>{
    const id = req.params.id;
    const{
        Username,
        Email,
        Country,
        Position,
        Months,
        Year,
        Manpower,
        Type,
        Createddate
    } = req.body;
    const query = `
    UPDATE gallery SET 
    Username = ?,
    Email = ?,
    Country = ?,
    Position = ?,
    Months = ?,
    Year = ?,
    Manpower = ?,
    Type = ?,
    Createddate = ?
    WHERE id = ?`;


    db.query (query, [
      Username,
      Email,
      Country,
      Position,
      Months,
      Year,
      Manpower,
      Type,
      Createddate,
      id
    ], (err, result) =>{
        if (err) return res.status(500).json(err);
        res.json({message:'Gallery Updated Successfully'});
    });
});


app.post ('/api/userinfo/insert', (req, res) =>{
    const {
        Email,
        MobileNumber,
        PassWord
    }=req.body;

    const query =`
        INSERT INTO userinfo 
        (Email, MobileNumber, PassWord)
        VALUES(?,?,?)`;
        db.query(query, [Email, MobileNumber, PassWord], (err,result ) =>{
            if (err) return res.status(500).json(err);
            res.json({message:'User Added Successfully', id: result.insertId});
        });
});




app.post('/api/userinfo/login', (req, res) => {
  const { Email, PassWord } = req.body;

  const query = `SELECT * FROM userinfo WHERE Email = ? AND PassWord = ?`;
  db.query(query, [Email, PassWord], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    
    if (results.length > 0) {
      // Successful login; send a success response
      res.json({ success: true, user: results[0] });
    } else {
      // No matching record found; wrong credentials
      res.status(401).json({ success: false, message: 'Wrong credentials' });
    }
  });
});


app.delete ('/api/gallery/delete/:id', (req, res) =>{
    const id = req.params.id;
    db.query ('DELETE FROM gallery WHERE id = ?', id, (err, results) =>{
        if (err) return res.status(500).json(err);
        res.json({message:'Custmore Deleted Successfully'});
    });
});

app.listen (PORT , () => console.log(`Server runing at http://localhost:${PORT}`));
