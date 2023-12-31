import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch a products
// @route   GET /api/products/:id
// @access  Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Recurso nao encontrado.");
  }
});

// @desc    Create a product
// @route   POST /api/products
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Nome indefinido",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Marca indefinida",
    category: "Categoria indefinida",
    countInStock: 0,
    numReviews: 0,
    description: "Descrição indefinida",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    update a  product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("recurso não encontrado");
  }
});

// @desc    Delete a  product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: "Produto deletado" });
  } else {
    res.status(404);
    throw new Error("recurso não encontrado");
  }
});

export {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};
