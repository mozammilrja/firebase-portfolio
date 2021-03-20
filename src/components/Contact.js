import React, { useState } from "react";
import Typed from "react-typed";
import { db } from "../firebase/fb";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Form")
      .add({
        name: name,
        email: email,
        message: message,
        phone: phone,
      })
      .then(() => {
        alert("Your form has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div>
      <div className="contact">
        <div className="react-typed">
          <br />
          <h1>Welcome to contact section</h1>
          <br />

          <Typed
            className="typed"
            strings={[
              "Web Development",
              "ReactJS",
              "Bootstrap",
              "MaterialUI",
              "Firebase",
              "FireStore",
            ]}
            typeSpeed={40}
            // typeSpeed={60}
            loop
          />
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form">
          <section className="section">
            <div className="container">
              <div className="card shadow">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="main-heading">Contact from</h5> <br />
                      <div class="mb-3"></div>
                      <div className="mb-3">
                        <label for="name">Name</label>
                        <input
                          type="name"
                          className="form-control"
                          placeholder="Enter the name"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter the email"
                          id="name"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="phone">Phone</label>
                        <input
                          type="phone"
                          className="form-control"
                          placeholder="Enter the phone"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="message">Message</label>
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Enter the message "
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                    <div className="col-md-6">
                      <h5 className="main-heading">Address information </h5>

                      <br />
                      <br />
                      <p>Gharaun Mohali Punjab India</p>
                      <p>phone +918102472325</p>
                      <p>Email mozammilrja0218@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default Contact;
