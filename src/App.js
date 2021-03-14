import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {

  const [contacts, setContacts] = useState([]);

  useEffect( () => {

    fetch("https://randomuser.me/api/?results=4")
      .then( function(response) {
        return response.json();
      } )
      .then( (data) => {
        console.log(data);
        setContacts(data.results);
      } )

  }, []);

  

  return (

    <>
      { contacts.map( contact => (
        <ContactCard 
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          key={contact.email}
          age={contact.dob.age}
        />
      ) ) }
    </>

  );

}

const ContactCard = (props) => {

  const [showAge, setShowAge] = useState(false);

  return (

    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        { showAge === true ? <p>Age: {props.age}</p> : null }
        <button onClick={ () => setShowAge(!showAge) }>
          Toggle
        </button>
      </div>
    </div>

    // { showAge && <p>Age: 25</p> }

  );

}

export default App;