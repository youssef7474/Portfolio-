import React, { useEffect, useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/imges/header-img.svg';

const BannerCompo = () => {
  const [text, setText] = useState('');
  const isVisible = true;

  useEffect(() => {
    const toRotate = ['Frontend Developer'];
    const fullText = toRotate[0];
    let index = 0;

    const ticker = setInterval(() => {
      if (index < (fullText.length)-1) {
        setText((prevText) => prevText + fullText[index]);
        index++;
      } else {
        clearInterval(ticker);
      }
    }, 100);

    return () => {
      clearInterval(ticker);
    };
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center" style={{ textAlign: 'center' }}>
          <Col xs={12} md={6} xl={7}>
            <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi! Youssef Here`} <span className="wrap">{text}</span></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerCompo;
