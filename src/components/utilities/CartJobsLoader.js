
import { getShoppingCart } from "./Storage";


const CartJobsLoader = async() =>{
    const loadedJobs = await fetch('/data.json')
    const jobs = await loadedJobs.json();
// state is here...............
    const storedCart = getShoppingCart();
    const savedCart = [];
    console.log(savedCart);
    for(const id in storedCart){
        const addedJob = products.find(jb => jb.id === parseInt(id));
        savedCart.push(addedJob);
    }
    return savedCart;
}
export default CartJobsLoader;