import { Button } from "@mui/material";
// Type
import { CartItemType } from "../App";
// Styles
import { Wrapper } from "./CartItem.styles";


type Props = {
   item: CartItemType;
   addToCart: (clickedItem: CartItemType) => void;
   removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
   <Wrapper>
      <div>
         <h3>{item.title}</h3>
         <div className="information" >
            <p>Price: $ {item.price}</p>
            <p>Total: $ {(item.amount * item.price).toFixed(2)}</p>
         </div>
         <div className="buttons" >
            <Button
               variant="contained"
               color="primary"
               size="small"
               disableElevation
               onClick={() => removeFromCart(item.id)}
            >
               -
            </Button>
            <p>{item.amount}</p>
            <Button
               variant="contained"
               color="primary"
               size="small"
               disableElevation
               onClick={() => addToCart(item)}
            >
               +
            </Button>
         </div>
      </div>
      <img src={item.image} alt={item.title} />
   </Wrapper>
);

export default CartItem;
