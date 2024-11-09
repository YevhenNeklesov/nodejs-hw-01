import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const allContacts = await readContacts();
    return `Всього контактів: ${allContacts.length}`;
};

console.log(await countContacts());
