import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
    const contacts = JSON.parse(await fs.readFile(PATH_DB));
    contacts.push(createFakeContact());

    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
};

addOneContact();