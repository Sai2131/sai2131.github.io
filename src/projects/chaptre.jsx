import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import ChaptreHomepage from '../assets/ChaptreHomepage.png'
import Chaptre2 from '../assets/Chaptre-2.png'
import Chaptre3 from '../assets/Chaptre-3.png'
import GithubIcon from '../assets/githubicon.svg'
import { BackButton } from '../components/BackButton.jsx'

function Chaptre() {

  return ( 
      <Container className='text-light mt-5 mb-5'>
            <BackButton />
            <h1>Chaptre</h1>
            
            <Carousel className='mb-3 mt-3'>
            <Carousel.Item>
              <div className="carousel-image-container">
                <img src={ChaptreHomepage} alt="Homepage" />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-image-container">
                <img src={Chaptre2} alt="Homepage" />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-image-container">
                <img src={Chaptre3} alt="Homepage" />
              </div>
            </Carousel.Item>
          </Carousel>

            <p1>
              Chaptre is a platform that allows
              users to create profiles, write books, and explore a library of stories written by others.
              It was a small group project, where my contributions focused on frontend development,
              API design, and the rating system on the backend.
              <br></br>
              <br></br>
              <b>Features:</b>
              <ul>
                <li>
                  <b>Profiles:</b> Sign up, create a profile, upload a picture, and
                  customize your own personal page.
                </li>
                <li>
                  <b>Publish:</b> Write books,
                  save drafts, publish chapters incrementally, and add cover titles and genre tags.
                </li>
                <li>
                  <b>Discover:</b> See top rated books or browse books by search and filters for genre.
                </li>
              </ul>
              <b>My Contributions:</b>
              <ul>
                <li>Developed frontend components including the homepage and reading view with react.</li>
                <li>Designed and implemented API specifications to connect frontend and backend.</li>
                <li>Worked on backend logic for the book rating system using express and firebase.</li>
              </ul>
            </p1>

            <div className='m-3'>
              <h3>
                <img src={GithubIcon} alt="icon" className="me-2" style={{ width: '30px' }} /> 
                <a href={"https://github.com/kgsoltan/Chaptre"}>Source code</a>
              </h3>
            </div>
          
      
      </Container>
  )
}

export default Chaptre