import fruitImage from '../../assets/fruits-and-veggies.png'
import DairyImage from '../../assets/dairy-and-eggs.png'
import MeatImage from '../../assets/meat-and-seafood.png'
const categories = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description: "Fresh seasonal fruits and green vegetables sourced from local farms.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi consequuntur voluptatum quae commodi, suscipit ad,",
    img: fruitImage,
    path:"/fruits"
  },
  {
    id: 2,
    title: "Meat & Seafood",
    description: "Premium quality chicken, beef, mutton and fresh seafood items.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi consequuntur voluptatum quae commodi, suscipit ad,",
    img: MeatImage,
    path:"/seafoods"
  },
  {
    id: 3,
    title: "Dairy & Eggs",
    description: "Organic milk, butter, cheese, yogurt and farm fresh eggs.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi consequuntur voluptatum quae commodi, suscipit ad,",
    img: DairyImage,
    path:"/dairy"
  }
];

export default categories;