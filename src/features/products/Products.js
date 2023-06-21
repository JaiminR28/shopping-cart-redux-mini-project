import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./productSlice";
import "./Product.css";
import { Fragment } from "react";

export function Products() {
	// const count = useSelector(state);
	const products = useSelector((state) => state.product.products);
	const status = useSelector((state) => state.product.status);
	const dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch(fetchAsync())}>
				Fetch Products
			</button>
			{status === "loading" ? (
				<div>
					<div className="load-wrapp">
						<div className="load-1">
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</div>
					</div>
				</div>
			) : (
				<Fragment></Fragment>
			)}
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
