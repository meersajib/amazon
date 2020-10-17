import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import ProductDetails from './ProductDetails';

const list = [
    {
     id:'1',
    title:"The Testaments: The Sequel to The Handmaid's Tale",
    price:130.56,
    rating:5,
    image: "https://images-na.ssl-images-amazon.com/images/I/81IQvh43G8L._UL1500_.jpg",
    description: "Ecommerce managers and online store owners all know the importance of product descriptions. but they are still often overlooked and not optimized to their full potential. \n A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    review: "Productivity is defined as the relationship between used resources and achieved results. Improvements in this area mean to get more and better program output from a given resource level or use less resources to maintain or increase a certain level of output. The Federal Government plays an important role in improving the productivity of state and local governments for two main reasons. (1) The national economy has been strengthened due to productivity improvement and financial outlook in this major sector. Effectiveness and efficiency of numerous Federal grants and regulatory programs implementing federal policy with local governments Even commercial companies and government agencies need to be productive in order to ensure a strong economic position for stakeholders, customers, customers, and societ."
    },
    {
     id:'2',
    title:"The Testaments: The Sequel to The Handmaid's Tale",
    price:103.56,
    rating:5,
    image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
    description: "Ecommerce managers and online store owners all know the importance of product descriptions. but they are still often overlooked and not optimized to their full potential. \n A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    review: "Productivity is defined as the relationship between used resources and achieved results. Improvements in this area mean to get more and better program output from a given resource level or use less resources to maintain or increase a certain level of output. The Federal Government plays an important role in improving the productivity of state and local governments for two main reasons. (1) The national economy has been strengthened due to productivity improvement and financial outlook in this major sector. Effectiveness and efficiency of numerous Federal grants and regulatory programs implementing federal policy with local governments Even commercial companies and government agencies need to be productive in order to ensure a strong economic position for stakeholders, customers, customers, and societ."
    
    },
    {
     id:'3',
    title:"The Testaments: The Sequel to The Handmaid's Tale",
    price:12.56,
    rating:5,
    image: "https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SX425_.jpg",
    description: "Ecommerce managers and online store owners all know the importance of product descriptions. but they are still often overlooked and not optimized to their full potential. \n A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    review: "Productivity is defined as the relationship between used resources and achieved results. Improvements in this area mean to get more and better program output from a given resource level or use less resources to maintain or increase a certain level of output. The Federal Government plays an important role in improving the productivity of state and local governments for two main reasons. (1) The national economy has been strengthened due to productivity improvement and financial outlook in this major sector. Effectiveness and efficiency of numerous Federal grants and regulatory programs implementing federal policy with local governments Even commercial companies and government agencies need to be productive in order to ensure a strong economic position for stakeholders, customers, customers, and societ."
    },
    {
     id:'4',
    title:"The Testaments: The Sequel to The Handmaid's Tale",
    price:13.56,
    rating:5,
    image: "https://images-na.ssl-images-amazon.com/images/I/718B6zl%2Bb6L._AC_SX679_.jpg",
    description: "Ecommerce managers and online store owners all know the importance of product descriptions. but they are still often overlooked and not optimized to their full potential. \n A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    review: "Productivity is defined as the relationship between used resources and achieved results. Improvements in this area mean to get more and better program output from a given resource level or use less resources to maintain or increase a certain level of output. The Federal Government plays an important role in improving the productivity of state and local governments for two main reasons. (1) The national economy has been strengthened due to productivity improvement and financial outlook in this major sector. Effectiveness and efficiency of numerous Federal grants and regulatory programs implementing federal policy with local governments Even commercial companies and government agencies need to be productive in order to ensure a strong economic position for stakeholders, customers, customers, and societ."
    
    },
    {
     id:'5',
    title:"The Testaments: The Sequel to The Handmaid's Tale",
    price:53.56,
    rating:5,
    image: "https://images-na.ssl-images-amazon.com/images/I/71%2BhwPZiawL._AC_SY741_.jpg",
    description: "Ecommerce managers and online store owners all know the importance of product descriptions. but they are still often overlooked and not optimized to their full potential. \n A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    review: "Productivity is defined as the relationship between used resources and achieved results. Improvements in this area mean to get more and better program output from a given resource level or use less resources to maintain or increase a certain level of output. The Federal Government plays an important role in improving the productivity of state and local governments for two main reasons. (1) The national economy has been strengthened due to productivity improvement and financial outlook in this major sector. Effectiveness and efficiency of numerous Federal grants and regulatory programs implementing federal policy with local governments Even commercial companies and government agencies need to be productive in order to ensure a strong economic position for stakeholders, customers, customers, and societ."
    
    },
    {
     id:'6',
    title:"The Testaments: The Sequel to The Handmaid's Tale",
    price:68.07,
    rating:5,
    image: "https://images-na.ssl-images-amazon.com/images/I/81ZlYyOWBuL._AC_SX679_.jpg",
    description: "Ecommerce managers and online store owners all know the importance of product descriptions. but they are still often overlooked and not optimized to their full potential. \n A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    review: "Productivity is defined as the relationship between used resources and achieved results. Improvements in this area mean to get more and better program output from a given resource level or use less resources to maintain or increase a certain level of output. The Federal Government plays an important role in improving the productivity of state and local governments for two main reasons. (1) The national economy has been strengthened due to productivity improvement and financial outlook in this major sector. Effectiveness and efficiency of numerous Federal grants and regulatory programs implementing federal policy with local governments Even commercial companies and government agencies need to be productive in order to ensure a strong economic position for stakeholders, customers, customers, and societ."
    
    },
    {
     id:'7',
    title:"The Testaments: The Sequel to The Handmaid's Tale",
    price:39.56,
    rating:5,
    image: "https://images-na.ssl-images-amazon.com/images/I/61WQSvgxsHL._AC_SL1500_.jpg",
    description: "Ecommerce managers and online store owners all know the importance of product descriptions. but they are still often overlooked and not optimized to their full potential. \n A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    review: "Productivity is defined as the relationship between used resources and achieved results. Improvements in this area mean to get more and better program output from a given resource level or use less resources to maintain or increase a certain level of output. The Federal Government plays an important role in improving the productivity of state and local governments for two main reasons. (1) The national economy has been strengthened due to productivity improvement and financial outlook in this major sector. Effectiveness and efficiency of numerous Federal grants and regulatory programs implementing federal policy with local governments Even commercial companies and government agencies need to be productive in order to ensure a strong economic position for stakeholders, customers, customers, and societ."
    
    },
    {
     id:'8',
    title:"The Testaments: The Sequel to The Handmaid's Tale",
    price:16.00,
    rating:5,
    image: "https://images-na.ssl-images-amazon.com/images/I/41tQlCX2HbL._SX327_BO1,204,203,200_.jpg",
    description: "Ecommerce managers and online store owners all know the importance of product descriptions. but they are still often overlooked and not optimized to their full potential. \n A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    review: "Productivity is defined as the relationship between used resources and achieved results. Improvements in this area mean to get more and better program output from a given resource level or use less resources to maintain or increase a certain level of output. The Federal Government plays an important role in improving the productivity of state and local governments for two main reasons. (1) The national economy has been strengthened due to productivity improvement and financial outlook in this major sector. Effectiveness and efficiency of numerous Federal grants and regulatory programs implementing federal policy with local governments Even commercial companies and government agencies need to be productive in order to ensure a strong economic position for stakeholders, customers, customers, and societ."
    }
  ]

function App() {


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <h1>Login Page</h1>
          </Route>
          <Route path='/product/:id' id='Number'>
            <Header />
            <ProductDetails list={list}/>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
