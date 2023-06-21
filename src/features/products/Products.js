import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./productSlice";
import "./Product.css";
import { Fragment, useEffect } from "react";
import { addAsync } from "../cart/cartSlice";

export function Products() {
	// const count = useSelector(state);
	const products = useSelector((state) => state.product.products);
	const status = useSelector((state) => state.product.status);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsync());
	}, []);
	return (
		<div>
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
								alt={product.name}
								className="productImage"
							/>
							<h1>{product.name}</h1>
							<p className="price">{`$${product.price}`}</p>
							<p>{product.description}</p>
							<p>
								<button
									onClick={() => dispatch(addAsync(product))}
								>
									Add to Cart
								</button>
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
