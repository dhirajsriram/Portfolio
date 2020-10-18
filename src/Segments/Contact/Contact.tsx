import React, { useState } from 'react';
import './Contact.scss';

const Contact: React.FC = () => {
  const [state, setState] = useState<any>({});
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const maiLink1 =
      'mailto:dhirajsriram3194@gmail.com?subject=' +
      state.subject +
      '- ' +
      state.name +
      ' ' +
      state.surname +
      ' ( ' +
      state.Phone +
      ' ) &body=' +
      state.message;
    const mailLink2 =
      'mailto:dhirajsriram3194@gmail.com?subject=' +
      state.subject +
      '- ' +
      state.name +
      ' ' +
      state.surname +
      '&body=' +
      state.message;
    state.phone
      ? (window.location.href = maiLink1)
      : (window.location.href = mailLink2);
    event.preventDefault();
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({ [event.target.name]: event.target.value });
  };

  return (
    <div
      className="resume-section  p-3 d-flex flex-column transition-item"
      id="contact"
    >
      <div className="my-auto">
        <h2 id="contacth2" className="heading-padd" />
        <h2 className="mb-5 Heading mt-3">GET IN TOUCH</h2>
        <div className="container-fluid">
          <form
            id="contact-form"
            name="contact"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="messages" />

            <div className="controls">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="form_name">First Name *</label>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      placeholder="Please enter your firstname *"
                      required={true}
                      data-error="Firstname is required."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="form_lastname">Last Name *</label>
                    <input
                      id="form_lastname"
                      type="text"
                      name="surname"
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      placeholder="Please enter your lastname *"
                      required={true}
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
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      placeholder="Please enter your email *"
                      required={true}
                      data-error="Valid email is required."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="form_Phone">Phone</label>
                    <input
                      id="form_Phone"
                      type="number"
                      name="Phone"
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      placeholder="Subject*"
                      required={true}
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
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      placeholder="Message for me *"
                      rows={4}
                      required={true}
                      data-error="Please, leave us a message."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <input
                    type="submit"
                    className="btn btn-success btn-contact-submit pl-3 pr-3 pt-2 pb-2"
                    value="Send message"
                  />
                </div>
              </div>
              <div className="row pt-2">
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
};

export default Contact;
