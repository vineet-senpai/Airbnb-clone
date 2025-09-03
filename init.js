const mongoose=require('mongoose');
const Listing = require('./models/listing.js');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wonderLust');
}

let allResorts=[
    {
        title:'Modern loft in downtown',
        price:2500,
        image:"https://images.unsplash.com/photo-1582448695643-f7bd478ead11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvd250b3duJTIwbmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
        location:'New York',
        country:'United States'
    },
    {
        title:'Cozy beachfront cottage',
        price:1500,
        image:"https://media.istockphoto.com/id/2207221551/photo/scenic-beach-view-framed-by-palm-trees-and-coastal-huts-in-goa-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=aSR9KpzE5KDUNQthZpDXH_8Pxm2ksb6mcUhDgxRNfPE=",
        location:'Malibu',
        country:'United States'
    },
    {
        title:'Historical villa in Tuscany',
        price:3000,
        image:"https://media.istockphoto.com/id/911570904/photo/view-of-venices-grand-canal.jpg?s=1024x1024&w=is&k=20&c=LOJPYdSWPIehfvqpWvcyiY_1Ai-K1oSN-5UJED4H25U=",
        location:'Florence',
        country:'Italy'
    },
 {
    title: 'Modern Apartment with City View',
    price: 1500,
    image: "https://images.unsplash.com/photo-1706281581361-f10b1eb0124c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: 'New York',
    country: 'USA'
  },
  {
    title: 'Cozy Cottage Near the Lake',
    price: 800,
    image: "https://media.istockphoto.com/id/1139107853/photo/temple-of-the-tooth-kandy.webp?a=1&b=1&s=612x612&w=0&k=20&c=CRyk2BWl2VVPKKrbIeBkdYz2T8bAcdruYV-LUVu2vqY=",
    location: 'Ontario',
    country: 'Canada'
  },
  {
    title: 'Beachfront Bungalow',
    price: 2500,
    image: "https://media.istockphoto.com/id/115602713/photo/sunny-beach-on-angthong-national-park-in-koh-samui-thailand.webp?a=1&b=1&s=612x612&w=0&k=20&c=76PdbXqlyngMLQnZP3lvdqgbZH_W3FyObjHhsD6rWoE=",
    location: 'Phuket',
    country: 'Thailand'
  },
  {
    title: 'Rustic Mountain Cabin',
    price: 1200,
    image: "https://media.istockphoto.com/id/1185769258/photo/mountain-cabin-in-the-forest.jpg?s=1024x1024&w=is&k=20&c=https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    location: 'Aspen',
    country: 'USA'
  },
  {
    title: 'Luxury Villa with Private Pool',
    price: 5000,
    image: "https://media.istockphoto.com/id/1404452718/photo/luxury-villa-with-private-pool.jpg?s=1024x1024&w=is&k=20&c=https://media.istockphoto.com/id/1492313721/photo/modern-luxury-villa-with-private-pool-at-night.jpg?s=1024x1024&w=is&k=20&c=rw657Ce7MHOqfHVcoqBHTL2kbsFkP3Vwx9gS-Uja66U=",
    location: 'Bali',
    country: 'Indonesia'
  },
  {
    title: 'Countryside Farmhouse Retreat',
    price: 900,
    image: "https://media.istockphoto.com/id/1160769748/photo/old-farmhouse-in-countryside.jpg?s=1024x1024&w=is&k=20&c=https://media.istockphoto.com/id/160767936/photo/landscape-view-of-red-midwestern-dairy-farmhouse-and-land.webp?a=1&b=1&s=612x612&w=0&k=20&c=cK57Yp74RtCngFnfL6sQQkQIUYRi8xIqrt-VZIZsQMY=",
    location: 'Provence',
    country: 'France'
  },
  {
    title: 'Charming Studio in Old Town',
    price: 1100,
    image: "https://media.istockphoto.com/id/1132513273/photo/charming-studio-apartment.jpg?s=1024x1024&w=is&k=20&c=https://media.istockphoto.com/id/628365610/photo/vltava-river-and-charles-bridge-in-prague.webp?a=1&b=1&s=612x612&w=0&k=20&c=hEevAnToODE7BiNRaUe_BKzQzp7m566oE23iYIMcDiw=",
    location: 'Prague',
    country: 'Czech Republic'
  },
  {
    title: 'Traditional Ryokan Experience',
    price: 2700,
    image: "https://media.istockphoto.com/id/1178047395/photo/traditional-japanese-ryokan.jpg?s=1024x1024&w=is&k=20&c=https://media.istockphoto.com/id/1396741058/photo/japanese-style-living-room-interior-with-armchair-coffee-table-potted-plant-dining-table-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=oF0UILiFfBTejrYWJ0RfSLsI8buGRiSNtgqFMEsFaMM=",
    location: 'Kyoto',
    country: 'Japan'
  },
  {
    title: 'Desert Glamping Dome',
    price: 1800,
    image: "https://media.istockphoto.com/id/1205902127/photo/glamping-dome-in-desert.jpg?s=1024x1024&w=is&k=20&c=https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1YmFpJTIwZGVzZXJ0fGVufDB8fDB8fHww",
    location: 'Dubai',
    country: 'UAE'
  },
  {
    title: 'Historic Castle Stay',
    price: 7000,
    image: "https://media.istockphoto.com/id/1295445778/photo/medieval-castle-in-scenic-landscape.jpg?s=1024x1024&w=is&k=20&c=https://media.istockphoto.com/id/2149127060/photo/aerial-view-of-edinburgh-princes-street-gardens-popular-places-in-scotland-aerial-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=6ufVs-WI2Mv4edpQEXv0FEamgoa2-Ze_FluNjZMOWY4=",
    location: 'Edinburgh',
    country: 'Scotland'
  },
  {
    title: 'Mainland China',
    price: 7000,
    image: "https://plus.unsplash.com/premium_photo-1664304488525-44a96338c0cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbmF8ZW58MHx8MHx8fDA%3D",
    location: 'Sanya',
    country: 'China'
  },
  {
    title: 'Secluded Beach House in Costa Rica',
    price: 1800,
    image: "https://media.istockphoto.com/id/511787182/photo/hanging-bridges-in-cloudforest-costa-rica.webp?a=1&b=1&s=612x612&w=0&k=20&c=9A0CerTgwlgGC4nlOGuqfbpIxSbWsxz4t9oCYgCaeQQ=",
    location: 'Costa Rica',
    country: 'Costa Rica'
  },
]

main()
.then(async()=>{
    await Listing.deleteMany({});
    for(resort of allResorts){
        const newResort=new Listing(resort);
        newResort.save();
    };
}).catch((err)=>{
    console.log(err);
})