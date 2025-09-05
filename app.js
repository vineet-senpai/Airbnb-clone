const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const methodOverride=require('method-override')
const Listing=require('./models/listing.js');
const port=8080;
const ADMIN_KEY='getAccess101';
const key_validation=false;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

class createListing{
    constructor({title,description,image,price,location,country}){
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

// Root path
app.get('/',(req,res)=>{
    res.send('Root Path');
})

//Home route
app.get('/Airbnb/Home',async(req,res)=>{
    let allListings=await Listing.find();
    res.render('home.ejs',{allListings});
})

// Show Route
app.get('/Airbnb/:id/show',async(req,res)=>{
    const{id}=req.params;
    const data=await Listing.findById(id).lean();
    res.render('view.ejs',{...data});
})

// Admin route
app.get('/Airbnb/admin',(req,res)=>{
    if(key_validation){
        key_validation=false;
        res.send('This is Admin Page');
    }else{
        res.send('you failed');
    }
})

// Edit/Update Route
app.get('/Airbnb/:id/edit',async(req,res)=>{
    const{id}=req.params;
    const data=await Listing.findById(id).lean();
    res.render('edit.ejs',{...data});
})

app.put('/Airbnb/:id',async(req,res)=>{
    const{id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body});
    res.redirect('/Airbnb/Home');
})

// app.post('/Airbnb/:id',(req,res)=>{
//     const{confirmId}=req.body;
//     const{id}=req.params;
//     const data=Listing.findById(id).lean();
//     if(confirmId==key){
//         res.render('edit.ejs',{data});
//     }else{
//         throw new expressError(403,'Access Denied , Only Admin Page');
//     }
// })

// Verify-Key
app.post('/Airbnb/admin/verify-key', (req, res) => {
    const { key } = req.body;
    if (key === ADMIN_KEY) {  // or check in database
        key_validation=true;
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// New Route
app.get('/Airbnb/new',(req,res)=>{
    res.render('new.ejs');
})

// Delete Route
app.delete('/Airbnb/:id',async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/Airbnb/Home');
})

app.post('/Airbnb/Home',async(req,res)=>{
    const newListing=new createListing(req.body);
    await Listing.insertOne(newListing);
    res.redirect('/Airbnb/Home');
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