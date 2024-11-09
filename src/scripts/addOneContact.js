import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";



export const addOneContact = async () => {
    try {
       const contactsArr = await readContacts();
       const newContact = createFakeContact();
       
        console.log('Запис контакту...');
        const updatedContacts = [...contactsArr, newContact];
        await writeContacts(updatedContacts);
        console.log('Запис контакту завершено!');
   } catch (error) {
    console.log(error);
   } 

};

addOneContact();
