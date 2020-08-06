import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ContentCardsSection from "components/ContentCardsSection";
import ListGroup from "react-bootstrap/ListGroup";
import Link from "next/link";
import { useAuth } from "util/auth.js";
import { useRouter } from "next/router";
import "components/DashboardSection.scss";

function DashboardSection(props) {
  const auth = useAuth();
  const router = useRouter();

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="text-center"
        ></SectionHeader>

        {router.query.paid && auth.user.planIsActive && (
          <Alert
            variant="success"
            className="text-center mx-auto"
            style={{ maxWidth: "300px" }}
          >
            You are now subscribed&nbsp;&nbsp;🥳
          </Alert>
        )}

        <Row className="align-items-center mt-5">
          <Col lg={6}>
            <p>
              This would be a good place to build your custom product features
              after exporting your codebase.
            </p>
            <p>
              You can grab the current user, query your database, render custom
              components, and anything else you'd like.
            </p>
            <p>
              Divjoy sets you up with everything you need so that you can get
              right to work on building your web app.
            </p>
          </Col>
          <Col className="mt-5 mt-lg-0">
            <figure className="DashboardSection__image-container mx-auto">
              <Image
                src="https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
                fluid={true}
              ></Image>
            </figure>
          </Col>
        </Row>
        <div className="py-5 justify-content-center">
          <Row>
            <Col>
              <ContentCardsSection
                bg="white"
                textColor="dark"
                size="md"
                bgImage=""
                bgImageOpacity={1}
                title="Featured Content"
                subtitle=""
              ></ContentCardsSection>
            </Col>
          </Row>
        </div>
        <div
          className="mt-5 mx-auto text-center"
          style={{
            maxWidth: "460px",
          }}
        >
          <small>Some helpful debug info 🐛</small>
          <ListGroup className="mt-2">
            <ListGroup.Item>
              Logged in as <strong>{auth.user.email}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              {auth.user.stripeSubscriptionId && (
                <>
                  Subscription data
                  <br />
                  ID: <strong>{auth.user.stripeSubscriptionId}</strong>
                  <br />
                  Price ID: <strong>{auth.user.stripePriceId}</strong>
                  <br />
                  Status: <strong>{auth.user.stripeSubscriptionStatus}</strong>
                </>
              )}

              {!auth.user.stripeSubscriptionId && (
                <Link href="/pricing">
                  <a>Subscribe to a plan</a>
                </Link>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <Link href="/settings/general">
                <a>Account settings</a>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    </Section>
  );
}

export default DashboardSection;
