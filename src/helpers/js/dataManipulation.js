

//filter products to match chosen sub alias
module.exports.filterBySub =(products, sub)=>{
    let filteredProducts=[];  
    try{  
        for (let i=0; i < products.length; i++){
            if (products[i].alias.startsWith(sub)){
                
                filteredProducts.push(products[i])
                }
        }
         
    }catch{
        
    }

    return filteredProducts;
              
}

//filter by product alias
module.exports.filterByAlias = (products, alias)=>{
    let filteredProduct;
    try{  
        for (let i=0; i < products.length; i++){
            if (products[i].alias=== alias){
                
                filteredProduct = products[i]
                }
        }
         
    }catch{
        
    }

    return filteredProduct;
}

