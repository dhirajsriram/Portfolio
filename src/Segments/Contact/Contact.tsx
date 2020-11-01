import React, { useState } from 'react';
import './Contact.scss';

declare global {
  interface Window {
    grecaptcha: any;
    emailjs: any;
  }
}

function Contact() {
  const myFormRef = React.useRef<any>();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [recaptchError, setRecaptchError] = useState(false);
  const submitInfo = (e: HTMLFormElement) => {
    e.preventDefault();
    setSending(false);
    if (window.grecaptcha.getResponse() === '') {
      setRecaptchError(true);
    } else {
      setRecaptchError(false);
      setSent(false);
      setSending(true);
      const serviceId = 'service_uxtmsyi';
      const templateId = 'template_6b5rynb';
      if (window.emailjs) {
        window.emailjs.sendForm(serviceId, templateId, e.target).then(
          () => {
            setSent(true);
            setSending(false);
          },
          (err: Error) => {
            alert(`Unable to submit the form : ${JSON.stringify(err)}`);
          }
        );
        myFormRef.current?.reset();
      }
    }
    window.grecaptcha.reset();
  };
  return (
    <div className="resume-section  p-3 d-flex flex-column transition-item" id="contact">
      <div className="my-auto">
        <h2 id="contacth2" className="heading-padd" />
        <h2 className="mb-5 Heading mt-3">GET IN TOUCH</h2>
        <div className="container-fluid">
          <form ref={myFormRef} id="contact-form" name="contact" method="post" onSubmit={(e: any) => submitInfo(e)}>
            <div className="messages" />
            <div className="controls">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="form_name">Name *</label>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required={true}
                      data-error="Name is required."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="form_Company">Company *</label>
                    <input
                      id="form_Company"
                      type="text"
                      name="company"
                      className="form-control"
                      placeholder="Company "
                      required={true}
                      data-error="Company is required."
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
                      className="form-control"
                      placeholder="Email "
                      required={true}
                      data-error="Valid email is required."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="form_phone">Phone *</label>
                    <input id="form_phone" type="number" name="phone" className="form-control" placeholder="Phone" />
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
                      className="form-control"
                      placeholder="Subject"
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
                      className="form-control"
                      placeholder="Message for me "
                      rows={4}
                      required={true}
                      data-error="Please, leave a message."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div
                  className={recaptchError ? 'g-recaptcha error pl-2' : 'g-recaptcha pl-2 pb-3'}
                  data-theme="dark"
                  data-sitekey="6Ld80N0ZAAAAAFJuZ6TkFTNiimx6cJlcMwCtSQnH"
                />
                <div className="col-md-12 button-block">
                  <div>
                    {!sending ? (
                      <button type="submit" className="btn btn-success btn-contact-submit p-2 pl-3 pr-3">
                        Send
                      </button>
                    ) : (
                      <div className="spinner-container">
                        <div className="spinner-border" />
                      </div>
                    )}
                  </div>
                  {sent && (
                    <div className="get-back pt-3">
                      <i className="fas fa-check-circle" />
                      Message Sent
                    </div>
                  )}
                  <div className="find-me">
                    <div>
                      <a className="icon" href="https://www.linkedin.com/in/dhiraj-sriram/">
                        <i className="fab fa-linkedin" />
                        Linkedin
                      </a>
                    </div>
                    <div>
                      <a className="icon" href="mailto:sriram.ureka@gmail.com">
                        <i className="fas fa-envelope" />
                        dhirajsriram3194@gmail.com
                      </a>
                    </div>
                    <div>
                      <a className="icon" href="tel:+919500034195">
                        <i className="fas fa-phone" />
                        +49 15733-876987
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
