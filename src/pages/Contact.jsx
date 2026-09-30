/********************************************************/
/* Contact page. Controlled React form using useState;  */
/* useNavigate returns the visitor to Home/Landing page */
/* after submission for now.                            */
/********************************************************/

// useState hook for storing and updating form input values
import { useState } from "react";
// useNavigate allows programmatic navigation between routes
import { useNavigate } from "react-router-dom";


function Contact() {
  const navigate = useNavigate();

  // Stores all contact form fields in a single state object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  // Updates the appropriate form field whenever the user enters or changes data
  function handleChange(event) {
    const { name, value } = event.target;

    // Updates only the changed field while preserving the other form values
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  // Handles the form submission
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Contact form submission:", formData);

    // Redirects to the Home page after submission
    navigate("/");
  }

  return (
    <section className="contact-page">
      <div className="page-header">
        <p className="section-label">GET IN TOUCH</p>

        <h1>Contact Me</h1>

        <p>
          If you would like to discuss a project, technology solution, or
          professional opportunity, feel free to get in touch.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>

            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>

            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows="7"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="primary-button">
          Send Message
        </button>
      </form>
    </section>
  );
}

// Exports so it can be imported and used by other files
export default Contact;