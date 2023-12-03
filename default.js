
import {products} from "./constants/data.js";
import Product from "./model/product-schema.js";


const DefaultData = async ()=>{
    try{
        await Product.insertMany(products);

        console.log("data imported successfully");
    }catch(error){
        console.log('Error',error.message);
    }
}

export default DefaultData;