import React from "react";
import "../company-directory.styles.scss"

function DirectoryFooter() {
	return <div className="footer-menu">
		<div className="menu today active">Currators</div>
		<div className="menu game">Trending Companies</div>
		<div className="menu apps">New Creators</div>
		<div className="menu updates">Daily Highlights</div>
		<div className="menu search">Company Stories</div>
	</div>;
}

export default DirectoryFooter;