import React, {Component} from "react";
import "./footer.scss";

class Footer extends Component{
    render(){
        return(
            <div className="footer-links">
                <a href="https://www.instagram.com/cazalye" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-instagram" aria-hidden="true" />
                </a>
                <a href="https://www.pinterest.com.au/cazalye/" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-pinterest-p" aria-hidden="true" />
                </a>
                <a href="https://github.com/cazalye" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github" aria-hidden="true" />
                </a>
                <a href="mailto:e.cazaly7@gmail.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-envelope" aria-hidden="true" />
                </a>
            </div>
        );
    }
}

export default Footer;