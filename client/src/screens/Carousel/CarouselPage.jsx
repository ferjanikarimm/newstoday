import React from "react";
import { Carousel } from "@mantine/carousel";
import { Text, Title, Button } from "@mantine/core";

function CarouselPage() {
  return (
    <div>
      <Carousel sx={{ maxWidth: 1550 }} mx="auto" height={720}  controlSize={40}>
        <Carousel.Slide
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3944425/pexels-photo-3944425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "1550px 720px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{ marginTop: "270px" }}>
            <Title ta="center" size="65px" span c="white" inherit>
              <Text span c="#FF3F4B" inherit>
                Dive
              </Text>{" "}
              Into The Depths
            </Title>
            <Text
              style={{
                border: "2px solid #FF3F4B",
                width: "300px",
                height: "0px",
                position: "absolute",
                left: "610px",
                top: "390px",
              }}
            ></Text>
            <Button
              style={{
                position: "absolute",
                background: "#FF3F4B",
                width: "150px",
                height: "50px",
                left: "680px",
                top: "580px",
                borderRadius: "30px",
              }}
            >
              {" "}
              Sign Up
            </Button>
          </div>
          ;
        </Carousel.Slide>
        <Carousel.Slide
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "1550px 720px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{ marginTop: "270px" }}>
            <Title ta="center" size="65px" span c="white" inherit>
              <Text span c="#FF3F4B" inherit>
                Dive
              </Text>{" "}
              Into The Depths
            </Title>
            <Text
              style={{
                border: "2px solid #FF3F4B",
                width: "300px",
                height: "0px",
                position: "absolute",
                left: "610px",
                top: "390px",
              }}
            ></Text>
            <Button
              style={{
                position: "absolute",
                background: "#FF3F4B",
                width: "150px",
                height: "50px",
                left: "680px",
                top: "580px",
                borderRadius: "30px",
              }}
            >
              {" "}
              Sign Up
            </Button>
          </div>
          ;
        </Carousel.Slide>
        <Carousel.Slide
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "1550px 720px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{ marginTop: "270px" }}>
            <Title ta="center" size="65px" span c="white" inherit>
              <Text span c="#FF3F4B" inherit>
                Dive
              </Text>{" "}
              Into The Depths
            </Title>
            <Text
              style={{
                border: "2px solid #FF3F4B",
                width: "300px",
                height: "0px",
                position: "absolute",
                left: "610px",
                top: "390px",
              }}
            ></Text>
            <Button
              style={{
                position: "absolute",
                background: "#FF3F4B",
                width: "150px",
                height: "50px",
                left: "680px",
                top: "580px",
                borderRadius: "30px",
              }}
            >
              {" "}
              Sign Up
            </Button>
          </div>
          ;
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
