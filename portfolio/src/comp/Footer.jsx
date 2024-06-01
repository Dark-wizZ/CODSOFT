import github from '../icons/github.svg'
import email from '../icons/email.png'
import linkedin from '../icons/linkedin.svg'

function Footer() {
  return ( <div className="footer">
    <div className="head">
      Get in touch with me
    </div>
    <div className="links">
      <a href="https://www.github.com/dark-WizZ" target='_blank'>
        <img src={github} alt="" />
      </a>
      <a href="mailto:mailwithakram@gmail.com/" target='_blank'>
        <img src={email} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/mohamed-akram-m-n-31b083271" target='_blank'>
        <img src={linkedin} alt="" />
      </a>
    </div>
  </div> );
}

export default Footer;