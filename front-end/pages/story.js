import styled from "styled-components";
import Layout from "../components/Layout";
import React, { Component } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import Article from "../components/Article";

const StoryStyle = styled.div`
  & * {
    border: solid #e5e5e5 1px;
  }
  margin: 4rem 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fit, minmax(140px, auto));
  grid-auto-flow: dense;
  grid-gap: 2rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
  }

  .imgComponent {
    grid-column: 1;
    grid-row: 1/4;

    & img {
      object-fit: cover;
      object-position: 50% 50%;
      width: 100%;
      height: 100%;
    }
  }
  .titleWrapper {
  }
  .article {
    height: 100%;
  }
`;

class Branch extends Component {
  static async getInitialProps({ query }) {
    console.log(query.slug);
    const slug = query.slug;
    return { slug };
  }

  constructor(props) {
    super(props);
    this.state = {
      story: {},
      isLoading: true
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:8888/wp-json/wp/v2/stories?search=${this.props.slug}`
      )
      .then(response => {
        // handle success

        if (response.data.length == 1) {
          this.setState({
            story: response.data,
            isLoading: false
          });
        }
      });
  }

  render() {
    return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        {!this.state.isLoading &&
          this.state.story.map(item => {
            console.log(item);
            return (
              <StoryStyle>
                <div className="imgComponent">
                  <img src={item.acf.story_image} alt="" />
                </div>
                <div className="titleWrapper">
                  <h1>{item.acf.story_header}</h1>
                  <h4>{item.acf.story_ingress}</h4>
                </div>
                {item.acf.story_content.map(i => {
                  return (
                    <Article
                      headerText={i.paragraph_header}
                      paragraphText={i.paragraph_text}
                    />
                  );
                })}
              </StoryStyle>
            );
          })}
      </Layout>
    );
  }
}

export default Branch;
