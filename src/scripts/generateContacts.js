import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";


const generateContacts = async (number) => {
    try {
        const contactsArr = await readContacts();
        const newContactsArr = [];

        for (let i = 0; i < number; i++) {
            newContactsArr.push(createFakeContact());
        }
        console.log('Запис контактів...');
        const updatedContacts = [...contactsArr, ...newContactsArr];
        await writeContacts(updatedContacts);
        console.log('Запис контактів завершено!');
        

    } catch (err) {
        console.error(err);
    }
};

generateContacts(3);
