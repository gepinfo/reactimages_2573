import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./templatesadd.scss";
import  {service}   from './templatesadd.service';

class Templatesadd extends React.Component<any, any> {
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
        <h2 className="screen-align">templatesadd</h2>
        <div id="template-ie8i" className="gjs-row">
    <div id="template-iv2o" className="gjs-cell">
        <div id="template-igolf" className="gjs-row">
            <div id="template-i7mju" className="gjs-cell">
                <div id="template-irhkf">Sign In With Google</div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Templatesadd;