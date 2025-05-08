import { useState } from "react";

function RegisterForm() {

  // set error form validate data
  const [errors, setErrors] = useState({})
  // set form data from input
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  // function update data in setFormData
  const handleChange = (e) => { 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // function validate data
  const validateData = () => {
    const newErrors = {}

    // validate firstname regex
    const firstnameRegex = /^[A-Z][a-zA-Z]*$/
    if (!firstnameRegex.test(formData.firstname)) newErrors.firstname = "Start with capital letters or only letters"

    // validate lastname regex
    const lastnameRegex = /^[a-z]+$/
    if (!lastnameRegex.test(formData.lastname)) newErrors.lastname = "It is in small print and letters only."

    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Email format invalid";

    // validate password regex
    if (formData.password.length < 8) newErrors.password = "Password at least 8 characters"
    // validate confirmPassword regex
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Confirm password invalid"

    return newErrors
  }

  // function submit 
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateData();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Thank you!");
    console.log(formData);

  }


  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {/* Username input */}
      <div className="form-group">
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      {/* Firstname input */}
      <div className="form-group">
        <label htmlFor="firstname">Firstname :</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Enter your firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
      </div>
      {errors.firstname && (<span className="errorMessage">{errors.firstname}</span>)}

      {/* Lastname input */}
      <div className="form-group">
        <label htmlFor="lastname">Lastname :</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Enter your lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
      </div>
      {errors.lastname && (<span className="errorMessage">{errors.lastname}</span>)}

      {/* E-mail input */}
      <div className="form-group">
        <label htmlFor="e-mail">E-mail :</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      {errors.email && <span className="errorMessage">{errors.email}</span>}

      {/* Password input */}
      <div className="form-group">
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      {errors.password && (<span className="errorMessage">{errors.password}</span>)}

      {/* confirmPassword input */}
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm password :</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Enter confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      {errors.confirmPassword && (<span className="errorMessage">{errors.confirmPassword}</span>)}

      {/* Button for sumbit */}
      <div className="btn-sumbit">
        <button type="submit">Register Now!</button>
      </div>
    </form>
  )
}

export default RegisterForm