import React, { Component } from 'react';

export default class Technology extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
    }
    render() {
        const {image='', title=''} = this.props.data;
        return (
            <div className="techLogos px-3">
                <div className="icons mb-2">
                    <img src={image} alt="tech logo" />
                </div>
                <h5 className="fs-12 fw-medium text-white mb-0">{title}</h5>
            </div>
        )
    }
}
