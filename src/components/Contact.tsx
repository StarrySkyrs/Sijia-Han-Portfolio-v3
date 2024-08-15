import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Contact.scss';

// Custom WeixinIcon component using Material UI's SvgIcon with the correct SVG path
function WeixinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
	    <path fill="currentColor" d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66L4 17l2.5-1.5c.89.31 1.87.5 2.91.5A5.2 5.2 0 0 1 9 14c0-3.31 3.13-6 7-6c.19 0 .38 0 .56.03C15.54 5.69 12.78 4 9.5 4m-3 2.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M16 9c-3.31 0-6 2.24-6 5s2.69 5 6 5c.67 0 1.31-.08 1.91-.25L20 20l-.62-1.87C20.95 17.22 22 15.71 22 14c0-2.76-2.69-5-6-5m-2 2.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1" />
    </svg>
  );
}

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Wanna chat? Got a project idea waiting to come to life? Let's collaborate and make it a reality!</p> 
        </div>
        <div>
          <a href="https://github.com/StarrySkyrs" target="_blank" rel="noreferrer">
            <GitHubIcon sx={{ fontSize: 60 }} />
          </a>
          <a href="https://www.linkedin.com/in/sijia-han-6618761b6/" target="_blank" rel="noreferrer">
            <LinkedInIcon sx={{ fontSize: 60 }} />
          </a>
          <a href="mailto:sijia.han@hotmail.com" target="_blank" rel="noreferrer">
            <EmailIcon sx={{ fontSize: 60 }} />
          </a>
          <a href="https://drive.google.com/file/d/1J14Ij4qTMSsFqropXteC8h1Q67lxkANI/view" target="_blank" rel="noreferrer">
            <WeixinIcon />
          </a>
        </div>  
      </div>
    </div>
  );
}

export default Contact;
