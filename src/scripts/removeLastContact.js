import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    const contacts = JSON.parse(await fs.readFile(PATH_DB));
    if(contacts.length > 0){
        contacts.pop();
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
};

removeLastContact();
