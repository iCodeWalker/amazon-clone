import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [basketPrice, setBasketPrice] = useState(0);
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const priceList = basket.map((item) => item.price);
    const totalPrice = priceList.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
    setBasketPrice(totalPrice);
  }, [basket]);

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{basketPrice}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
