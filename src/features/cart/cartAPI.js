import axios from "axios";

export function cartItems() {
	return axios.get("http://localhost:8000/cart");
}
export function addItem(item) {
	const { id, title, brand, thumbnail, price } = item;
	return axios.post("http://localhost:8000/cart", {
		id,
		title,
		brand,
		thumbnail,
		price,
		quantity: 1,
	});
}
export function updateitem(id, item) {
	return axios.patch(`http://localhost:8000/cart/${id}`, item);
}
export function deleteItem(id) {
	return axios.delete(`http://localhost:8000/cart/${id}`);
}
