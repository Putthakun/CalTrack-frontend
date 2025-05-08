import { useState } from "react"

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    console.log(formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="form-login">
        {/* username input */}
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          autoComplete="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span className="errorMessage">{errors.username}</span>}
      </div>

      {/* password input */}
      <div className="form-login">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="errorMessage">{errors.password}</span>}
      </div>

      <div className="btn-submit">
        <button type="submit">Login Now!</button>
      </div>
    </form>
  )
}

export default LoginForm