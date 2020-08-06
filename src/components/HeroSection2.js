import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SectionHeader from "components/SectionHeader";
import Button from "react-bootstrap/Button";
import "components/HeroSection2.scss";

function HeroSection2(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col>
            <figure className="HeroSection2__image-container mx-auto">
              <Image src={props.image} fluid={true}></Image>
            </figure>
          </Col>
          <Col
            lg={5}
            className="offset-lg-1 mt-5 mt-lg-0 text-center text-lg-left"
          >
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={true}
            ></SectionHeader>
            <Button
              variant={props.buttonColor}
              size="lg"
              onClick={props.buttonOnClick}
            >
              {props.buttonText}
            </Button>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HeroSection2;
