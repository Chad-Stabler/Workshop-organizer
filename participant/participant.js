import { createParticipant, getWorkshops, logout } from '../fetch-utils.js';
import { renderOption } from '../render-utils.js';

const logOut = document.getElementById('logout-create');
const backBtn = document.getElementById('back');
const participantForm = document.querySelector('form');
const shopOption = document.getElementById('select');


async function renderOptions() {
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const newOption = renderOption(workshop);

        shopOption.append(newOption);
    }
}

participantForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(participantForm);

    await createParticipant({ name: data.get('participant-name'), contact_info: data.get('participant-contact'), workshop_id: data.get('workshop-id') });

    participantForm.reset();

    location.replace('../workshops');
});

renderOptions();

logOut.addEventListener('click', async () => {
    await logout();
});

backBtn.addEventListener('click', () => {
    location.replace('../workshops');
});


