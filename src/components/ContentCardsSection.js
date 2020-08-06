import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import ContentCards from "components/ContentCards";

function ContentCardsSection(props) {
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
          size={2}
          spaced={true}
          className="text-center"
        ></SectionHeader>
        <ContentCards
          items={[
            {
              image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
              title: "Watch",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/golden-gate",
            },
            {
              image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
              title: "Cloud",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/beach",
            },
            {
              image: "https://source.unsplash.com/3XN-BNRDUyY/800x600",
              title: "Requests",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/road",
            },
            {
              image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
              title: "Music",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/ballons",
            },
            {
              image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
              title: "Useful",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/golden-gate",
            },
            {
              image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
              title: "Misc",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/golden-gate",
            },
          ]}
        ></ContentCards>
      </Container>
    </Section>
  );
}

export default ContentCardsSection;
