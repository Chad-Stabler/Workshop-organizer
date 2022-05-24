export function renderWorkshop(workshop) {
    const workshopDiv = document.createElement('div');
    workshopDiv.classList.add('workshop');
    
    const name = document.createElement('h3');

    name.textContent = workshop.name;

    const participantList = document.createElement('ul');
    
}