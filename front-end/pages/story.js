import styled from "styled-components";
import Layout from "../components/Layout";
import React, { Component } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import Article from "../components/Article";
import LoadingScreen from "../components/LoadingScreen";

const StoryStyle = styled.div`
  padding: 9rem 140px;
  display: grid;
  h1,
  h2,
  h3 {
    color: ${props => props.theme.colorTextPrimary};
  }

  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fit, minmax(100px, auto));
  grid-auto-flow: dense;
  grid-gap: 2rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
    padding: 5rem 16px;
  }

  .imgComponent {
    grid-column: 1;
    grid-row: 1/2;

    & img {
      object-fit: cover;
      object-position: top;
      width: 100%;
      max-height:500px;
    }
  }

  .titleWrapper {
    h2 {
      margin-bottom: 2rem;
    }
    h4 {
      margin-bottom: 1rem;
    }
  }

  .article {
    height: 100%;
  }
`;

class Branch extends Component {
  static async getInitialProps({ query }) {
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

        {this.state.isLoading && <LoadingScreen />}

        {!this.state.isLoading &&
          this.state.story.map(item => {
            return (
              <StoryStyle>
                <div className="imgComponent">
                  <img src={item.acf.story_image} alt="" />
                </div>
                <div className="titleWrapper">
                  <h2>{item.acf.story_header}</h2>
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
