const BASE_URL = "https://fakestoreapi.com";

const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const fetchProducts = () => {
  return fetchData("/products");
};

export const fetchCategories = () => {
  return fetchData("/products/categories");
};

export const fetchProductsByCategory = (category) => {
  return fetchData(`/products/category/${category}`);
};

export const fetchProductById = (id) => {
  return fetchData(`/products/${id}`);
};