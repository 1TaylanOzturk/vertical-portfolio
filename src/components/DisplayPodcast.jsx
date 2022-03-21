import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ModifiedBadge from "./ModifiedBadge";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "../styles/App.css";

const API_URL = "https://verticalbackend.pythonanywhere.com/api/";

export default function DisplayPodcasts(props) {
  const [data, setData] = useState([]);
  let { category } = useParams();

  if (props.endpoint) {
    var endpoint = props.endpoint;
  } else {
    category = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the category
  }

  useEffect(() => {
    if (endpoint) {
      axios.get(API_URL + endpoint).then((res) => setData(res.data));
    } else {
      axios
        .get(API_URL + `podcasts?category=${category}/`)
        .then((res) => setData(res.data));
    }
  }, [category, endpoint]);

  return (
    <>
      <div>
        {data.map((element, index) => {
          return (
            <Card className="podcast-card mt-5" bg="dark" key={index}>
              <Card.Body>
                <Card.Title className="podcast-card--title">
                  {element.title}
                </Card.Title>
                <Card.Subtitle className="mb-2">
                  {element.categories.map((category, index) => {
                    return (
                      <ModifiedBadge
                        tags={category.name}
                        key={index}
                        bg="secondary"
                      />
                    );
                  })}
                </Card.Subtitle>
                <Card.Text className="podcast-card--text">
                  {element.description}
                </Card.Text>

                <Button
                  href={element.podcast_platform_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Listen to This Podcast
                </Button>
              </Card.Body>
              <Card.Footer>
                {element.authors.map((author, index) => {
                  return (
                    <ModifiedBadge
                      tags={"by " + author.name}
                      key={index}
                      bg="danger"
                    />
                  );
                })}
              </Card.Footer>
            </Card>
          );
        })}
      </div>
      <div className="clearfix"></div>
    </>
  );
}
