const express =require('express');
const app=express();

app.set('port',(process.env.PORT || 5000));
app.get('/',function(req, res)  {
res.send('hello world');
});

app.get('/api/courses',function(req,res) {
res.send([1 ,2 ,3]);
});
app.listen(app.get('port'),function(){
    console.log('node is running on port',app.get('port'));
});