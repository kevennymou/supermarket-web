import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../../componentes/Message";
import Loader from "../../componentes/Loader";
import FormContainer from "../../componentes/FormContainer";
import { toast } from "react-toastify";
import {
  useUpdateUserMutation,
  useGetUserDetailsQuery,
} from "../../slices/usersApiSlice";
import { set } from "mongoose";

const UserEdit = () => {
  const { id: userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const {
    data: user,
    isLoading,
    refetch,
    error,
  } = useGetUserDetailsQuery(userId);

  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ userId, name, email, isAdmin });
      toast.success("Usuario atualizado com sucesso");
      refetch();
      navigate("/admin/userlist");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Link to="/admin/userlist" className="btn btn-light my-3">
        {/* conferir link com l ou L */}
        Voltar
      </Link>
      <FormContainer>
        <h1>Editar usuario</h1>
        {loadingUpdate && <Loader />}

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email" className="my-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite o email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isAdmin" className="my-2">
              <Form.Check
                type="checkbox"
                label="IsAdmin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary" className="my-2">
              Atualizar
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEdit;
