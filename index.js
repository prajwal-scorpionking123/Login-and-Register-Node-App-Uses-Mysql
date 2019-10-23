const express =require('express');
const mysql = require('mysql');
const app=express();
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'gpm_db'
});
con.connect((err)=>{
    if(err) throw err;
    console.log("connected");
});
app.set('port',(process.env.PORT || 3000));
app.get('/',function(req, res)  {
    console.log(req.query.fname);
res.send('hello '+req.query.fname);

const user = { FULLNAME:req.query.fname, EMAIL:req.query.email, GENDER:req.query.gender, PASS:req.query.pass, MOB:req.query.mob};
con.query('INSERT INTO users SET ?', user, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});

con.query('select * from users',(err,rows)=>{
    if(err)throw err;
    console.log('data recieved from database');
    console.log(rows);
});

});


app.get('./css/style.css',function(req,res) {
    res.sendFile(__dirname+ "./css/style.css");
    });
app.use(express.static('public'));
app.use('/static', express.static('public'));






// app.get('/api/courses',function(req,res) {
//     res.send([1 ,2 ,3]);
//     });

    app.listen(app.get('port'),function(){
        console.log('node is running on port',app.get('port'));
    });