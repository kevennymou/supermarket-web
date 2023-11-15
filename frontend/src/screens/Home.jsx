import { useGetProductsQuery } from "../slices/productsApiSlice";
import { Row, Col } from "react-bootstrap";
import Product from "../componentes/Product";
import Loader from "../componentes/Loader";
import Message from "../componentes/Message";

// criando tela de home com funcoes do produto:
// tambem passo descricoes da construcao dessa home usando o bootstrap

const Home = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Produtos disponíveis</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default Home;
