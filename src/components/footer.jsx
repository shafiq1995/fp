import { useState } from "react";
import '../Styles/Footer.css';

export default function Footer(){
    const [brandName] = useState("Shafiq");
    return(
        <div className='footer'>
            <p>All rights reserverd @{brandName}</p>
        </div>
    );
}