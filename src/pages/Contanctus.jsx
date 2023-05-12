import React from "react";
import "../style/contanctus.css";
const Contanctus = () => {
  return (
    <>
      <div className="container1">
        <div className=" text-center mt-5 ">
          <p
            style={{
              textAlign: "center",
              color: "blue",
              fontSize: "35px",
              fontFamily: "fantasy",
            }}
          >
            Contact Us
          </p>
        </div>
        <div className="row ">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_name">Name</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Enter your Name *"
                              required="required"
                              data-error="Firstname is required."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_email">Email *</label>
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder=" Enter your email *"
                              required="required"
                              data-error="Valid email is required."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_lastname">Contact*</label>
                            <input
                              id="form_"
                              type="text"
                              name="Contact"
                              className="form-control"
                              placeholder="Enter your Contact No *"
                              required="required"
                              data-error="Lastname is required."
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_lastname">City*</label>
                            <input
                              id="form_"
                              type="text"
                              name="City"
                              className="form-control"
                              placeholder="Enter your City *"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_lastname">Subject*</label>
                            <input
                              id="form_"
                              type="text"
                              name="Subject"
                              className="form-control"
                              placeholder="Subject*"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_need">Query Type *</label>
                            <select
                              id="form_need"
                              name="need"
                              className="form-control"
                              required="required"
                              data-error="Please specify your need."
                            >
                              <option value="" selected="" disabled="">
                                --Select--
                              </option>
                              <option>Account</option>
                              <option>Payment</option>
                              <option>Service</option>
                              <option>Complaint</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="file">
                          <input type="file" id="file" name="file" />
                        </label>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Message *</label>
                            <textarea
                              id="form_message"
                              name="message"
                              className="form-control"
                              placeholder="Write your message here."
                              rows={4}
                              required="required"
                              data-error="Please, leave us a message."
                              defaultValue={""}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <input
                            type="submit"
                            className="btn btn-success btn-send  pt-2 btn-block
                    "
                            defaultValue="Send Message"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /.8 */}
          </div>
          {/* /.row*/}
        </div>
        <div class="row justify-content-center mt-2  ">
          <div class="col-md-3 text-center ">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-envelope mt-4 fa-1x">Email </i>
                <p>info@letusmaintain.com</p>
              </li>
            </ul>
            <i class="fas fa-phone-alt fa-1x"> Helpline Number-</i>
            <span>+912269621753</span>
            <div> [10:00 am to 06:00 pm] I.S.T</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contanctus;
