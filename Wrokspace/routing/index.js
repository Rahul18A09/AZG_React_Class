const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// Request ki kahani

app.get("/", (req, res) => {
    res.send("Got a  GET Request")
});

app.post("/items", (req,res) => {
    res.send("Got a POST Request")
});

app.put("/items/:id", (req, res) => {
    res.send("Got a PUT Request")
});

app.delete("/items/:id", (req,res) => {
    res.send("Got a DELETE Request")
}); 

app.listen(port, () => {
  console.log(`Rahul app listening on port ${port}`)
})
