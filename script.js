const beverages = [{
        Name: 'Green Tea',
        Price: 6000,
        Checked: false
    },
    {
        Name: 'Vanilla Latte',
        Price: 7000,
        Checked: false
    },
    {
        Name: 'Dancow Oreo',
        Price: 8000,
        Checked: false
    },
    {
        Name: 'Lemon Tea',
        Price: 9000,
        Checked: false
    },
    {
        Name: 'Dancow Manggo',
        Price: 10000,
        Checked: false
    }
];

// calculate total price
function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < beverages.length; i++)
        if (beverages[i].Checked === true)
            totalPrice += beverages[i].Price;
    document.getElementById("total-price").innerHTML = totalPrice.toString();
}

// create all elements of beverages
function loadCustomCheckbox() {
    const items = document.getElementById("items-checkbox");
    for (let i = 0; i < beverages.length; i++) {
        const b = beverages[i];
        const element = `
        <div class="ck-button">
            <label class="ck-button-checked">
                <input id="cb${i + 1}" type="checkbox" value="${b.Name}"  onclick="onClickCheckbox(${i})">
                <span>${b.Name} Rp. ${b.Price}</span>
            </label>
        </div>
        `;

        items.innerHTML += element;
    }
}

// onclick custom checkbox handler
function onClickCheckbox(index) {
    const checked = beverages[index].Checked;
    beverages[index].Checked = !checked;
    calculateTotalPrice();
}

// Call load custom checkbox function
loadCustomCheckbox();