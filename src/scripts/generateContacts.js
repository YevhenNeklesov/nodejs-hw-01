import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { PATH_DB } from '../constants/contacts.js';


const generateContacts = async (number) => {

    const total = [];
    for (let i = 0; i < number; i++) {
        total.push(createFakeContact());
    };
    
    return writeContacts(total);
};

generateContacts(2);
