import React from 'react'
import styles from "../components/styles/Login.module.css"

const Login = () => {
  return (
    <div className={styles.form}>
      <h4>Login to your account</h4>
      <form className={styles.form_main}>
        <input type="email" name="email" value="email" placeholder='Email'> </input>
      </form>
    </div>
  )
}

export default Login