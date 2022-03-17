import './footer.css';

const Footer = () => {
    return(
        <div>
            <footer className="footer">

                <ul className="footer-address footer-ul">
                    <li className="footer-item footer-item-header">
                        <i className="fa-solid fa-location-pin footer-location-icn"></i> We are here:
                    </li>
                    <li className="footer-item">
                        TI Gear Shop
                    </li>
                    <li className="footer-item">
                        Street Name, City
                    </li>
                    <li className="footer-item">
                        Pincode
                    </li>
                </ul>

                <ul className="footer-about footer-ul">
                    <li className="footer-item footer-item-header">
                        About Us
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-links">About</a>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-links">Payments</a>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-links">Shipping and Handling</a>
                    </li>
                </ul>

                <ul className="footer-ul">
                    <li className="footer-item footer-item-header">
                        Find us on:
                    </li>
                    <li className="footer-item">
                        <a className="footer-links" href="#" target="_blank"><i
                                className="fab fa-github fa-lg social-icn"></i>Github</a>
                    </li>
                    <li className="footer-item">
                        <a className="footer-links" href="#" target="_blank"><i
                                className="fab fa-twitter fa-lg social-icn"></i>Twitter</a>
                    </li>
                    <li className="footer-item">
                        <a className="footer-links" href="#" target="_blank"><i
                                className="fab fa-linkedin fa-lg social-icn"></i>LinkedIn</a>
                    </li>
                </ul>

                <ul className="footer-socials-list">
                    <li className="footer-item footer-item-header">
                        <i className="fa-solid fa-code"></i> Tanveer Hazarika
                    </li>
                    <div>
                        <li className="footer-item">
                            <a className="footer-links" href="https://www.github.com/tanveertkd" target="_blank"><i
                                    className="fab fa-github fa-lg social-icn"></i></a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-links" href="https://www.linkedin.com/in/tanveer-hazarika/" target="_blank"><i
                                    className="fab fa-linkedin fa-lg social-icn"></i></a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-links" href="https://twitter.com/HazarikaTanveer" target="_blank"><i
                                    className="fab fa-twitter fa-lg social-icn"></i></a>
                        </li>

                        <li className="footer-item">
                            <a className="footer-links" href="https://tanveerswebsite.netlify.app/" target="_blank"><i
                                    className="fas fa-globe fa-lg social-icn"></i></a>
                        </li>
                    </div>
                </ul>

                </footer>
        </div>
    );
}

export {Footer}