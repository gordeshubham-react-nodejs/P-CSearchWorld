import React, { useState, useEffect } from "react";
import PCNavbar from "../components/PCNavbar";
import PCSidebar from "../components/PCSidebar";
import "./PCPoliceSearch.css";
import PCSearch from "./PCSearch";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

function PCPoliceSearch() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on search query
    if (searchQuery) {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };


  return (
    <>
      <main>
        <PCNavbar />

        <div className="police-page">
          <div>
            <PCSidebar />
          </div>

          <div className="m-3">
            <PCSearch onSearch={handleSearch} />

            <div className="mt-3">
              <Row xs={1} md={2} lg={3} className="g-4">
                {loading ? (
                  <Col className="d-flex justify-content-center">
                    <Spinner animation="border" />
                  </Col>
                ) : filteredProducts.length === 0 ? (
                  <Col className="d-flex justify-content-center">
                    <div>No products found</div>
                  </Col>
                ) : (
                  filteredProducts.map((product) => (
                    <Col key={product.id}>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          src={
                            product.thumbnail ||
                            "https://via.placeholder.com/150"
                          }
                        />
                        <Card.Body>
                          <Card.Title>{product.title}</Card.Title>
                          <Card.Text>{product.description}</Card.Text>
                          <Card.Text>
                            <strong>Price:</strong> ${product.price} <br />
                            <strong>Brand:</strong> {product.brand} <br />
                            <strong>Stock:</strong> {product.stock} <br />
                            <strong>Discount:</strong>{" "}
                            {product.discountPercentage}% <br />
                            <strong>Rating:</strong> {product.rating} ⭐
                          </Card.Text>
                          <Button variant="primary">View Details</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                )}
              </Row>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PCPoliceSearch;
