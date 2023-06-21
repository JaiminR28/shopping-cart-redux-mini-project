import { useSelector, useDispatch } from "react-redux";
import { addAsync } from "./cartSlice";
import "./Product.css";
import { useEffect } from "react";

export function Items() {
	// const count = useSelector(state);
	const Items = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();
	useEffect(() => dispatch(addAsync()), []);
	return (
		<div>
			<div className="Items">
				{Items.map((product) => {
					return (
						<div className="card" key={product.id}>
							<img
								src={product.thumbnail}
								alt="Denim Jeans"
								className="productImage"
							/>
							<h1>{product.name}</h1>
							<p className="price">{`$${product.price}`}</p>
							<p>{product.description}</p>
							<p>
								<button>Add to Cart</button>
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
