import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './UserCard.css';

const UserCard = (props) => {
    const {profile, index} = props;
    
    if (!profile) return null;
    
    return(
        <div>
            <Row className="border-bottom py-2" key={index}>
                <Col xs={3}>
                    <img className="ProfilePicture" src={profile.avatar_url} alt="Profile Picture" />
                </Col>
                <Col xs={9}>
                    <Row>
                        <a href={profile.html_url} target="_blank" >{profile.login}</a>
                    </Row>
                    <Row>
                        score: {profile.score}
                    </Row>
                </Col>
            </Row>
           
        </div>
    )

}
export default UserCard;