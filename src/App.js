import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import Image from "./components/Image";
import logo from "./img/logo.jpg";

const API_URL = "https://verticalbackend.pythonanywhere.com/api/";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_URL + "categories/").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <div>
        <div>
          <Image src={logo} alt="jumbotron-background-image" />
        </div>
        <div className="mt-5">
          <h1 className="flex-center">Podcast Categories</h1>
          <hr />
        </div>
      </div>
      <div>
        <Card className="podcast-card" bg="dark">
          <Card.Body>
            <Card.Title className="podcast-card--title">All</Card.Title>
            <Card.Text className="podcast-card--text">
              See the all podcasts we have.
            </Card.Text>
            <Button href="/podcasts">Go</Button>
          </Card.Body>
        </Card>
        {data.map((category, index) => {
          return (
            <Card className="podcast-card" bg="dark" key={index}>
              <Card.Body>
                <Card.Title className="podcast-card--title">
                  {category.name}
                </Card.Title>
                <Card.Text className="podcast-card--text">
                  See the podcasts about {category.name}.
                </Card.Text>
                <Button href={`/podcasts/${category.name.toLowerCase()}`}>
                  Go
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
