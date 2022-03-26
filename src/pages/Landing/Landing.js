import React, { useState, useEffect } from 'react';

import './Landing.css';

import ParallaxImage from '../../components/ParallaxImage/ParallaxImage';
import Block from '../../components/Block/Block';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';

import Calendar from 'react-calendar';
import {
  GrFacebook,
  GrInstagram,
  GrSnapchat,
} from 'react-icons/gr';
  
// images -----------------------------------------------------------

import Nails from '../../img/nails.jpg';

import NailPolish from '../../img/nail-polish-cropped.jpeg';
import ManicureService from '../../img/manicure-service.jpg';
import PedicureService from '../../img/pedicure-service.jpg';

import FirstManicure from '../../img/manicure1.jpg';
import SecondManicure from '../../img/manicure2.jpg';
import ThirdManicure from '../../img/manicure3.jpg';
import FourthManicure from '../../img/manicure4.jpg';
import FifthManicure from '../../img/manicure5.jpg';
import SixthManicure from '../../img/manicure6.jpg';

import Story from '../../img/story.jpg';

import Testimonials from '../../img/testimonials.jpg';
import Person1 from '../../img/person1.jpg';
import Person2 from '../../img/person2.jpg';

// ------------------------------------------------------------------

const Landing = () => {
  const [isParallaxDisabled, setParallaxDisabled] = useState(window.innerHeight <= 750);

  useEffect(() => {
    setParallaxDisabled(window.innerHeight <= 750);
  }, [window.innerWidth])

  // window.innerWidth <= 425 ? '50vw' : window.innerWidth <= 1050 ? '25vh' : '15vw'

  // let testimonialTitleWidth = 0;
  // let testimonialPersonWidth = 0;
  // let testimonialWidth = 0;

  // if(window.innerWidth <= 425) {
  //   testimonialTitleSize = 
  // }

  return (
    <>
      <ParallaxImage
        image={Nails}
        // disabled={isParallaxDisabled}
        className='main-section'
      >
        <Card
          width='30vh'
          height='10vh'
          borderRadius={15}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1>Sophie's Nails</h1>
        </Card>
      </ParallaxImage>

      <Block className='services-section'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='title'>Services</h1>
          </div>
        </div>
        <div className='row__service-images'>
          <div className='col-6'>
            <img
              className='service-image'
              src={ManicureService}
              alt='Manicures'
            />
            <Card
              height='10vh'
              marginTop='-2vh'
            >
              <h1>Manicures</h1>
            </Card>
          </div>
          <div className='col-6'>
            <img
              className='service-image'
              src={PedicureService}
              alt='Pedicures'
            />
            <Card
              height='10vh'
              marginTop='-2vh'
            >
              <h1>Pedicures</h1>
            </Card>
          </div>
        </div>
      </Block>

      <ParallaxImage
        image={NailPolish}
        // disabled={isParallaxDisabled}
        className='showcase-section'
      >
        <Card
          className='title-card'
          height='10vh'
        >
          <h1>Showcase</h1>
        </Card>
        <div className='row'>
          <div className='col'>
            <img
              className='showcase-image'
              src={FirstManicure}
              alt='First Service'
            />
          </div>
          <div className='col'>
            <img
              className='showcase-image'
              src={SecondManicure}
              alt='Second Service'
            />
          </div>
          <div className='col'>
            <img
              className='showcase-image'
              src={ThirdManicure}
              alt='Third Service'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <img
              className='showcase-image'
              src={FourthManicure}
              alt='Fourth Service'
            />
          </div>
          <div className='col'>
            <img
              className='showcase-image'
              src={FifthManicure}
              alt='Fifth Service'
            />
          </div>
          <div className='col'>
            <img
              className='showcase-image'
              src={SixthManicure}
              alt='Sixth Service'
            />
          </div>
        </div>
      </ParallaxImage>

      <Block className='my-story-section'>
        <div className='row'>
          <div className='col col__image'>
            <img
              className='my-story-image'
              src={Story}
              alt='Opened Book'
            />
          </div>
          <div className='col col__text'>
            <h1 className='title'>My Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo, magna ullamcorper egestas blandit, lacus odio pretium sem, et tincidunt magna urna eget urna. Praesent luctus vestibulum feugiat. Ut tempus tortor at semper porta. Sed ornare mauris nulla. Donec lacinia porta mollis. Nulla nisl ligula, pretium sit amet ex venenatis, aliquet facilisis massa. Nullam eget fermentum nisi. Morbi eu velit vitae diam pulvinar aliquam. Integer faucibus odio ligula, in posuere sapien hendrerit ut. Vivamus condimentum vulputate tellus, et blandit orci consequat et.
            </p>
            <a href='/my-story'>Read more</a>
          </div>
        </div>
      </Block>

      <ParallaxImage
        image={Testimonials}
        // disabled={isParallaxDisabled}
        className='testimonials-section'
      >
        <Card
          className='title-card'
          width={window.innerWidth <= 425 ? '50vw' : window.innerWidth <= 1050 ? '25vh' : '15vw'}
          height='10vh'
          opacity='0.75'
        >
          <h1>Testimonials</h1>
        </Card>
        <div className='row'>
          <div className='col'>
            <Card
              width={window.innerWidth <= 425 ? '30vw' : window.innerWidth <= 1050 ? '15vw' : '10vw'}
              height='5vh'
              opacity='0.75'
            >
              <h3>Person 1</h3>
            </Card>
            <img
              className='testimonials-image'
              src={Person1}
              alt='Person One'
            />
            <Card
              width={window.innerWidth >= 425 ? '40vw' : '90vw'}
              height={window.innerWidth <= 325 ? '30vh' : window.innerWidth <= 425 ? '20vh' : '10vh'}
              padding={window.innerWidth >= 425 ? '0' : '1rem'}
              opacity='0.75'
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna enim, pulvinar quis dui vel, fringilla sollicitudin enim. Suspendisse mattis orci in turpis venenatis, in laoreet sem cursus.
              </p>
            </Card>
          </div>
          <div className='col'>
            <Card
              width={window.innerWidth <= 425 ? '30vw' : window.innerWidth <= 1050 ? '15vw' : '10vw'}
              height='5vh'
              opacity='0.75'
            >
              <h3>Person 2</h3>
            </Card>
            <img
              className='testimonials-image'
              src={Person2}
              alt='Person Two'
            />
            <Card
              className='testimonial-card'
              width={window.innerWidth >= 750 ? '40vw' : '90vw'}
              height={window.innerWidth <= 325 ? '30vh' : window.innerWidth <= 425 ? '20vh' : '10vh'}
              padding={window.innerWidth >= 750 ? '0' : '1rem'}
              opacity='0.75'
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna enim, pulvinar quis dui vel, fringilla sollicitudin enim. Suspendisse mattis orci in turpis venenatis, in laoreet sem cursus.
              </p>
            </Card>
          </div>
        </div>
      </ParallaxImage>

      <Block className='appointments-section'>
        <div className='row'>
          <div className='col'>
            <h3 className='title'>Request an appointment</h3>
          </div>
          <div className='col'>
            <Calendar />
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => alert('you clicked the request appointment button')}
            >
              Request
            </button>
          </div>
        </div>
      </Block>

      <Footer className='footer-section'>
        <div className='row'>
          <div className='col'>
            <h3>Contact</h3>
            <div className='contact-info'>
              <ul>
                <li>
                  <h4>Email:</h4>
                  <p>isabels_email@gmail.com</p>
                </li>
                <li>
                  <h4>Phone:</h4>
                  <p>415-555-0328</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='col'>
            <table>
              <tr>
                <th colspan='2'>
                  <h5>Hours of Operation</h5>
                </th>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>Closed</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td>9am - 5pm</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>9am - 5pm</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>9am - 5pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>9am - 5pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>9am - 5pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>10am - 6pm</td>
              </tr>
            </table>
          </div>
          <div className='col'>
            <div className='col__follow'>
              <h3 className='title'>Follow</h3>
              <ul>
                <li className='icon'>
                  <a
                    href='https://www.facebook.com'
                    alt='facebook'
                    target='_new'
                  >
                    <GrFacebook size='3em' />
                  </a>
                </li>
                <li className='icon'>
                  <a
                    href='https://www.instagram.com'
                    alt='instagram'
                    target='_new'
                  >
                    <GrInstagram size='3em' />
                  </a>.
                </li>
                <li className='icon'>
                  <a
                    href='https://www.snapchat.com'
                    alt='snapchat'
                    target='_new'
                  >
                    <GrSnapchat size='3em' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}

export default Landing;
