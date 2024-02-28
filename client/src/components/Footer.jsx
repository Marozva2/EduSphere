import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="colf">
                    <img src="../../images/logo.png" className="logof"></img>
                    <p>EduSphere University is not just any ordinary Institution.We are distinctive in our performance 
                and take charge of our student's learning. For the service of God and humanity</p>
                </div>
                <div className="colf">
                    <h3>Admissions</h3>
                    <p>Get enquiries</p>
                    <p>Call 020-023 799100</p>
                    <p className="email-id">admissions@edusphere.ac.ke</p>
                    <p><a href="../../form/application-form.pdf" download>Download Application Form</a></p>
                </div>
                <div className="colf">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="about">About Us</a></li>
                        <li><a href="academics">Academics</a></li>
                        <li><a href="admissions">Admissions</a></li>
                    </ul>
                </div>

                <div className="colf">
                    <p>Subscribe to our Newsletter</p>
                    <form>
                        <i className="fa-regular fa-envelope" />
                        <input type="email" placeholder="Enter your email " required></input>
                        <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
                    </form>
                    <div className="social-icons">
                        <i className="fab fa-whatsapp"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
                
            </div>
            <hr></hr>
            <p className="copyright">&copy; {new Date().getFullYear()} EduSphere University. All Rights Reserved.</p>
        </footer>
    );
}


export default Footer;
