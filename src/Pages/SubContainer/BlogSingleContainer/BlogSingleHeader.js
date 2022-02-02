import React from "react";
import { Link } from "react-router-dom";

function BlogSingleHeader() {
  return (
    <div>
      <header id="header">
        <div classNameName="header_top">
          <div classNameName="container">
            <div classNameName="row">
              <div classNameName="col-sm-6">
                <div classNameName="contactinfo">
                  <ul classNameName="nav nav-pills">
                    <li>
                      <a href="">
                        <i classNameName="fa fa-phone"></i> +2 95 01 88 821
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i classNameName="fa fa-envelope"></i> info@domain.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div classNameName="col-sm-6">
                <div classNameName="social-icons pull-right">
                  <ul classNameName="nav navbar-nav">
                    <li>
                      <a href="">
                        <i classNameName="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i classNameName="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i classNameName="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i classNameName="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i classNameName="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div classNameName="header-middle">
          <div classNameName="container">
            <div classNameName="row">
              <div classNameName="col-md-4 clearfix">
                <div classNameName="logo pull-left">
                  <Link to="/">
                    <img src="assets/images/home/logo.png" alt="" />
                  </Link>
                </div>
                <div classNameName="btn-group pull-right clearfix">
                  <div classNameName="btn-group">
                    <button
                      type="button"
                      classNameName="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      USA
                      <span classNameName="caret"></span>
                    </button>
                    <ul classNameName="dropdown-menu">
                      <li>
                        <a href="">Canada</a>
                      </li>
                      <li>
                        <a href="">UK</a>
                      </li>
                    </ul>
                  </div>

                  <div classNameName="btn-group">
                    <button
                      type="button"
                      classNameName="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      DOLLAR
                      <span classNameName="caret"></span>
                    </button>
                    <ul classNameName="dropdown-menu">
                      <li>
                        <a href="">Canadian Dollar</a>
                      </li>
                      <li>
                        <a href="">Pound</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div classNameName="col-md-8 clearfix">
                <div classNameName="shop-menu clearfix pull-right">
                  <ul classNameName="nav navbar-nav">
                    <li>
                      <a href="">
                        <i classNameName="fa fa-user"></i> Account
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i classNameName="fa fa-star"></i> Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="checkout.html">
                        <i classNameName="fa fa-crosshairs"></i> Checkout
                      </a>
                    </li>
                    <li>
                      <a href="cart.html">
                        <i classNameName="fa fa-shopping-cart"></i> Cart
                      </a>
                    </li>
                    <li>
                      <a href="login.html">
                        <i classNameName="fa fa-lock"></i> Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div classNameName="header-bottom">
          <div classNameName="container">
            <div classNameName="row">
              <div classNameName="col-sm-9">
                <div classNameName="navbar-header">
                  <button
                    type="button"
                    classNameName="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span classNameName="sr-only">Toggle navigation</span>
                    <span classNameName="icon-bar"></span>
                    <span classNameName="icon-bar"></span>
                    <span classNameName="icon-bar"></span>
                  </button>
                </div>
                <div classNameName="mainmenu pull-left">
                  <ul classNameName="nav navbar-nav collapse navbar-collapse">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li classNameName="dropdown">
                      <a href="#">
                        Shop<i classNameName="fa fa-angle-down"></i>
                      </a>
                      <ul role="menu" classNameName="sub-menu">
                        <li>
                          <a href="shop.html">Products</a>
                        </li>
                        <li>
                          <a href="product-details.html">Product Details</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                      </ul>
                    </li>
                    <li classNameName="dropdown">
                      <a href="#" classNameName="active">
                        Blog<i classNameName="fa fa-angle-down"></i>
                      </a>
                      <ul role="menu" classNameName="sub-menu">
                        <li>
                          <a href="blog.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-single.html" classNameName="active">
                            Blog Single
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div classNameName="col-sm-3">
                <div classNameName="search_box pull-right">
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default BlogSingleHeader;
