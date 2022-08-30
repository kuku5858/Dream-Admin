import React from 'react'
import "./newUser.css"

export default function NewUser() {
  return (
    
    <div className="newuser__container">
        <h1>New User</h1>
        <form className="newuser__form">
            <div className="newuser__items">
                <label>First Name</label>
                <input type="text" placeholder="First Name" required/>
            </div>

            <div className="newuser__items">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" required/>
            </div>

            <div className="newuser__items">
                <label>Username</label>
                <input type="text" placeholder="Username" required/>
            </div>

            <div className="newuser__items">
                <label>Email</label>
                <input type="email" placeholder="Email" required/>
            </div>

            <div className="newuser__items">
                <label>Password</label>
                <input type="password" placeholder="Password" required/>
            </div>

            <div className="newuser__items">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" required/>
            </div>
            <button className="newuser__btn">Create User</button>
        </form>
    </div>
  )
}
