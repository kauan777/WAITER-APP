import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	left: 0px;
	top: 0px;
	background-color: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(4.5px);
	width: 100%;
	height: 100%;
`;

export const ModalBody = styled.div`
	background-color: #fff;
	width: 480px;
	border-radius: 0.5rem;
	padding: 2rem;

	header {
		display: flex;
		justify-content: space-between;

		strong {
			font-size: 1.5rem;
		}

		button {
			background-color: transparent;
			line-height: 0%;
			border: 0;
		}
	}

	.status-container {
		margin-top: 2rem;

		small {
			font-size: 14px;
			opacity: 0.8;
		}
		div {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin-top: 0.5rem;
		}
	}
`;

export const OrderDetails = styled.div`
	margin-top: 2rem;

	> strong {
		font-weight: 500;
		font-size: 14px;
		opacity: 0.8;
	}

	.order-itens {
		margin-top: 1rem;

		.item {
			display: flex;

			& + .item {
				margin-top: 1rem;
			}
			//Todos menos o primeiro

			img {
				border-radius: 6px;
			}
			.quantity {
				font-size: 14px;
				color: #666;
				display: block;
				min-width: 20px;
				margin-left: 0.75rem;
			}

			.product-details {
				margin-left: 4px;
				strong {
					display: block;
					margin-bottom: 4px;
				}
				span {
					font-size: 14;
					color: #666;
				}
			}
		}
	}

	.total {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 1.5rem;
		span {
			font-weight: 500;
			font-size: 14px;
			opacity: 0.8;
		}
	}
`;

export const Actions = styled.footer`
	display: flex;
	flex-direction: column;
	margin-top: 2rem;

	.primary {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		justify-content: center;
		background-color: #333;
		border-radius: 48px;
		border: 0;
		color: #fff;
		padding: 12px 24px;
		width: 100%;
	}

	.secondary {
		padding: 12px 24px;
		color: #d73035;
		background-color: transparent;
		border: none;
		margin-top: .5rem;
	}
`;
