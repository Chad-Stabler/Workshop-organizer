import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';

const workshopsEl = document.querySelector('.workshop-container');

async function displayWorkshops() {
    workshopsEl.textContent = '';
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const shopDiv = document.createElement('div');
        shopDiv.classList.add('workshop');
        
        const name = document.createElement('h3');
    
        name.textContent = workshop.name;
    
        const participantList = document.createElement('ul');
    
        for (let participant of workshop.participants) {
            const li = document.createElement('li');
            li.classList.add('participant');
            li.textContent = `${participant.name}: ${participant.contact_info}`;
            participantList.append(li);
        }
        shopDiv.append(name, participantList);
        workshopsEl.append(shopDiv);
        //display each workshop with render function
        //& append it onto the main section
    }
}

checkAuth();

displayWorkshops();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});
