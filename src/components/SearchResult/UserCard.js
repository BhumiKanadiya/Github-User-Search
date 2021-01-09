import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './UserCard.css';

const UserCard = (props) => {
    const {profile} = props;
    // const profile = {};
    // profile.avatar_url = "https://avatars1.githubusercontent.com/u/41079?v=4";
    // profile.name = "examplecode";
    // profile.Desc = "bdgjsdgksdg sdjgs sdhgkhs isgskdg sgksdgjs"
    if (!profile) return null;
    
    return(
        <div>
            <Row className="border-bottom py-2">
                <Col xs={3}>
                    <img className="ProfilePicture" src={profile.avatar_url} />
                </Col>
                <Col xs={9}>
                    <Row>
                        <a href={profile.html_url} target="_blank" >{profile.login}</a>
                    </Row>
                    <Row>
                        {profile.score}
                    </Row>
                </Col>
            </Row>
           
        </div>
    )

}
export default UserCard;