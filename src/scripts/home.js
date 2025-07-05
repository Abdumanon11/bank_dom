const wallets = [
  { type: 'Visa', currency: 'RUB' },
  { type: 'Visa', currency: 'RUB' },
  { type: 'Visa', currency: 'RUB' },
  { type: 'Visa', currency: 'RUB' },
];

const transactions = [
  {
    id: '1232312',
    wallet: 'VISA',
    category: 'Автомобиль',
    amount: '414,000,000',
    timeAgo: '4 дня назад'
  },
  {
    id: '1232312',
    wallet: 'VISA',
    category: 'Автомобиль',
    amount: '414,000,000',
    timeAgo: '4 дня назад'
  },
  {
    id: '1232312',
    wallet: 'VISA',
    category: 'Автомобиль',
    amount: '414,000,000',
    timeAgo: '4 дня назад'
  },
  
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


const transactionsbox = document.querySelector('.box_tra');
function transacti(transac) {
  transac.forEach((trans) => {
    const box = document.createElement('div');
    box.classList.add(`tran_box1`)

    const p1 = document.createElement('p');
    p1.classList.add(`p1`)
    p1.textContent = trans.id;

    const p2 = document.createElement('p');
    p2.classList.add(`p2`)
    p2.textContent = trans.wallet;

    const p3 = document.createElement('p');
    p3.classList.add(`p3`)
    p3.textContent = trans.category;

    const p4 = document.createElement('p');
    p4.classList.add(`p4`)
    p4.textContent = trans.amount;

    const p5 = document.createElement('p');
    p5.classList.add(`p5`)
    p5.textContent = trans.timeAgo;
    
    const poloska = document.createElement('div');
    poloska.classList.add('poloska');

    box.append(p1,p2,p3,p4, p5);
    transactionsbox.append(box, poloska)
     
  })
}
transacti(transactions)


const img = document.getElementById('img');

if (img) {
    img.addEventListener('click', () => {
        window.location.href = '/signin';
    });
}











