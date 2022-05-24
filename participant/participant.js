import { logout } from '../fetch-utils.js';

const logOut = document.getElementById('logout-create');
const backBtn = document.getElementById('back');

logOut.addEventListener('click', async () => {
    await logout();
});

backBtn.addEventListener('click', () => {
    location.replace('../workshops');
});