import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log(this.state)
    var maiLink1 = "mailto:dhirajsriram3194@gmail.com?subject=" + this.state.subject +"- "+this.state.name +" " + this.state.surname +  " ( "+ this.state.Phone + " ) &body="+this.state.message;
    var mailLink2 = "mailto:dhirajsriram3194@gmail.com?subject=" + this.state.subject +"- "+this.state.name +" " + this.state.surname +"&body="+this.state.message;
    if(this.state.Phone){
    window.location.href = maiLink1;
  }
  else{
    window.location.href = mailLink2;
  }
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return (
      <div
        className="resume-section  p-3 d-flex flex-column transition-item"
        id="contact"
      >
        <div className="my-auto">
        <h2 id="contacth2" className="heading-padd"> </h2>
          <h2 className="mb-5 Heading mt-3" >GET IN TOUCH</h2>
          <div className="container-fluid">
            <form id="contact-form" name="contact" method="post" onSubmit={this.handleSubmit}>
              <div className="messages" />

              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_name">Firstname *</label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Please enter your firstname *"
                        required="required"
                        data-error="Firstname is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_lastname">Lastname *</label>
                      <input
                        id="form_lastname"
                        type="text"
                        name="surname"
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Please enter your lastname *"
                        required="required"
                        data-error="Lastname is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_email">Email *</label>
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Please enter your email *"
                        required="required"
                        data-error="Valid email is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_phone">Phone</label>
                      <input
                        id="form_Phone"
                        type="number"
                        name="Phone"
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Please enter your Phone "
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="form_subject">Subject *</label>
                      <input
                        id="form_subject"
                        name="subject"
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Subject*"
                        required="required"
                        data-error="Please add a subject"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="form_message">Message *</label>
                      <textarea
                        id="form_message"
                        name="message"
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Message for me *"
                        rows="4"
                        required="required"
                        data-error="Please, leave us a message."
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                  <input
                      type="submit"
                      className="btn btn-success btn-contact-submit"
                      value="Send message"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="text-muted">
                      <strong>*</strong> These fields are required.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
