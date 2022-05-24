import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';

const mainEl = document.querySelector('main');

async function onLoad() {
    mainEl.textContent = '';
    const data = await getWorkshops();

    for (let workshop of data) {
        const shopDiv = renderWorkshop(workshop);
        mainEl.append(shopDiv);
        //display each workshop with render function
        //& append it onto the main section
    }
}

checkAuth();

onLoad();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});
