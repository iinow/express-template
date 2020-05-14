import express from 'express'
import { apiVersion } from "~/common/decorator";

let router = express.Router()

router.get('/', (req, res) => {
  res.json({
    name: 'dhfkdhfkdhfk'
  })
})

export {
  router
}
