import { ModalBody, OrderDetails, Overlay, Actions } from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { useEffect } from "react";

interface OrderModalProps {
	visible: boolean;
	order: Order | null;
	onClose(): void;
}

function OrderModal({ visible, order, onClose }: OrderModalProps) {
	if (!visible || !order) {
		return null;
	}

	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.key == "Escape") {
				onClose();
			}
		}

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	// let total = 0;
	// order.products.forEach(({ product, quantity }) => {
	// 	total += product.price * quantity;
	// });

	//reduce percorre o array e armazena o valor entre as execuções(vezes do loop)
	const total = order.products.reduce((total, { product, quantity }) => {
		return total + product.price * quantity;
	}, 0);
	// first params is total that is equals 0
	// second params is item of array

	return (
		<Overlay>
			<ModalBody>
				<header>
					<strong>Mesa {order.table}</strong>
					<button type="button" onClick={onClose}>
						<img src={closeIcon} alt="ícone para fechar o modal" />
					</button>
				</header>

				<div className="status-container">
					<small>Status do pedido</small>
					<div>
						<span>
							{order.status == "WAITING" && "🕓"}
							{order.status == "IN_PRODUCTION" && "👨‍🍳"}
							{order.status == "DONE" && "✅"}
						</span>
						<strong>
							{order.status == "WAITING" && "Fila de espera"}
							{order.status == "IN_PRODUCTION" && "Em preparação"}
							{order.status == "DONE" && "Pronto!"}
						</strong>
					</div>
				</div>

				<OrderDetails>
					<strong>Itens</strong>

					<div className="order-itens">
						{order.products.map(({ _id, product, quantity }) => (
							<div className="item" key={_id}>
								<img
									width={66}
									height={28.51}
									src={`http://localhost:3001/uploads/${product.imagePath}`}
									alt={product.name}
								/>
								<span className="quantity">{quantity}x</span>
								<div className="product-details">
									<strong>{product.name}</strong>
									<span>{formatCurrency(product.price)}</span>
								</div>
							</div>
						))}
						{/* => (

					) é o return implicito */}
					</div>
					<div className="total">
						<span>Total</span>
						<strong>{formatCurrency(total)}</strong>
					</div>
				</OrderDetails>

				<Actions>
					<button type="button" className="primary">
						<span>👨‍🍳</span>
						<strong>Iniciar produção</strong>
					</button>
					<button type="button" className="secondary">
						<strong>Cancelar pedido</strong>
					</button>
				</Actions>
			</ModalBody>
		</Overlay>
	);
}

export { OrderModal };
