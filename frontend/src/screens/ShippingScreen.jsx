import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../componentes/FormContainer";
import { saveShippingAddress } from "../slices/cartSlice";
import CheckoutSteps from "../componentes/CheckoutSteps";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { ShippingAddress } = cart;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  const [address, setAddress] = useState(ShippingAddress?.address || "");
  const [city, setCity] = useState(ShippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    ShippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(ShippingAddress?.country || "");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />

      <h1>Envio</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address" className="my-2">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
          <Form.Label>Sua Cidade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite a cidade para envio"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postalCode" className="my-2">
          <Form.Label>Codigo postal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu codigo postal"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country" className="my-2">
          <Form.Label>País de envio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o país de envio"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="my-2">
          Continuar
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
