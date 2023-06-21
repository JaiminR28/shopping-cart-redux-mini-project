import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./productSlice";
import "./Product.css";

export function Products() {
	// const count = useSelector(state);
	const products = useSelector((state) => state.product.products);
	const dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch(fetchAsync())}>
				Fetch Products
			</button>
			<div className="products">
				{products.map((product) => {
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
