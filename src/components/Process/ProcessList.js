import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiPlant } from "react-icons/pi";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSmile } from "react-icons/fa";

const steps = [
  {
    id: 1,
    number: TbCircleNumber1Filled, // component reference
    title: "Sourcing",
    para: "We carefully source fresh and organic groceries directly from trusted farms.",
    icon: PiPlant // component reference
  },
  {
    id: 2,
    number: TbCircleNumber2Filled,
    title: "Packaging",
    para: "Products are packed with care to maintain freshness and high quality.",
    icon: MdOutlineShoppingCart
  },
  {
    id: 3,
    number: TbCircleNumber3Filled,
    title: "Fast Delivery",
    para: "Our delivery team ensures groceries reach you quickly and safely.",
    icon: FaTruckFast
  },
  {
    id: 4,
    number: TbCircleNumber4Filled,
    title: "Happy Customers",
    para: "Customers enjoy fresh groceries and reliable service every single day.",
    icon: FaSmile
  }
];

export default steps;