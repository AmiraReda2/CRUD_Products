import connection from "../../../../DB/connection.js"

export const getProducts = (req,res,next)=>{
    const query = `SELECT * FROM products`
    connection.execute(query,(err,results,fields)=>{
        if(err){
            return res.json({message:"error occured",err})
        }
        if(results.length>0){
            return res.json({message:"success",results})
        }else{
            return res.json({message:"no enteries found",results})
        }
    })
}

export const addProduct = (req,res,next)=>{
    const {name,price, description} = req.body
    const query = `INSERT INTO products (name,price,description) values ('${name}',${price},'${description}')`
    connection.execute(query,(err,results,fields)=>{
        if(err){
            return res.json({message:"error occured",err})
        }
    })
    const query2 = `SELECT * FROM products`
    connection.execute(query2,(err,results,fields)=>{
        if(err){
            return res.json({message:"error occured",err})
        }
        if(results.length>0){
            return res.json({message:"success",results})
        }
    })
}

export const updateProduct = (req,res,next)=>{
    const {name,price,description,id} = req.body
    const query = `UPDATE products SET name = '${name}', price = ${price}, description = '${description}' WHERE id = ${id}`
    connection.execute(query,(err,results,fields)=>{
        if(err){
            return res.json({message:"error occured",err})
        }
        if(results.affectedRows){
            return res.json({message:"success",results})
        }
    })
}

export const deleteProduct = (req,res,next)=>{
    const query = `DELETE FROM products WHERE id=${req.body.id}`
    connection.execute(query,(err,results,fields)=>{
        if(err){
            return res.json({message:"error occured",err})
        }
        if(results.affectedRows){
            return res.json({message:"success"})
        }
    })
}