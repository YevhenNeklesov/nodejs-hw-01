import { readContacts } from "./utils/readContacts.js";

async function name() {
    const contact = await readContacts();

    console.log(contact);
}

name().catch(error => console.error(error));