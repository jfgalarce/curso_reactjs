import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactData from '../pure/contact';

const ContactListComponent = () => {    
    const defaultContact = new Contact('Juan','galarce', 'jfgalarce@gmail.com', true);

    return (
        <div>
            <div>
                <h1>Your task:</h1>
            </div>
            <ContactData contact={defaultContact} ></ContactData>
        </div>
    );
};

export default ContactListComponent;
