'use strict';

function fn() {
  const user1 = { name: 'Anna' };
  let user2 = { name: 'Ivan' };
  user1.name = 'Olena';
  user2.name = 'Petro';
  user2 = { name: 'Oleh' };
  return { user1, user2 };
}
