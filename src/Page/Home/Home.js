import React, { Component } from "react";
import BannerComponents from "../../Components/Banner/BannerComponents";
import BlogUpdateComponent from "../../Components/BlogUpdate/BlogUpdateComponent";
import OurFocusIndustriesComponent from "../../Components/OurFocusIndustries/OurFocusIndustriesComponent";
import OurServicesComponent from "../../Components/OurServices/OurServicesComponent";
import PortfolioComponent from "../../Components/Portfolio/PortfolioComponent";
import ReadyToMoveComponent from "../../Components/ReadyToMove/ReadyToMoveComponent";
import TechnologiesComponent from "../../Components/Technologies/TechnologiesComponent";
import TestimonialsComponent from "../../Components/Testimonials/TestimonialsComponent";
import WhyChooseUsComponent from "../../Components/WhyChooseUs/WhyChooseUsComponent";
import Config from "../../Config.json";
import './Home.scss';


export default class Home extends Component {  
    state = {
        loading: true,
        pageData: null,
    };
    
    async componentDidMount() {
        //const url = "https://api.randomuser.me/";
        const url = "http://api.getweb.localhost/wp-json/mos-getweb-api/v1/data-single/" + Config.HOME_ID;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            pageData: data, 
            loading: false,
        });
        //console.log(data);
    }
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.pageData) {
            return <div>didn't get the page data</div>;
        }
        return (
            <>            
                <BannerComponents />
                <OurServicesComponent data={this.state.pageData.meta._mosacademy_page_group_details_group[0]}/>
                <WhyChooseUsComponent data={this.state.pageData.meta._mosacademy_page_group_details_group[1]} />
                <OurFocusIndustriesComponent data={this.state.pageData.meta._mosacademy_page_group_details_group[2]} />
                <TechnologiesComponent />
                <PortfolioComponent />
                <TestimonialsComponent />
                <BlogUpdateComponent />
                <ReadyToMoveComponent />
            </>
        );
    }
};