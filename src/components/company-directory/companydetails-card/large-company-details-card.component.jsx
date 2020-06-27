import React from "react";
import "../company-directory.styles.scss"

/**
 * Defines a large company card providing granular company level details
 * 
 * @class LargeCompanyDetailsCard
 * @extends {React.Component}
 */
class LargeCompanyDetailsCard extends React.Component {
	/**
	 * Creates an instance of LargeCompanyDetailsCard.
	 * @param {any} props 
	 * 
	 * @memberOf LargeCompanyDetailsCard
	 */
	constructor(props) {
		super(props);
		this.state = {
			// topic this card is associated with
			topic: "",
			// the headline string providing company specific details
			headline: "",
			// card alignment property
			leftJustify: false
		};
	}

	/**
	 * renders a company details card
	 * 
	 * @returns 
	 * 
	 * @memberOf LargeCompanyDetailsCard
	 */
	render() {
		var className = (this.props.leftJustify === true) ? "grid g1" : "grid g4"

		return <div className={className}>
			<div className="upper-headline">{this.props.details.topic}</div>
			<div className="headline">
				{this.props.details.headline}
			</div>
			<div className="content">
			</div>
			<div className="footline">
				<div className="head">{this.props.details.footline}</div>
				<div className="subhead">{this.props.details.tags}</div>
			</div>
		</div>;
	}
}

export default LargeCompanyDetailsCard;