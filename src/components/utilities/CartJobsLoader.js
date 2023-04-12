import { getShoppingCart } from "./Storage";


const CartJobsLoader = async() =>{
    const loadedJobs = await fetch('/data.json')
    const jobs = await loadedJobs.json();

    const storedCart = getShoppingCart();
    const savedCart = [];
    for(const id in storedCart){
        const addedJob = products.find(jb => jb.id === id);
        if(addedJob){
            const quantity = storedCart[id];
            addedJob.quantity = quantity;
            savedCart.push(addedJob);
        }
    }
    return savedCart;
}
export default CartJobsLoader;