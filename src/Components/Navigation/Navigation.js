import React, { Component } from 'react';
import Config from '../../Config.json';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        //console.log(props.id);
    }
    state = {
        loading: true,
        menuData: null,
    };
    
    async componentDidMount() {        
        const url = Config.API_BASE + "menu/" + this.props.id;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            menuData: data, 
            loading: false,
        });
        //console.log(this.state.menuData);
    }
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.menuData) {
            return <div>Didn't get data from API</div>;
        }
        const {title} = this.props;
        const {menuData} = this.state;
        return (
            <>  
                {
                    (title) ? <h4 className={['mos-menu-title', this.props.titleCls].join(' ')}>{title}</h4> : ''
                }        
                {
                    (menuData.length)?
                        <ul className={[this.props.listCls, 'mos-menu-list'].join(' ')}>
                        {menuData.map((item, index) => (
                            <li className={[item.class.join(' '), 'mos-menu-item'].join(' ')} key={item.term_id + Math.floor(Math.random() * 100)}>
                                <a href={item.url} className={[this.props.itemCls, 'mos-menu-link'].join(' ')}>{item.title}</a>
                            </li>
                        ))}
                        </ul>                   
                    :''
                }
                
            </>
                       
        )
    }
}
