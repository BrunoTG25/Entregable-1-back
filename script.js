class ProductManager{
    constructor(){
        this.products = []
        this.index = 0
    }
    
    getProducts = () => {
        return this.products;
    }

    addProduct=( tittle, description, price, thumbnail, code, stock) => {
        this.index++
        const id=this.index
        const getProduct ={id ,tittle, description, price, thumbnail, code, stock}
        
        //validar que todos las propiedades sean obligatorias
        if(!tittle || !description || !price || !thumbnail || !code || !stock) {
        return console.log ("datos faltantes")}
        
        //Codigo en uso
        if (this.products.some(product => product.code === code)) {
            return console.log(`El código ${code} ya está en uso`);
        }
        this.products.push(getProduct)
    } 

    getProductByld = (id) => {
        const product = this.products.find(product => product.code === id);
        if (!product) {
            console.log("Producto no encontrado");
        }
        return product
    }
} 


const manager=new ProductManager();
manager.addProduct ("Auriculares", "Auriculares blancos", 2000, "./images/7004327.jpg", 2523, 10  );
manager.addProduct ("Auriculares", "Auriculares negros", 1000, "./images/7004327.jpg", 2223, 9  );

// Obtener todos los productos
const products = manager.getProducts();
console.log(products);

//W Obtener un producto por su código
const product = manager.getProductByld(2523);
console.log(product);

// Obtener un producto que no existe
const productNotFound = manager.getProductByld(2823);
console.log(productNotFound);
