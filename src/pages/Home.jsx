import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";


import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";





const featureData = [
  {
    title: "Fresh Quality",
    imgUrl: featureImg01,
    desc: "The best food is made from high-quality, fresh ingredients.",
  },

  {
    title: "Quality Packaging",
    imgUrl: featureImg02,
    desc: "Quality packaging also reflects positively on the overall service.",
  },
  {
    title: "Diverse Menu Options",
    imgUrl: featureImg03,
    desc: " Gives customers the flexibility to choose from various options, to different tastes.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "SANDWHICH") {
      const filteredProducts = products.filter(
        (item) => item.category === "Sandwhich"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "ICE-CREAM") {
      const filteredProducts = products.filter(
        (item) => item.category === "Ice-cream"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "SALAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Salad"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "MOMOS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Momos"
      );

      setAllProducts(filteredProducts);
    }


  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Experience the ease of ordering with just a few clicks</h5>
                <h1 className="mb-4 hero__title">
                  <span>Hungry for convenience?</span> Order now and let the  <br /> 
                  <span> deliciousness come to you!</span>
                </h1>

                <p>
                Why wait in line when you can order online?
                Delight your taste buds with a simple tap.
                </p>

              

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                  
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                  
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
       <Category />
      </section>

     
     

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "SANDWHICH" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("SANDWHICH")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Sandwhich
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "ICE-CREAM" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ICE-CREAM")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Ice-cream
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "SALAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("SALAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Salad
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "MOMOS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("MOMOS")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Momos
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Fresh Treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Best quality of food with great delivery....
                  We try to give best to our customers.
                  We have lots of options in our food menu to satisfy our customers...
                  We have best quality food delivery with minimum time...
                  We provide 100% food quality to our customers... 
                  We not provide only food quantity, but we provide happiness of fresh treat...
                </p>
                <h4 style={{color:"hotpink"}}>Fresh food quality</h4><br></br>
                <h4 style={{color:"black"}}>Flavorful and Well-Balanced</h4><br></br>
                <h4 style={{color:"hotpink"}}>Innovative and Creative</h4><br></br>
                <h4 style={{color:"black"}}>Transparent Pricing</h4><br></br>
                <h4 style={{color:"hotpink"}}>Quality Packaging</h4><br></br>
                <h4 style={{color:"black"}}>Stay home and order to your doorstep</h4><br></br>
                
                

              
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Customer's Review</h5>
                <h2 className="testimonial__title mb-4">
                  A <span>Glowing</span> Reviews...
                </h2>
                <p className="testimonial__desc">
                For over a decade now, we’ve been empowering our customers in discovering new tastes 
                and experiences across countries.
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
