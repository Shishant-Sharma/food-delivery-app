// THIS FILE WAS USED TO GENERATE DUMMY DATA 

const restaurant = [];
const images = ["First","second","third","fourth","fifth","sixth","seventh","Eigth","nine","tenth"]
const restaurant_name = [
  "Spice Route Kitchen",
  "Golden Fork Bistro",
  "Urban Tandoor",
  "Midnight Cravings",
  "Saffron Street",
  "The Hungry Palette",
  "Velvet Plate",
  "Flame & Grill House",
  "Ocean Spoon",
  "Rustic Bites",
  "Chili & Lime",
  "The Cozy Cauldron",
  "Silver Spoon Eatery",
  "Fusion Feast Hub",
  "Green Garden Café",
  "Savory Trails",
  "The Curry Corner",
  "Sunset Dine-In",
  "Royal Rasoi",
  "Street Spice Junction"
];
const foodTypes = [
  "Indian",
  "Chinese",
  "Italian",
  "Mexican",
  "Thai",
  "Japanese",
  "American",
  "Mediterranean",
  "French",
  "Korean",
  "Vietnamese",
  "Spanish",
  "Greek",
  "Turkish",
  "Lebanese",
  "Fast Food",
  "Street Food",
  "Seafood",
  "Vegan",
  "Desserts"
];
const bhopalLocations = [
  "MP Nagar",
  "Arera Colony",
  "Kolar Road",
  "Bairagarh",
  "New Market",
  "Habibganj",
  "Shahpura",
  "TT Nagar",
  "Govindpura",
  "Lalghati"
];

for (let i=0; i<100; i++){

    const obj = {}
    obj["image"] = images[Math.floor(Math.random()*10)];
    obj["name"] = restaurant_name[Math.floor(Math.random()*20)];
    obj['rating'] = (Math.random()*4+1).toFixed(1);
    obj ["food_type"] = foodTypes[Math.floor(Math.random()*20)];
    obj["Price_for_two"] = Math.floor(Math.random()*2401+100);
    obj["location"] = bhopalLocations[Math.floor(Math.random()*10)];
    obj["dictance_form_you"] = (Math.random()*10+1).toFixed(1);
    obj["offers"] = Math.floor(Math.random()*30);
    obj["alcohol"] = Math.random() > 0.6;
    obj["Restaurant_open_time"] = Math.floor(Math.random()*24);
    obj["Restaurant_close_time"] = (obj["Restaurant_open_time"]+12)%24
    
    restaurant.push(obj);
}

console.log(restaurant)

import fs from "fs";
const jsonData = JSON.stringify(restaurant, null, 2);
fs.writeFileSync("data.json", jsonData)
console.log("JSON file created successfully")