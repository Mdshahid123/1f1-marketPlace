import products from "../data/products.json";
export const getProducts=()=>new Promise((resolve,reject)=>setTimeout(()=>products?.length?resolve(products):reject(new Error("No products available.")),450));
export const getProductById=(id)=>new Promise((resolve,reject)=>setTimeout(()=>{const p=products.find(x=>x.id===id);p?resolve(p):reject(new Error("Product not found."));},250));
