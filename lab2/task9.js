'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Anna', phone: '+380501234567' },
  { name: 'Ivan', phone: '+380671234567' }
];

const findPhoneByName = (name) => {
  for (const user of phonebook) {
    if (user.name === name) return user.phone;
  }
};
