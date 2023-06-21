import React from "react";
import { Products } from "./features/products/Products";
import "./App.css";
import { Cart } from "./features/cart/cart";

function App() {
	return (
		<div className="App">
			<Cart />
			<Products />
		</div>
	);
}

export default App;
