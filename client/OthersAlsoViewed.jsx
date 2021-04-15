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
      order: []
    };
  }

  async componentDidMount() {
    let newState = {};
    let allItems = newState.allItems = {};
    let order = newState.order = [];
    const id = window.location.href.split('/')[3];
    const response = await axios.get(`/similar-products-by-views/${id}`);
    const data = response.data[0].similar_items;

    for (let i = 0; i < data.length && i < 16; i++) {
      allItems[data[i]] = {};
      order.push(data[i]);
    }

    // await data.map(async (itemId) => {
    //   const response = await axios.get(`http://3.86.58.21:3003/api/product/${itemId}`);
    //   const data = response.data;
    //   allItems[itemId].brand = data.brand;
    //   allItems[itemId].category = data.category;
    //   allItems[itemId].color = data.color;
    //   allItems[itemId].price = data.price;
    // });

    // await data.map(async (itemId) => {
    //   const response = await axios.get(`http://54.67.28.46:3004/images/sizeService/${id}`);
    //   const data = response.data[0];
    //   allItems[itemId].image = data;
    // });

    //REVIEWS
    const dataCSV = data.join(',');
    const reviews = await axios.get(`http://100.25.191.161/api/reviews/${dataCSV}`);
    const reviewData = response.data;
    console.log(reviewData);

    // await data.map(async (itemId) => {
    //   const response = await axios.get(`http://100.25.191.161/api/reviews/${id}`);
    //   const reviewData = response.data;
    //   console.log(reviewData);
    // });

    // console.log(newState);
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
        <Carousel />
        <div>
          Tracking line
        </div>
      </div>
    );
  };
}

export default OthersAlsoViewed;