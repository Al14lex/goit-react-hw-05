import Loader from "react-js-loader";

export default function Load() {
    const color = "#FFFF";
    
    return (
       <Loader type="box-up" bgColor={color} color={color} size={100} />
    )
}