import React from "react";
import "../company-directory.styles.scss"

/**
 * Defines a company card for advertising specific needs
 * 
 * @class SmallCompanyAdCard
 * @extends {React.Component}
 */
class SmallCompanyAdCard extends React.Component {
	/**
	 * Creates an instance of SmallCompanyAdCard.
	 * @param {any} props 
	 * 
	 * @memberOf SmallCompanyAdCard
	 */
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

	/**
	 * renders a company add card with all relevant fields
	 * 
	 * @returns 
	 * 
	 * @memberOf SmallCompanyAdCard
	 */
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