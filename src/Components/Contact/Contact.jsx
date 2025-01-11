import React from 'react'
import './Contact.css'
import con from '../../assets/contact.png'

const Contact = () => {
  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={con} alt="" />
        </div>
        <div className="rightcontact">
            <form action="">
                <input name='name' type="text"  placeholder='name'/>
                <input name='email' type="text" placeholder='email' />
                <textarea name="message" id="textarea" placeholder='message me'>
                </textarea>
                <button name='submit' value='submit' id='btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact