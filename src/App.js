import React, { useState, useEffect } from "react";
import { Products } from "./features/products/Products";
import "./App.css";
import { Cart } from "./features/cart/cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "./features/cart/cartSlice";

function App() {
	const [showCart, setShowCart] = useState(false);
	const items = useSelector((state) => state.cart.items.length);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsync());
	}, []);

	return (
		<div className="App">
			<button onClick={() => setShowCart(!showCart)}>
				Cart Items =&gt; [ {items} ]
			</button>
			{showCart ? <Cart></Cart> : <Products></Products>}
		</div>
	);
}

export default App;
