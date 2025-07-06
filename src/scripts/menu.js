const mainLink = document.createElement('a');
mainLink.className = 'menuu';
mainLink.href = '/';
mainLink.textContent = 'Главная';

const walletsLink = document.createElement('a');
walletsLink.className = 'menuu';
walletsLink.href = '/many';
walletsLink.textContent = 'Мои кошельки';

const transactionsLink = document.createElement('a');
transactionsLink.className = 'menuu';
transactionsLink.href = '/histor';
transactionsLink.textContent = 'Мои транзакц';

const boxMenu = document.createElement('div');
boxMenu.className = 'box_menu';

const emailLink = document.createElement('a');
emailLink.className = 'menuu_a';
emailLink.href = '';
emailLink.textContent = 'alexadams@google.com';

const imgsDiv = document.createElement('div');
imgsDiv.className = 'imgs';

const logoutImg = document.createElement('img');
logoutImg.src = '/public/log-out (1) 1.svg';
logoutImg.id = 'img';
imgsDiv.appendChild(logoutImg);
boxMenu.appendChild(emailLink);
boxMenu.appendChild(imgsDiv);
const menuContainer = document.getElementById('menu');
menuContainer.appendChild(mainLink);
menuContainer.appendChild(walletsLink);
menuContainer.appendChild(transactionsLink);
menuContainer.appendChild(boxMenu);

const img = document.getElementById('img');

if (img) {
    img.addEventListener('click', () => {
        window.location.href = '/signin';
    });
}