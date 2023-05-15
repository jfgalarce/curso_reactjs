import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactData = ({contact}) => {
    return (
        <div>
            <h2>
                Nombre : {contact.nombre}
            </h2>
            <h3>
                descripción : {contact.apellido}
            </h3>
            <h4>
                Level : {contact.email}
            </h4>
            <h5>
                this task is: {contact.conectado ? 'Contacto En Línea': 'Contacto No Disponible' }
            </h5>
        </div>
    );
};


ContactData.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactData;
