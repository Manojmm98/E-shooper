import React from "react";
import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <div>
      <div id="contact-page" classNameName="container">
        <div classNameName="bg">
          <div classNameName="row">
            <div classNameName="col-sm-12">
              <h2 classNameName="title text-center">
                Contact <strong>Us</strong>
              </h2>
              <div id="gmap" classNameName="contact-map"></div>
            </div>
          </div>
          <div classNameName="row">
            <div classNameName="col-sm-8">
              <div classNameName="contact-form">
                <h2 classNameName="title text-center">Get In Touch</h2>
                <div
                  classNameName="status alert alert-success"
                  style={{ display: "none" }}
                ></div>
                <form
                  id="main-contact-form"
                  classNameName="contact-form row"
                  name="contact-form"
                  method="post"
                >
                  <div classNameName="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      classNameName="form-control"
                      required="required"
                      placeholder="Name"
                    />
                  </div>
                  <div classNameName="form-group col-md-6">
                    <input
                      type="email"
                      name="email"
                      classNameName="form-control"
                      required="required"
                      placeholder="Email"
                    />
                  </div>
                  <div classNameName="form-group col-md-12">
                    <input
                      type="text"
                      name="subject"
                      classNameName="form-control"
                      required="required"
                      placeholder="Subject"
                    />
                  </div>
                  <div classNameName="form-group col-md-12">
                    <textarea
                      name="message"
                      id="message"
                      required="required"
                      classNameName="form-control"
                      rows="8"
                      placeholder="Your Message Here"
                    ></textarea>
                  </div>
                  <div classNameName="form-group col-md-12">
                    <input
                      type="submit"
                      name="submit"
                      classNameName="btn btn-primary pull-right"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div classNameName="col-sm-4">
              <div classNameName="contact-info">
                <h2 classNameName="title text-center">Contact Info</h2>
                <address>
                  <p>E-Shopper Inc.</p>
                  <p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
                  <p>Newyork USA</p>
                  <p>Mobile: +2346 17 38 93</p>
                  <p>Fax: 1-714-252-0026</p>
                  <p>Email: info@e-shopper.com</p>
                </address>
                <div classNameName="social-networks">
                  <h2 classNameName="title text-center">Social Networking</h2>
                  <ul>
                    <li>
                      <a href="#">
                        <i classNameName="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i classNameName="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i classNameName="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i classNameName="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
