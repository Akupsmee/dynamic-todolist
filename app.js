const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const date = require("./date");


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.set('view engine', 'ejs');

const newItems = ["Buy Food", "Cook Food", "Eat Food"]
const newWorks = []


app.get("/", (req, res)=>{
    const day = date.getDate()
    // const day = date()
    
    
    // const day =""
    // const currentDay = today.getDay()
  
    // const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    // if(today.getDay() === 0 || today.getDay() === 6){
    //     day = "Weekend"
    // }else{
    //     day = "Weekday"
    //     // res.sendFile(__dirname +"/index.html")
    // }
    // res.render("list", {kindOfDay : weekDay[currentDay]})

    // switch (currentDay){
    //     case 0:
    //         day = "Sunday"
    //         break;
    //     case 1:
    //         day = "Monday"
    //         break;
    //     case 2:
    //         day = "Tuesday"
    //         break;
    //     case 3:
    //         day = "Wednesday"
    //         break;
    //     case 4:
    //         day = "Thursday"
    //         break;
    //     case 5:
    //         day = "Friday"
    //         break;
    //     case 6:
    //         day = "Saturday"
    //         break;
    //      default:
                // console.log(`Error: current day is ${currentDay}  `)
    // // }
    res.render("list", {listTitle : day, todos : newItems}) // add new items from array called newItems to be rendered in the get request
})
//
app.post("/", (req, res)=>{
    const newItem = req.body.item
// console.log(req.body);
    if (req.body.list === "Work List"){
       newWorks.push( newItem  ) // push new items to array called newItems
       res.redirect("/work")
       //  res.send(newItem)
    }else {
        newItems.push( newItem  ) // push new items to array called newItems
        res.redirect("/")
        }

})

app.get("/work" , (req, res)=>{
    res.render("list", {listTitle : "Work List", todos: newWorks})
})

// app.post("/work", (req, res)=>{ // the post request was no longer used in the work list because the functionalities was transfered to the home post request

//     const newItem = req.body.item

//     newWorks.push( newItem ) // push new items to array called newItems
//     //  res.send(newItem)
//     res.redirect("/work")
// })


app.get("/about", (req, res)=>{
    res.render("about")

})
app.listen(3000, ()=>{
    console.log(" SERVER STARTED ON PORT 3000");
})