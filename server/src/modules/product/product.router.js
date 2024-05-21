import * as productController from "./controller/product.js"

import {Router} from "express"

const router = Router()

router.get("/",productController.getProducts)
router.post("/",productController.addProduct)
router.put("/",productController.updateProduct)
router.delete('/',productController.deleteProduct)

export default router