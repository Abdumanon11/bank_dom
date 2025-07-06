
const wallets = [
  { type: 'Visa', currency: 'RUB' },
  { type: 'Visa', currency: 'RUB' },
  { type: 'Visa', currency: 'RUB' },
  { type: 'Visa', currency: 'RUB' },
  { type: 'Visa', currency: 'RUB' },
  { type: 'Visa', currency: 'RUB' },
  { type: 'Visa', currency: 'RUB' },
];


const visaContainer = document.querySelector('.manyy');

function render(visa) {
  visaContainer.innerHTML = '';

  visa.forEach((vissa, index) => {
    const box = document.createElement('div');
    box.classList.add(`box_many${index + 1}`);

    const title = document.createElement('h3');
    title.textContent = vissa.type;

    const currency = document.createElement('p');
    currency.textContent = vissa.currency;

    box.append(title, currency);
    visaContainer.append(box);
  });
}
render(wallets);


