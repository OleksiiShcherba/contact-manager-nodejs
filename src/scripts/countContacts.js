import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    const contacts = JSON.parse(await fs.readFile(PATH_DB));

    return contacts.length;
};

console.log(await countContacts());
