import React, { Component } from 'react';
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import Config from '../../Config.json';
//const Navbar = () => {
export default class Navbar extends Component {
    state = {
        loading: true,
        menuData: null,
    };
    
    async componentDidMount() {        
        const url = Config.API_BASE + "menu/16";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            menuData: data, 
            loading: false,
        });
        //console.log(Object.values(this.state.menuData));
        //console.log(this.state.menuData);
        //console.log(menuItems);
        
    }
    
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.menuData) {
            return <div>Didn't get data from API</div>;
        }
        const {menuData} = this.state;
        //const data = Array.isArray(menuData)?menuData:Object.values(menuData);
        const data = Array.isArray(menuItems)?menuItems:Object.values(menuItems);
//        console.log(menuItems);
        return ( 
            <nav>
                <ul className="menus" > 
                    {
                        data.map((menu, index) => {
                            const depthLevel=0;
                            return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                        })
                    } 
                </ul> 
            </nav>
        );
    }
};