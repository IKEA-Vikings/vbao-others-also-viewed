import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import {Container} from './style_OthersAlsoViewed.jsx';

class OthersAlsoViewed extends React.Component {
  constructor(props) {
    super(props);

    this.navigatePages = this.navigatePages.bind(this);

    this.state = {
      page: null,
      allItems: {},
      pages: {}
    };
  }

  async componentDidMount() {
    let newState = {};
    let allItems = newState.allItems = {};
    let pages = newState.pages = {};
    const id = window.location.href.split('/')[3];
    const response = await axios.get(`/similar-products-by-views/${id}`);
    const data = response.data[0].similar_items;
    newState.page = 1;

    for (let i = 0, j = 1; i < data.length && i < 16; i++) {
      allItems[data[i]] = {};
      if (!pages[j]) {
        pages[j] = [];
      }
      if (pages[j].length === 3) {
        pages[j].push(data[i]);
        j++;
      } else {
        pages[j].push(data[i]);
      }
    }

    const mapToAllItems = (APIdata, storage) => {
      if (!APIdata) return;
      for (const item of APIdata) {
        for (const key in item) {
          if ( storage[item._id] && key !== 'id' && key !== '_id') {
            storage[item._id][key] = item[key];
          }
        }
      }
    }

    const aboutPromiseChain = await data.map(async (itemID) => {
      try {
        const response = await axios.get(`http://ec2-3-86-58-21.compute-1.amazonaws.com:3003/api/product/${itemID}`);
        const data = response.data;
        let prep;
        if (data) {
          prep = {
            _id: data._id,
            brand: data.brand,
            category: data.category,
            price: data.price
          };
        }
        return prep;
      } catch {
        return {
          _id: itemID,
          brand: null,
          category: null,
          price: null
        };
      }
    });

    const imagesPromiseChain = await data.map(async (itemID) => {
      try {
        const response = await axios.get(`http://54.67.28.46:3004/images/sizeService/${itemID}`);
        const data = response.data[0];
        let prep = {
          _id: itemID,
          image: data
        };
        return prep;
      } catch {
        return {
          _id: itemID,
          image: null
        };
      }
    });

    const dataCSV = data.join(',');
    const reviewsAPICall = await axios.get(`http://100.25.191.161/api/reviews/${dataCSV}`);
    const reviewsPromiseChain = reviewsAPICall.data;

    const sizeDataPromiseChain = await data.map(async (itemID) => {
      try {
        const response = await axios.get(`http://18.221.34.3:3002/api/sizes/${itemID}`);
        const data = response.data;
        let prep = {
          _id: data.id,
          title: data.title
        };
        return prep;
      } catch {
        return {
          _id: itemID,
          title: null
        };
        return prep;
      }
    });

    const about = await Promise.all(aboutPromiseChain);
    const images = await Promise.all(imagesPromiseChain);
    const reviews = await Promise.all(reviewsPromiseChain);
    const sizeData = await Promise.all(sizeDataPromiseChain);

    for (const api of [about, images, reviews, sizeData]) {
      mapToAllItems(api, allItems);
    }

    this.setState(newState);
  }

  navigatePages(e) {
    let button = e.target.name;
    let currentPage = this.state.props.page;
    if (button === 'next' && currentPage !== 4) {
      currentPage++;
      this.setState({page: currentPage});
    } else if (button === 'previous' && currentPage !== 1) {
      currentPage--;
      this.setState({page: currentPage});
    } else {
      console.log('Button click conditions not met for some reason.');
    }
  }

  render() {
    return(
      <Container>
        <h1>Others also viewed</h1>
        <div>
          <button name="previous" onClick={this.navigatePages}>Previous</button>
          <button name="next" onClick={this.navigatePages}>Next</button>
        </div>
          <Carousel data={this.state.allItems} items={this.state.pages[this.state.page]}/>
        <div>
          Tracking line
        </div>
      </Container>
    );
  };
}

export default OthersAlsoViewed;