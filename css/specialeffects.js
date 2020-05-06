body {
	width: 100%;
	font-family: "OpenSans-Regular", sans-serif;
	font-size: 1em;
	font-weight: normal;
	letter-spacing: 0.05em;
	color: #969696;
	margin: 0;
	padding: 0;
}

* {
   box-sizing: border-box;
}

::-webkit-input-placeholder { 
    color: #d1d1d1 !important; 
}

::-moz-placeholder { 
    color: #d1d1d1 !important;
}

::-moz-selection {
    color: #fff !important;
    background-color: #7019fb !important;
}

::selection {
    color: #fff !important;
    background-color: #7019fb !important;
}

#navbar {
    width: 100%;
	height: 76px;
	background-color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
}

#nav {
	width: 1600px;
	overflow: hidden;
}

#nav ul {
	margin: 0;
	padding: 0;
	overflow: hidden;
	float: left;
}

#nav ul li {
	list-style-type: none;
	margin-left: 8px;
	float: left;
}

#nav a {
	display: block;
	font-family: "OpenSans-Semibold", sans-serif;
	font-weight: normal;
	font-size: 1em;
	color: #969696;
	border: 2px solid #969696;
	border-radius: 8px;
    text-decoration: none;
	padding: 8px 8px;
    margin-top: 18px;
}

#nav a:hover, #nav .active {
	color: #7019fb;
	border-color: #7019fb;
    text-decoration: none;
}

#nav .active {
	color: #fff;
	background-color: #7019fb;
}

#nav .active:hover {
	color: #fff;
}

#skin-url {
    width: 500px;
    height: 42px;
    color: #d1d1d1;
    font-family: "OpenSans-Semibold", sans-serif;
    font-size: 1em;
    border-radius: 8px;
    border: 2px solid #d1d1d1;
    margin-top: 18px;
    padding: 10px;
}

#hizliresim {
    display: none;
}

.skins-wrapper {
    overflow: hidden;
    padding: 40px;
    margin-top: 40px;
}

.skin-box {
    width: 140px;
    height: 140px;
    cursor: pointer;
    float: left;
}

.skin-box img {
    width: 100px;
    height: 100px;
    border: none;
    border-radius: 50%;
    margin: 20px;
    transition: all linear 0.2s;
}

.skin-box:hover img {
    width: 140px;
    height: 140px;
    border: none;
    border-radius: 50%;
    margin: 0;
}
