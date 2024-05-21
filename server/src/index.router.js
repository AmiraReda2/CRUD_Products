import productRouter from "./modules/product/product.router.js"

const bootstrap = (app,express)=>{
    app.use(express.json())
    app.use("/product",productRouter)
    app.use("/*",(_,res)=>{
        return res.send("invalid routing")
    })
}

export default bootstrap