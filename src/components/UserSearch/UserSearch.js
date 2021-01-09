import React,{ useState, useEffect } from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';

import Axios from 'axios';
import './UserSearch.css';


const UserSearch = (props) =>{

    const [userName, setUserName]= useState();
    const { onSubmit } = props;
   
   useEffect(() => {
        handleSearch();
    }, []);
    
    const handleSearch = async () => {
        onSubmit(userName);
        // try {
        //     const resp = await Axios.get(`https://api.github.com/search/users?q=${userName}`);
        //     onSubmit(resp.data.items);
            
        // } catch (error) {
            
        //     onSubmit("");
        // }
        // // console.log(resp.data);
    }


    return(
        <div className="py-6 my-6 px-4 px-md-6 mx-md-6 boxMargin" onSubmit={handleSearch}>
            <Row>
                <Col xs={6} >
                    <input
                        type="text" 
                        className="form-control"
                        placeholder="Search GitHub"  
                        value = {userName}
                        onChange = {(e) => setUserName(e.target.value)}
                        />             
                </Col>
                <Col xs={1}>
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={handleSearch}
                        >
                            Search
                    </Button>
                </Col>
            </Row>
            
        </div>
    );
}

export default UserSearch;