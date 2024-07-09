import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs';


const generateContacts = async (number) => {
    const contacts = JSON.parse(fs.readFileSync(PATH_DB));
    for(let i = 0; i < number; i++){
        contacts.push(createFakeContact());
    }

    fs.writeFileSync(PATH_DB, JSON.stringify(contacts));
};

generateContacts(5);
