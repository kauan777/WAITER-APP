import logo from "../../assets/images/logo.svg";
import { Container, Content } from "./styles";
/*importar dessa forma acima porque se passar o caminho direto,na hora da build
vai dar erro, porque ela pode estar em outro caminho*/

function Header() {
	return (
		<Container>
			<Content>
				<div className="page-details">
					<h1>Pedidos</h1>
					<h2>Acompanhe os pedidos dos clientes</h2>
				</div>
				<img src={logo} alt="WAITERAPP" />
			</Content>
		</Container>
	);
}

export { Header };
