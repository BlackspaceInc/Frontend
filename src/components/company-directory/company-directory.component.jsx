import React from "react";
import LargeCompanyDetailsCard from "./companydetails-card/large-company-details-card.component";
import SmallCompanyDetailsCard from "./companydetails-card/small-company-details-card.component";
import SmallCompanyAdCard from "./companyads-card/small-company-ads-card.component";
import DirectoryFooter from "./directory-footer/directory-footer.component";
import "./company-directory.styles.scss"

class CompanyDirectoryComponent extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <div className="content-wrapper">
                        <div className="date-indicators">
                            <div className="date">
                                Saturday, 25 June
                            </div>
                            <div className="day">
                                Trending Companies
                            </div>
                        </div>

                        <div className="grid-container">
                            <div className="gc-1">
                                <LargeCompanyDetailsCard details={
                                    {
                                        topic: "From the editors",
                                        headline: "Welcome to BlackSpace, The Community Driven" +
                                            " Ecommerce Platform Of The Future"
                                    }
                                } leftJustify={true}/>
                                <SmallCompanyDetailsCard details={
                                    {
                                        topic: "New Services",
                                        headline: "Highlighting Seattle Kitchen",
                                        footline: "Bringing authentic african food to seattle",
                                        tags: "Inside the extraordinary world of african" +
                                            " culinary arts"
                                    }
                                } leftJustify={false}/>
                            </div>

                            <div className="gc-2">
                                <SmallCompanyAdCard details={
                                    {
                                        topic: "BlackSpace Ads",
                                        headline: "Afrowave",
                                        footline: "Bringing entertainment to you",
                                        tags: "entertainment, events, fashion,photography"
                                    }
                                } leftJustify={true}/>
                                <LargeCompanyDetailsCard details={
                                    {
                                        topic: "Black Photography",
                                        headline: " Highlighting Dolapo"
                                    }
                                } leftJustify={false}/>
                            </div>
                        </div>
                    </div>
                    <div className="content-wrapper">
                        <div className="date-indicators">
                            <div className="date">
                                26th June
                            </div>
                            <div className="day">
                                New Creators
                            </div>
                        </div>

                        <div className="grid-container">
                            <div className="gc-1">
                                <LargeCompanyDetailsCard details={
                                    {
                                        topic: "Deep Dive",
                                        headline: "Young In Seattle",
                                        footline: "tranquility & youth",
                                        tags: "young, newcomer, adventure, entertainment, blog"
                                    }
                                } leftJustify={true}/>
                                <SmallCompanyAdCard details={
                                    {
                                        topic: "Currator",
                                        headline: "Seattle Voice",
                                        footline: "Vocalizing for the youth",
                                        tags: "daily voice, advocation, education, aid, opportunity"
                                    }
                                } leftJustify={false}/>
                            </div>
                            <div className="gc-2">
                                <SmallCompanyAdCard details={
                                    {
                                        topic: "Highlights",
                                        headline: "DJ Blast",
                                        tags: "afrobeats, hip hop, soca, reggae"
                                    }
                                } leftJustify={true}/>
                                <LargeCompanyDetailsCard details={
                                    {
                                        topic: "The daily list",
                                        headline: "Relax. Breathe. Zen out Anywhere.",
                                    }
                                } leftJustify={false}/>
                            </div>
                        </div>
                    </div>
                    <div className="content-wrapper">
                        <div className="date-indicators">
                            <div className="date">
                                26th June
                            </div>
                            <div className="day">
                                Daily Highlights
                            </div>
                        </div>

                        <div className="grid-container">
                            <div className="gc-1">
                                <LargeCompanyDetailsCard details={
                                    {
                                        topic: "Venue Higlights",
                                        headline: "Places To Visit",
                                        footline: "Stage Nightclub",
                                        tags: "young, newcomer, adventure, entertainment, blog"
                                    }
                                } leftJustify={true}/>
                                <SmallCompanyDetailsCard details={
                                    {
                                        topic: "Event Highlights",
                                        headline: "First Wednesday",
                                        content: "Highliging AJI",
                                        footline: "afrobeats, music, live"
                                    }
                                } leftJustify={false}/>
                            </div>
                            <div className="gc-2">
                                <SmallCompanyAdCard details={
                                    {
                                        topic: "Highlights",
                                        headline: "DJ WeekND",
                                        tags: "afrobeats, hip hop, soca, reggae"
                                    }
                                } leftJustify={true}/>
                                <LargeCompanyDetailsCard details={
                                    {
                                        topic: "The daily tip",
                                        headline: "Networking is key",
                                    }
                                } leftJustify={false}/>
                            </div>
                        </div>
                    </div>

                    <div className="content-wrapper">
                        <div className="date-indicators">
                            <div className="date">
                                26th June
                            </div>
                            <div className="day">
                                Company Stories
                            </div>
                        </div>

                        <div className="grid-container">
                            <div className="gc-1">
                                <LargeCompanyDetailsCard details={
                                    {
                                        topic: "Story Of The Week",
                                        headline: "Young In Seattle",
                                        footline: "What We Wish We Knew When we Started",
                                    }
                                } leftJustify={true}/>
                                <SmallCompanyAdCard details={
                                    {
                                        topic: "Stories For You",
                                        headline: "Markets",
                                        footline: "Detailing our experiences",
                                    }
                                } leftJustify={false}/>
                            </div>
                            <div className="gc-2">
                                <SmallCompanyDetailsCard details={
                                    {
                                        topic: "Noko",
                                        headline: "Our First Months In Business",
                                    }
                                } leftJustify={true}/>
                                <LargeCompanyDetailsCard details={
                                    {
                                        topic: "How To Start A Company",
                                        headline: "The Guide For You ",
                                        footline: "How We Did It",
                                    }
                                } leftJustify={false}/>
                            </div>
                        </div>
                    </div>

                </div>
                <DirectoryFooter/>
            </div>)
    }
}

export default CompanyDirectoryComponent;