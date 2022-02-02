import React from "react";
import { Link } from "react-router-dom";

function ContactHeader() {
  return (
    <div>
      <header id="header">
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="contactinfo">
                  <ul className="nav nav-pills">
                    <li>
                      <a href="">
                        <i className="fa fa-phone"></i> +2 95 01 88 821
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-envelope"></i> info@domain.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="social-icons pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-4 clearfix">
                <div className="logo pull-left">
                  <Link to="/">
                    <img src="assets/images/home/logo.png" alt="" />
                  </Link>
                </div>
                <div className="btn-group pull-right clearfix">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      USA
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="">Canada</a>
                      </li>
                      <li>
                        <a href="">UK</a>
                      </li>
                    </ul>
                  </div>

                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      DOLLAR
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
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
              <div className="col-md-8 clearfix">
                <div className="shop-menu clearfix pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      <a href="">
                        <i className="fa fa-user"></i> Account
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-star"></i> Wishlist
                      </a>
                    </li>
                    <li>
                      <Link to="/checkout">
                        <i className="fa fa-crosshairs"></i> Checkout
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart">
                        <i className="fa fa-shopping-cart"></i> Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        <i className="fa fa-lock"></i> Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="dropdown">
                      <a href="#">
                        Shop<i className="fa fa-angle-down"></i>
                      </a>
                      <ul role="menu" className="sub-menu">
                        <li>
                          <Link to="/shop">Products</Link>
                        </li>
                        <li>
                          <Link to="/productdetail">Product Details</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Checkout</Link>
                        </li>
                        <li>
                          <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">
                        Blog<i className="fa fa-angle-down"></i>
                      </a>
                      <ul role="menu" className="sub-menu">
                        <li>
                          <Link to="/blog">Blog List</Link>
                        </li>
                        <li>
                          <Link to="/blogsingle">Blog Single</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/error">404</Link>
                    </li>
                    <li className="active">
                      <Link to="/contact">Contact</Link>
                    </li>
                    {/* <Link>Contact</Link> */}
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="search_box pull-right">
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

export default ContactHeader;