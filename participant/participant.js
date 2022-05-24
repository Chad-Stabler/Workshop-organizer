import { getWorkshops, logout } from '../fetch-utils.js';
import { renderOption } from '../render-utils.js';

const logOut = document.getElementById('logout-create');
const backBtn = document.getElementById('back');
const participantForm = document.querySelector('form');
const shopOption = document.getElementById('select');

participantForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(participantForm);

    
});

async function renderOptions() {
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const newOption = renderOption(workshop);

        shopOption.append(newOption);
    }
}

renderOptions();

logOut.addEventListener('click', async () => {
    await logout();
});

backBtn.addEventListener('click', () => {
    location.replace('../workshops');
});


