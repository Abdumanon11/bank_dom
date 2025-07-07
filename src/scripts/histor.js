const transactions = [
  {
    id: "1232312",
    wallet: "VISA",
    category: "Автомобиль",
    amount: "414,000,000",
    timeAgo: "4 дня назад",
  },
  {
    id: "1232312",
    wallet: "VISA",
    category: "Автомобиль",
    amount: "414,000,000",
    timeAgo: "4 дня назад",
  },
  {
    id: "1232312",
    wallet: "VISA",
    category: "Автомобиль",
    amount: "414,000,000",
    timeAgo: "4 дня назад",
  },
  {
    id: "1232312",
    wallet: "VISA",
    category: "Автомобиль",
    amount: "414,000,000",
    timeAgo: "4 дня назад",
  },
  {
    id: "1232312",
    wallet: "VISA",
    category: "Автомобиль",
    amount: "414,000,000",
    timeAgo: "4 дня назад",
  },
  {
    id: "1232312",
    wallet: "VISA",
    category: "Автомобиль",
    amount: "414,000,000",
    timeAgo: "4 дня назад",
  },
  {
    id: "1232312",
    wallet: "VISA",
    category: "Автомобиль",
    amount: "414,000,000",
    timeAgo: "4 дня назад",
  },
]




const transactionsbox = document.querySelector(".box_tra")

function transacti(transac) {
  transac.forEach((trans) => {
    const box = document.createElement("div")
    box.classList.add(`tran_box1`)

    const p1 = document.createElement("p")
    p1.classList.add(`p1`)
    p1.textContent = trans.id

    const p2 = document.createElement("p")
    p2.classList.add(`p2`)
    p2.textContent = trans.wallet

    const p3 = document.createElement("p")
    p3.classList.add(`p3`)
    p3.textContent = trans.category

    const p4 = document.createElement("p")
    p4.classList.add(`p4`)
    p4.textContent = trans.amount

    const p5 = document.createElement("p")
    p5.classList.add(`p5`)
    p5.textContent = trans.timeAgo

    const poloska = document.createElement("div")
    poloska.classList.add("poloska")

    box.append(p1, p2, p3, p4, p5)
    transactionsbox.append(box, poloska)
  })
}

transacti(transactions)

const button = document.getElementById('manyy_button');

if (button) {
    button.addEventListener('click', () => {
        window.location.href = '/dobtr';
    });
}
