import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #d73035;
	height: 198px;
`;

export const Content = styled.div`
	width: 100%;
	max-width: 1216px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.page-details {
		h1 {
			color: #fff;
			font-size: 2rem;
			margin-bottom: 6px;
		}
		h2 {
			color: #fff;
			font-weight: 400;
			font-size: 1rem;
			opacity: 0.9;
		}
	}
`;
//Caso o usário tiver uma tela menor que 1216, ocupe 100%, se maior a largura permanece em 1216
