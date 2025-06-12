import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <section  id='Contact'>
    <div className='Contact-container'  >
        <div>
        <p className='para'>0.3 &nbsp; Contact</p>
        <h1 className='contact-head'>Get In Touch</h1>
        
      </div>
       <div>
        <p className='contact-para'>Interested in teaming up? Let’s talk! I’d love to collaborate or lend a hand with your project. Whether you have a question, an idea, or just want to connect, feel free to reach out. I’m just a message away!</p>
       </div>

       <div className="contact-bt">
       <a href="mailto:aswanthvthalora140905@gmail.com">
        <button>Say hello</button>
    </a>
       </div>
    </div>
    </section>
  )
}

export default Contact