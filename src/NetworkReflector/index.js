import React,{Component} from 'react';

export default class extends Component{
    static defaultProps = {

    }
    constructor(props){
        super(props);
        if(!window||!window.navigator||!window.navigator.navigator){
            throw new Error(`
                请在客户端使用NetWorkReflector组件
            `)
        }
        const {effectiveType,rtt,downlink,saveData} = window.navigator.connection;
        this.state={
            effectiveType,
            rtt,
            downlink,
            saveData
        }
    }
    componentDidMount(){
        //监听事件
        window.navigator.connection.onchange = (...props) => {
            console.log(...props);
        }
    }
    componentWillUnmount(){
        //解除事件监听
        window.navigator.connection.onchange = null;
    }
    render(){
        return <div>todo</div>
    }
}