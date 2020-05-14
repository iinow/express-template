import express from 'express'
import { router } from '~/routes/user'

let app = express()

app.listen(7711, () => {
  console.log('server listen!!')
})

app.use('/users', router)
