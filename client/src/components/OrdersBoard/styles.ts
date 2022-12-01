import styled from "styled-components";

export const Board = styled.div`
	display: flex;
	flex: 1;

	flex-direction: column;
	align-items: center;
	padding: 1rem;
	border: 1px solid rgba(204, 204, 204, 0.4);
	border-radius: 1rem;

	header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem;
		font-size: 14px;
	}
`;

export const OrdersContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 1.5rem;

	button {
		width: 100%;
		background-color: #fff;
		border: 1px solid rgba(204, 204, 204, 0.4);
		height: 128px;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4px;

		strong {
			font-weight: 500;
		}
		span {
			font-size: 14px;
			color: #666;
		}

		& + button {
			margin-top: 1.5rem;
		}
	}
`;
