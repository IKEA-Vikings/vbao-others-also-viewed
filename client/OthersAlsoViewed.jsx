import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';

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

    // await data.map(async (itemId) => {
    //   const response = await axios.get(`http://3.86.58.21:3003/api/product/${itemId}`);
    //   const data = response.data;
    //   allItems[itemId].brand = data.brand;
    //   allItems[itemId].name = data.category;
    //   allItems[itemId].color = data.color;
    //   allItems[itemId].price = data.price;
    // });

    // await data.map(async (itemId) => {
    //   const response = await axios.get(`http://54.67.28.46:3004/images/sizeService/${itemId}`);
    //   const data = response.data[0];
    //   allItems[itemId].image = data;
    // });

    // const dataCSV = data.join(',');
    // const reviews = await axios.get(`http://100.25.191.161/api/reviews/${dataCSV}`);
    // const reviewData = response.data;
    // console.log(reviewData);
    // for (const review of reviewData) {
    //   const id = review._id || null;
    //   if (id) {
    //     allItems[id].ratingsAverage = review.average;
    //     allItems[id].ratingsCount = review.number;
    //   }
    // }

    // await data.map(async (itemId) => {
    //   const response = await axios.get(`http://100.25.191.161/api/reviews/${itemId}`);
    //   const reviewData = response.data;
    //   console.log(reviewData);
    // });

    // await data.map(async (itemId) => {
    //   const response = await axios.get(`http://18.221.34.3:3002/api/sizes/${itemId}`);
    //   const data = response.data.title;
    //   if (data) {
    //     allItems[itemId].name = allItems[itemId].name + ', ' + data;
    //   }
    // });

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
      <div>
        <div>
          <button name="previous" onClick={this.navigatePages}>Previous</button>
          <button name="next" onClick={this.navigatePages}>Next</button>
        </div>
        <Carousel data={this.state.allItems} items={this.state.pages[this.state.page]}/>
        <div>
          Tracking line
        </div>
      </div>
    );
  };
}

export default OthersAlsoViewed;