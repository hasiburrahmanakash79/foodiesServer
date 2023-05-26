const Express = require('express')
const app = Express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(Express.json());

app.use(cors())

const chefs = require('./data/chef.json')
const foodItem = require('./data/foodItem.json')

app.get('/', (req, res) => {
  res.send('Hello Foodies!')
})

app.get('/chef', (req, res) => {
  res.send(chefs)
})

app.get('/foodItem', (req, res) => {
  res.send(foodItem)
})

app.get('/chef/:id', (req, res)=>{
  const id = req.params.id
  console.log(id);
  const selectedChef = chefs.find(chef => chef.id === id)
  res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`Thai food server is running on port: ${port}`)
})