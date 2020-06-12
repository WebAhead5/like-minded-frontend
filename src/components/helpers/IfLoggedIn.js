import {isLoggedIn} from "../../tools/data";


import React, {Component} from 'react';

class IfLoggedIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
        this.canceled = false
    }

    componentDidMount() {
        isLoggedIn().then(res => {
            let {cb,elseCb, not} = this.props;


            if (not)
                res = !res;

            if (res)
                cb && cb()

            else
                elseCb && elseCb()

            if(this.canceled)
                return


            this.setState({loaded:res})

        })

    }

    componentWillUnmount() {
       this.canceled = true;
    }

    render() {
        let {loaded } = this.state
        let {children} = this.props
        return (<div>{loaded?children:null}</div>);
    }
}

export default IfLoggedIn;

