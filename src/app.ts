import express from 'express'
import * as Routers from '~/routes'
import './test'

let app = express()

app.listen(process.env.serverPort, () => {
  console.log(`server listen!!, port: ${process.env.serverPort}`)
})

app.use('/users', Routers.User)
