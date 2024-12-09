
let products = document.querySelector(".products");

function renderProducts(getProducts) {
    console.log("getProducts", getProducts)
    products.innerHTML = getProducts.map(product => `<p>${product.title}<p>`).join("");
}
async function fetchProducts() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/products', {
            method: "GET"
        })
        const result = await apiResponse.json();
        console.log(result.products)
        // if(result && result.products && result.products.length > 0){
        //     console.log("hello")
        // }
        if(result?.products?.length > 0){
            renderProducts(result?.products)
        }
    } catch (error) {
        console.log(error)
    }
}
fetchProducts()