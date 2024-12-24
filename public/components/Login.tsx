import React from 'react'
import "../css/styles.css"

type Props = {}

export default function Login({ }: Props) {
  return (
    <div >
      <form>
        <h3>Login Here</h3>
        <label >Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label >Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>
    </div>
  )
}