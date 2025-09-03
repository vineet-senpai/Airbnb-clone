const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const Listing=require('./models/listing.js');
const port=8080;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

class resort{
    constructor(title,description,image,price,location,country){
        this.title=title;
        this.description=description;
        this.image=image;
        this.price=price;
        this.location=location;
        this.country=country;
    }
}

async function connectDB(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wonderLust');
}

app.get('/',(req,res)=>{
    res.send('Root Path');
})

app.get('/Airbnb/Home',async(req,res)=>{
    let allListings=await Listing.find();
    res.render('home.ejs',{allListings});
})

app.get('/Airbnb/:id',async(req,res)=>{
    const{id}=req.params;
    const data=await Listing.findById(id);
    res.render('show.ejs',{data});
})

app.get('/Airbnb/new',(req,res)=>{
    res.render('new.ejs');
})

connectDB()
.then(()=>{
    console.log('Database Connected')
    app.listen(port,()=>{
        console.log(`Connected to port ${port}`);
    })
}).catch((err)=>{
    console.log(err);
})