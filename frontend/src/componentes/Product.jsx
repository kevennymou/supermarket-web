import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    // usando um link que foi importado para puxar o dado de id e preco:
    // e passando descricoes de construcao usando o bootstrap react

    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews}
          reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">R${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
