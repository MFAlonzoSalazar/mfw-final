import { Carousel, Image } from "react-bootstrap";
export default function MyCarousel({src}){
    return(
        <Carousel
              fade
              indicators={false}
              controls={false}
              className='pb-3 px-3 px-md-0'
            >
              <Carousel.Item interval={3000} className="text-center">
                <Image
                  className="d-block w-100 rounded-5 p-md-2 border border-4"
                  src={process.env.PUBLIC_URL + "/images/wedding.jpg"}
                  alt="First slide"
                  thumbnail
                  roundedCircle
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <Image
                  className="d-block w-100 rounded-5 p-md-2 border border-4"
                  src={process.env.PUBLIC_URL + "/images/roli.jpg"}
                  alt="Second slide"
                  thumbnail
                  roundedCircle
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <Image
                  className="d-block w-100 rounded-5 p-md-2 border border-4"
                  src={process.env.PUBLIC_URL + "/images/wiggles.jpg"}
                  alt="Third slide"
                  thumbnail
                  roundedCircle
                />
              </Carousel.Item>
            </Carousel>
    );
}