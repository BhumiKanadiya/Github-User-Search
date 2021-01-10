import React, {useState} from 'react';
import './App.css';
import UserSearch from './components/UserSearch/UserSearch';
import UserDetailList from './components/SearchResult/UserDetailList';
import { Container} from 'react-bootstrap';

const App = () => {
  
  const [userName, setUserName]= useState("");
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>Search users</h2>
      </header>
      <Container>
        <UserSearch onSubmit={setUserName}  />
        { userName !=="" &&
          <UserDetailList userName ={userName} />
        }
      </Container>
    </div>
  );
}

export default App;
