import styled from "styled-components";
import Layout from "../components/Layout/";
import React, { Component } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";

import ActivityCard from "../components/ActivityCard/";
import LoadingScreen from "../components/LoadingScreen/";

const EventsWrapper = styled.div`
  margin-top: 63px;
  padding: 50px 150px 0 150px;

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: normal;
    letter-spacing: 0.02em;
    color: #046da9;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 992px) {
    padding: 16px 16px 0 16px;
    margin-top: 95px;

    h2 {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }
`;

class Events extends Component {
  static async getInitialProps({ query }) {
    const lang = query.locale ? query.locale : "en";
    return { lang };
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      events: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:8888/wp-json/activities/search?locale=${
          this.props.lang
        }`
      )
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            events: response.data,
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
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #eeeeee;
            font-family: sans-serif;
            color: white;
          }
        `}</style>
        {this.state.isLoading && <LoadingScreen />}

        <EventsWrapper>
          <h2>Upcoming events</h2>
          {!this.state.isLoading &&
            this.state.events.map(event => <ActivityCard data={event} />)}
        </EventsWrapper>
      </Layout>
    );
  }
}

export default Events;
