
import logo from './../logo.svg';
import  './Navbar.css';
export default function Navbar()
{
   return (

        <div className="navbar">
        	<div className="left-nav">   <img src={logo} className="App-logo" alt="logo" /> </div>
        	<div className="right-nav">
        		<ul>
        			<li><a href="#">Home</a></li>
        			<li><a href="#">Blog</a></li>
        			<li><a href="#">About Us</a></li>
        			<li><a href="#">Contact Us</a></li>
        		</ul>
        		<button className="btn-login btn">Login</button>
        	</div>
        </div>

   	);
}
