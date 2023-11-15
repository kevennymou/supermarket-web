import path from "path";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
const port = process.env.PORT || 5000;

connectDB(); //conectando ao mongoDB

const app = express();

// middleware parser:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie middleware:
app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get(
  "/api/config/paypal",
  (req, res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
  // conferir rota de api paypal
);

const __dirname = path.resolve(); //Set __dirname para o diretorio correto
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// deploy da aplicacao:

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Aplicação rodando...");
  });
}

app.use(notFound);
app.use(errorHandler);

// mensagem no terminal para saber se esta rodando normal e qual a porta certa
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
