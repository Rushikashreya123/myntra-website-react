import Carousel from 'react-bootstrap/Carousel';
import secondSlide from '../../Images/curoser/secondSlide.PNG'
import FirstSlide from '../../Images/curoser/firstSlide.PNG'
import thirdSlide from '../../Images/curoser/thirdSlide.PNG'
import fourthSlide from '../../Images/curoser/fourthSlide.PNG'
import fifthSlide from '../../Images/curoser/fifthSlide.PNG'
import sixthSlide from '../../Images/curoser/sixthSlide.PNG'
import seventhSlide from '../../Images/curoser/seventhSlide.PNG'
import eightSlide from '../../Images/curoser/eightSlide.PNG'
import nineSlide from '../../Images/curoser/nineSlide.PNG'

import "./Curoser.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Curoser() {

    return (
        <Carousel id="curousel">
          <Carousel.Item>
            <img
              className="FirstSlide"
              src={FirstSlide}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="SecondSlide"
              src={secondSlide}
              alt="Second slide"
            />  
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="ThirdSlide"
              src={thirdSlide}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="ThirdSlide"
              src={fourthSlide}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="ThirdSlide"
              src={fifthSlide}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="ThirdSlide"
              src={sixthSlide}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="ThirdSlide"
              src={eightSlide}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="ThirdSlide"
              src={seventhSlide}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="ThirdSlide"
              src={nineSlide}
              alt="Third slide"
            />
          </Carousel.Item>

        </Carousel>
      );
  
}

