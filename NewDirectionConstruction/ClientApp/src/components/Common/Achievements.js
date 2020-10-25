import React, { useState } from 'react';
import { Carousel, CarouselControl, CarouselItem, Container, Row, Col } from 'reactstrap';

import oneYear from '../../images/achievements/1year.PNG';
import twentyReviews from '../../images/achievements/20reviews.png';
import boha2019 from '../../images/achievements/boha-2019.png';
import elite from '../../images/achievements/elite.png';
import soap from '../../images/achievements/soap.png';
import toprated from '../../images/achievements/toprated.png';
import bbb from '../../images/achievements/bbb.png';

const items = [
    {
        src: oneYear,
        altText: "One Year!",
        key: 1
    },
    {
        src: twentyReviews,
        altText: "Twenty Reviews!",
        key: 2
    },
    {
        src: boha2019,
        altText: "Best of 2019!",
        key: 3
    },
    {
        src: elite,
        altText: "Elite Service!",
        key: 4
    },
    {
        src: soap,
        altText: "Screened & Approved!",
        key: 5
    },
    {
        src: toprated,
        altText: "Top Rated!",
        key: 6
    },
    {
        src: bbb,
        altText: "BBB A Rating!",
        key: 7
    }];

const Achievements = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.key}
            >
                <img src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <Container>
            <Row>
                <Col xs="12" sm="2" md="2" />
                <Col xs="12" sm="8" md="8">
                    <div style={{ backgroundColor: "#808080", opacity: "0.7", padding: "17px", borderRadius: "17px", marginTop: "31px" }} className="center">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}>
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                    </div>
                </Col>
                <Col xs="12" sm="2" md="2" />
            </Row>
        </Container>
    );
}

export default Achievements;