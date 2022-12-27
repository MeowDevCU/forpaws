/* Made by Aashna 27/12/2022 */
import search from './assets/Search.svg';
import home from './assets/Home.svg';
import friends from './assets/Friends.svg';
import messages from './assets/Messages.svg';

import './nav.css';

const Nav = () => {
    return (
        <form action=''>
          <div></div>
        
          
          <div>
            <input type="radio" id="search" name="nav" value="search" />
            <img src={search} className="search-logo" alt="search logo"/>
          </div>
          
          <div>
            <input type="radio" id="home" name="nav" value="home" />
            <img src={home} className="home-logo" alt="home logo"/>
          </div>
          
          <div>
            <input type="radio" id="friends" name="nav" value="friends" />
            <img src={friends} className="friends-logo" alt="friends logo"/>
          </div>

          <div>
            <input type="radio" id="messages" name="nav" value="messages" />
            <img src={messages} className="messages-logo" alt="messages logo"/>
          </div>

        </form>
    );
};

export default Nav;