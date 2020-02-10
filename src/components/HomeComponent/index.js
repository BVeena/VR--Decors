import React from 'react';
import {Link } from "react-router-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

function HomeComponent() {
	return( <>
	<h2>Hi, Welcome to VR Decors</h2>
	<p><span>VR Decors</span>
 	is a multipurpose festive frienddly page where you can find comfort in Deorations, Mehendi events, Designer dresses, Jewellary, Indian groceries, Indian style cooking classes, Classes for hand crafts,etc......For details click below links.</p>
	
	 <ul>
	 
	 	<Link to="/Decorations"><div>Decorations</div></Link>
	 	<Link to="/Mehendi"><div>Mehendi</div></Link>
	 	<Link to="/Dresses"><div>Dresses</div></Link>
	 	<Link to="/Cources"><div>Cources</div></Link>
 	</ul>
	 <h4>For details feel comfirt to contact VR Decors</h4>
	</>	);

}

export default HomeComponent;


