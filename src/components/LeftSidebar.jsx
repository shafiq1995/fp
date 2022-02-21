import '../Styles/LeftSidebar.css';
import {ProgressBar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBullseye, faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
export default function leftSidebar(){
    return(
        <div className='leftSidebar'>
            <div className='profilePhoto'>
                <img src='https://assets.about.me/background/users/s/h/a/shafiqul-islam_1602049106_26.jpg' alt='Md. Shafiqul Islam'/>
            </div>
            <div className='contact'>
                <h2>Contact</h2>
                <p><FontAwesomeIcon icon={faEnvelope} /> shafiqshumon0@gmail.com</p>
                <p><FontAwesomeIcon icon={faPhone} /> +880 1949 126 739</p>
                <p><FontAwesomeIcon icon={faAddressCard} /> Address:<br/>House: 52; Road: 15; Nikunja-2; <br/>Khilkhet; Dhaka-1229</p>
            </div>
            <div className='skills'>
                <h2>Skills</h2>
                <div>
                    <div className='progressStyle'>
                        <p>Reactjs</p>
                        <ProgressBar animated variant="success" now={95} />
                    </div>

                    <div className='progressStyle'>
                        <p>Django</p>
                        <ProgressBar animated variant="success" now={70} />
                    </div>

                    <div className='progressStyle'>
                        <p>Javascript</p>
                        <ProgressBar animated variant="success" now={80} />
                    </div>

                    <div className='progressStyle'>
                        <p>Html5</p>
                        <ProgressBar animated variant="success" now={90} />
                    </div>

                    <div className='progressStyle'>
                        <p>CSS</p>
                        <ProgressBar animated variant="success" now={80} />
                    </div>
                </div>
            </div>
            <div className='language'>
                <br/>
                <h2>Language</h2>
                <div className='bangla'>
                    <p>Bangla</p>
                    <span><FontAwesomeIcon icon={faBullseye}/></span>
                    <span><FontAwesomeIcon icon={faBullseye}/></span>
                    <span><FontAwesomeIcon icon={faBullseye}/></span>
                    <span><FontAwesomeIcon icon={faBullseye}/></span>
                    <span><FontAwesomeIcon icon={faBullseye}/></span>
                </div>
                <div className='english'>
                    <p>English</p>
                    <span><FontAwesomeIcon icon={faBullseye}/></span>
                    <span><FontAwesomeIcon icon={faBullseye}/></span>
                    <span><FontAwesomeIcon icon={faBullseye}/></span>
                    <span><FontAwesomeIcon icon={faBullseye}/></span>
                    <span className='enfive'><FontAwesomeIcon icon={faBullseye}/></span>
                </div>
            </div>  
        </div>
    );
}