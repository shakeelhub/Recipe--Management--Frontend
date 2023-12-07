import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "../App.css";
import logoImg from '../assets/logo.jpeg';
import heroImg from '../assets/hero-img.webp';
import heroImg02 from '../assets/hero-img2.jpeg';
import heroVideo from '../assets/hero-img3.avif';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <p>Hi Chef ! Your all in One Place</p> <img src={logoImg} alt='world' className="ml-2 mt-n3" />
                </div>
                <h1>Elevate Your Culinary Journey with Flavorful <span className='highlight'> Adventures</span></h1>
                <p>Discover a world of delectable delights at our Recipe Sharing App. From savory classics to innovative creations, explore recipes that inspire and bring people together. Join us in celebrating the joy of cooking and sharing unforgettable moments around the table </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className='hero__img-box'>
                <img src={heroImg} alt='heroImg' className="img-fluid" />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-4'>
                <img src={heroVideo} alt='heroVideo' className="img-fluid" />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-5'>
                <img src={heroImg02} alt='heroImg' className="img-fluid" />
              </div>
            </Col>
          </Row>

          <Row className="about_us">
            <Col lg='6'>
              <div className='hero__content'>
                <h1>About Us</h1>
                <p>Passionate about bringing people together through the joy of cooking, our Recipe Sharing App is your go-to destination for culinary inspiration. Explore, share, and savor the flavors of life with us.</p>
                <p>Rooted in a love for food and community, we curate a space where culinary enthusiasts unite. Embark on a flavorful journey, as we celebrate the art of sharing recipes and creating lasting connections. Savor the essence of togetherness with us.</p>
              </div>
            </Col>
            <Col lg='6'>
              <div className='hero__img-box'>
                <img src={logoImg} alt='About Us' className="img-fluid rounded-circle" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="gallery-section">
        <Container>
          <Row>
            <Col lg='12'>
              <h1 className="mb-4">Gallery</h1>
              <h2 className='gallery__title mb-5'>Visit Our Customers Recipe Gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="how-to-use-section">
        <Container>
          <Row>
            <Col lg='12'>
              <div>
                <h1>How to Use the Recipe App</h1>
                <ol className="how_to_use">
                  <li className="mb-2">Sign up or log in to your account.</li>
                  <li className="mb-2">Explore the "Recipes" section to discover a variety of dishes.</li>
                  <li className="mb-2">Add your favorite recipes to your "Favourites."</li>
                  <li className="mb-2">Contribute by adding your own recipes in the "Add Recipe" section.</li>
                  <li className="mb-2">Check out the "Gallery" to see delightful creations from our community.</li>
                  <li className="mb-2">View the "Recipe Views Over Time" chart to see popular recipes.</li>
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Container>
        <Row>
          <Col lg='12' style={{ textAlign: 'center' }}>
         
          {/* for designing purpose in background */}
            <Doughnut
              data={data}
              options={{
         
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>

      <footer className="footer-section">
        <Container>
          <Row>
            <h1 className="mb-4">Recipe Sharing App!</h1>
            <Col lg="6" md="12" className="footer__left">
              <h3>Contact Us</h3>
              <p>Email: info@recipesapp.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg="12" className="text-center">
              <p>&copy; 2023 Recipe Sharing App. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Home;
