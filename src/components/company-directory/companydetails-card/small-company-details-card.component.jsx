import React from "react";
import "../company-directory.styles.scss"

/**
 * Defines a company details card (small) that provides granular company level details
 * 
 * @class SmallCompanyDetailsCard
 * @extends {React.Component}
 */
class SmallCompanyDetailsCard extends React.Component {
	/**
	 * Creates an instance of SmallCompanyDetailsCard.
	 * @param {any} props 
	 * 
	 * @memberOf SmallCompanyDetailsCard
	 */
	constructor(props) {
		super(props);
		this.state = {
			// topic this card is associated with
			topic: "",
			// the headline string providing company specific details
			headline: "",
			// company specific content
			content: "",
			// footline definition
			footline: "",
			// content locale
			leftJustify: true
		};
	}

	/**
	 * renders the small company details card and all relevant fields
	 * 
	 * @returns 
	 * 
	 * @memberOf SmallCompanyDetailsCard
	 */
	render() {
		var className = (this.props.leftJustify === true) ? "grid g2" : "grid g3"

		return <div className={className}>
			<div className="upper-headline">{this.props.details.topic}</div>
			<div className="headline">
				{this.props.details.headline}
			</div>
			<div className="content">
				{this.props.details.content}
			</div>
			<div className="footline">
				{this.props.details.footline}
			</div>
		</div>;
	}
}

export default SmallCompanyDetailsCard;