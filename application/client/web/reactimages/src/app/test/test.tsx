import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./test.scss";
import  {service}   from './test.service';

class Test extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    addentity : {
    name: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ addentity: { ...this.state.addentity, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.addentity.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">test</h2>
        
    </>
    );
    };
    };

    export default Test;