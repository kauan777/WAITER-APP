import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
	{
		_id: "6373a547b16f57ce3a8e2e72",
		table: "7",
		status: "WAITING",
		products: [
			{
				product: {
					name: "Pizza quatro queijos",
					imagePath: "1668521574846-quatro-queijos.png",
					price: 40,
				},
				quantity: 3,
				_id: "6373a547b16f57ce3a8e2e73",
			},
			{
				product: {
					name: "Coca cola",
					imagePath: "1668522272556-coca-cola.png",
					price: 7,
				},
				quantity: 2,
				_id: "6373a547b16f57ce3a8e2e74",
			},
		],
	},
];

function Orders() {
	return (
		<Container>
			<OrdersBoard icon="🕓" title="Fila de espera" orders={orders} />
			<OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
			<OrdersBoard icon="✅" title="Pronto" orders={[]} />
		</Container>
	);
}

export { Orders };
