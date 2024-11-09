import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    const allContacts = await readContacts();

    if (allContacts.length > 0) {
        await writeContacts([]);
        console.log('Всі контакти успішно видалені!');
    } else {
        console.log('Не має контактів для видалення');
    }
};

removeAllContacts();
