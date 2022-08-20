const Product = require('../models/products.model')

// Create and Save a new Product
async function addProduct(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }

  const product = await Product.create(req.body)
  res.json({
    message: 'Product added successfully',
    data: product,
  })
}

// Retrieve all Products from the database.

async function getAllProducts(req, res) {
  const products = await Product.find({})
  res.json({
    message: 'Products retrieved successfully',
    count: products.length,
    data: products,
  })
}

// Find a single Product with an id
async function getProductById(req, res) {
  const product = await Product.findById(req.params.id)
  res.json({
    message: 'product retrieved successfully',
    data: product,
  })
}

// Update a Product by the id in the request

// Delete a Product with the specified id in the request
async function deleteProduct(req, res) {
  await Product.findByIdAndDelete(req.params.id)
  res.json({
    message: 'product delete successfully',
  })
}

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
}
