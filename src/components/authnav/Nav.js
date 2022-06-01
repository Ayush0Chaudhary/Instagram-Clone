import './App.css';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className="App">
      <nav >
    <h2>CaseBook</h2>
  <div className="right">
    <ul>
      <Link to= "/login">
      <li id="logInButton">LogIn</li>
      </Link>

      <Link to="/signup">
      <li id="SignUpButton">SignUp</li>  
      </Link>
    </ul>
  </div>
  </nav>
    </div>
  );
}

//arr[i]=
//{text: string,
//linkto: null(text etc) or path
//
export default Nav;

