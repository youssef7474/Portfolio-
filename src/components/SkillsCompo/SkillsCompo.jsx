import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorsharp from "../../assets/imges/color-sharp.png";
import { Skills } from "../../Data/Skills";

const SkillsCompo = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true} // Enable auto play
                autoPlaySpeed={1000}
              >
              {Skills.map((el) => {
                return (
                  <div key={el.id}>
                    <img src={el.img} alt="p" style={{maxWidth:"500px"}} />
                    <h5>{el.title}</h5>
                  </div>
                );
              })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorsharp} alt="p" className="background-image-left"></img>
    </section>
  );
};

export default SkillsCompo;
