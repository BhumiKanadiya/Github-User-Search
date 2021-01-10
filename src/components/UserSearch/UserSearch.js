import React,{ useState } from 'react';
import {Row, Col, Button} from 'react-bootstrap';

import './UserSearch.css';


const UserSearch = (props) =>{

    const [userName, setUserName]= useState();
    const { onSubmit } = props;
   
    const handleSearch = async () => {
        onSubmit(userName);
    }


    return(
        <div className="py-6 my-6 px-4 px-md-6 mx-md-6 boxMargin">
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