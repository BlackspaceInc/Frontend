import React from "react";
import "../company-directory.styles.scss"
import gql from 'graphql-tag';
import {getThirdPartyCompanies} from "../../../actions/company";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {GET_COMPANIES} from "../../../queries/company";
import { useQuery } from '@apollo/react-hooks';

/**
 * Defines a company card for advertising specific needs
 *
 * @class SmallCompanyAdCard
 * @extends {React.Component}
 */
function SmallCompanyAdCard(props) {

	var {loading, error, data} = useQuery(GET_COMPANIES())
	console.log(error)

	var className = (props.leftJustify == true) ? "grid g2" : "grid g3"

	return <div className="grid g3">
		<div className="upper-headline">{props.topic}</div>
		<div className="content atd">{props.details.headline}</div>
		<div className="footline">
			<div className="head">{props.details.footline}</div>
			<div className="subhead">{props.details.tags}</div>
		</div>
	</div>;
}

SmallCompanyAdCard.propTypes = {
	getThirdPartyCompanies: PropTypes.func.isRequired,
	leftJustify: PropTypes.bool,
	topic: PropTypes.string,
	headline: PropTypes.string,
	footline: PropTypes.string,
	tags: PropTypes.string,
	thirdPartyCompanyName: PropTypes.string,
	thirdPartyCompanyAddress: PropTypes.string,
	thirdPartyCompanyWebsite: PropTypes.string,
	thirdPartyCompanyNumber: PropTypes.string,
	loading: PropTypes.bool,
	companies: PropTypes.object
};

const mapStateToProps = (state) => ({
	loading: state.thirdPartyCompanies.loading,
	companies: state.thirdPartyCompanies.thirdPartyCompanies
});

export default connect(mapStateToProps, { getThirdPartyCompanies })(SmallCompanyAdCard);
