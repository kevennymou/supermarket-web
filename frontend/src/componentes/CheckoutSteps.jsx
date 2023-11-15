import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Logar</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Logar</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Envio</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Envio</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Pagamento</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Pagamento</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>

          //   mudar nome dessa variavel depois porque é a unica em ingles para eu lembrar de fazer a rota da mesma
        )}
      </Nav.Item>
    </Nav>
  );
};
export default CheckoutSteps;
