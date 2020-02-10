import React from 'react';
import {Link } from "react-router-dom";
import './Header.css';

function Header () {
return(<>
<div className = "container">
	<div className = "heading">
		<h1>VR Decors</h1>	
	</div>

	<div className="topnav test">
		<ul >
				<Link to="/"><div className = "a">Home</div></Link>
				<Link to="/gallery"><div className = "a">Gallery</div></Link>
				<Link to="/contacts"><div className = "a">Contacts</div></Link>
				<Link to="/login"><div className = "a">Login</div></Link>
			
		</ul>
	</div>
</div>


</>);
}

export default Header;

  