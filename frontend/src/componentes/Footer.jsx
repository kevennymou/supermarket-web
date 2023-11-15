import { Container, Row, Col } from "react-bootstrap";

// importei algumas coisdas do bootstrap-react para mais praticidade
// criando um rodape
// usei uma funcao para mostrar a data do ano em que se esta acessando

const Footer = () => {
  const AnoAtual = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Mark-On &copy; {AnoAtual}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
