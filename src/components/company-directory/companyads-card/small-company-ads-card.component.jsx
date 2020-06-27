import React from "react";
import "../company-directory.styles.scss"

class SmallCompanyAdCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// the headline string providing company specific details
			topic: "",
			// company specific contetn
			headline: "",
			// compnay specific footline definitions
			footline: "",
			// company specific tags
			tags: "",
			// content alignment
			leftJustify: true,
		};
	}

	render() {
		var className = (this.props.leftJustify == true) ? "grid g2" : "grid g3"
		return <div className="grid g3">
			<div className="upper-headline">{this.props.topic}</div>
			<div className="content atd">{this.props.details.headline}</div>
			<div className="footline">
				<div className="head">{this.props.details.footline}</div>
				<div className="subhead">{this.props.details.tags}</div>
			</div>
		</div>;
	}
}

export default SmallCompanyAdCard;