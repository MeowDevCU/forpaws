/* Made By Neel 04/01/2023 */

import React, { useEffect } from "react";
import "./logout.css";

const Logout = () => {
    const log_user_out =()=>{
        localStorage.clear()
        window.location.reload()
    }

    return (        
    <div className="logout-wrapper">
        <button className="logout-button" onClick={log_user_out}>Logout</button>
    </div>

    );
}
export default Logout;
