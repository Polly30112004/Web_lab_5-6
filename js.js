const catalog = [
    {
        name: "Шестигранник",
        type: "Плитка",
        size: "250x220x70",
        colors: ["Серый", "Красный", "Коричневый", "Желтый", "Черный"],
        prices: { Серый: 470, Красный: 550, Коричневый: 590, Желтый: null, Черный: 510 },
        image: "img/шестигранник.png"
    },
    {
        name: "Брусчатка",
        type: "Плитка",
        size: "200x100x50",
        colors: ["Серый", "Красный", "Коричневый", "Желтый", "Черный"],
        prices: { Серый: 440, Красный: 500, Коричневый: 550, Желтый: 700, Черный: null },
        image: "img/брусчатка.png"
    },
    {
        name: "Плитка квадрат",
        type: "Плитка",
        size: "330x330x60",
        colors: ["Серый", "Красный", "Коричневый", "Желтый", "Черный"],
        prices: { Серый: 440, Красный: 500, Коричневый: 550, Желтый: 700, Черный: null },
        image: "img/плитка_квадрат.png"
    },
    {
        name: "Катушка",
        type: "Плитка",
        size: "250x160x60",
        colors: ["Серый", "Красный", "Коричневый", "Желтый", "Черный"],
        prices: { Серый: 440, Красный: 500, Коричневый: 550, Желтый: 700, Черный: null },
        image: "img/катушка.png"
    },
    {
        name: "Кирпич",
        type: "Плитка",
        size: "250x125x60",
        colors: ["Серый", "Красный", "Коричневый", "Желтый", "Черный"],
        prices: { Серый: 440, Красный: 500, Коричневый: 550, Желтый: 700, Черный: null },
        image: "img/кирпичик.png"
    },
    {
        name: "Волна",
        type: "Плитка",
        size: "201x125x60",
        colors: ["Серый", "Красный", "Коричневый", "Желтый", "Черный"],
        prices: { Серый: 450, Красный: 500, Коричневый: 550, Желтый: 700, Черный: null },
        image: "img/волна.png"
    },
    {
        name: "Прессованная плитка",
        type: "Плитка",
        size: "300x300x50",
        colors: ["Серый", "Красный", "Коричневый"],
        prices: { Серый: 430, Красный: 490, Коричневый: 530 },
        image: "img/пресованная_плита.png"
    },
    {
        name: "Вибролитная плитка",
        type: "Плитка",
        size: "400x400x60",
        colors: ["Серый", "Красный", "Желтый"],
        prices: { Серый: 460, Красныйый: 520, Желтый: 680 },
        image: "img/вибролитная_плита.png"
    },
    {
        name: "Садовый бордюр",
        type: "Бордюр",
        size: "500x200x60",
        colors: ["Серый", "Красный"],
        prices: { Серый: 150, Красный: 180 },
        image: "img/садовый_бордюр.png"
    },
    {
        name: "Дорожный бордюр",
        type: "Бордюр",
        size: "1000x300x150",
        colors: ["Серый", "Коричневый"],
        prices: { Серый: 300, Коричневый: 350 },
        image: "img/дорожный_бордюр.png"
    },
    {
        name: "Строительные блоки",
        type: "Блок",
        size: "390x190x190",
        colors: ["Серый"],
        prices: { Серый: 50 },
        image: "img/строительные_блоки.png"
    },
    {
        name: "Фасадная плитка",
        type: "Плитка",
        size: "250x65x20",
        colors: ["Красный", "Коричневый", "Желтый"],
        prices: { Красный: 600, Коричневый: 650, Желтый: 700 },
        image: "img/фасадная_плитка.png"
    },
    {
        name: "Водостоки тротуарные",
        type: "Водосток",
        size: "500x160x60",
        colors: ["Серый"],
        prices: { Серый: 200 },
        image: "img/водостоки_тротуарные.png"
    },
    {
        name: "Крышки на столбы",
        type: "Крышка",
        size: "400x400x50",
        colors: ["Серый", "Красный"],
        prices: { Серый: 250, Красный: 300 },
        image: "img/крышки_на_столбы.png"
    },
    {
        name: "Ромб",
        type: "Плитка",
        size: "200x200x60",
        colors: ["Серый", "Красный", "Коричневый"],
        prices: { Серый: 450, Красный: 510, Коричневый: 560 },
        image: "img/ромб.png"
    }
];

const colorMap = {
    Серый: "#737373",
    Красный: "#9C0909",
    Коричневый: "#964B00",
    Желтый: "#D77D31",
    Черный: "#000000"
};

const quantityMap = {
    "Шестигранник": 21,
    "Брусчатка": 50,
    "Плитка квадрат": 9,
    "Катушка": 30,
    "Кирпич": 32,
    "Волна": 40,
    "Прессованная плитка": 11,
    "Вибролитная плита": 6,
    "Садовый бордюр": null,
    "Дорожный бордюр": null,
    "Строительные блоки": null,
    "Фасадная плитка": 60,
    "Водостоки тротуарные": null,
    "Крышки на столбы": null,
    "Ромб": 25
};

function renderCatalog(items) {
    const container = document.querySelector(".catalog-container");
    const noResults = document.querySelector(".no-results");
    container.innerHTML = "";
    noResults.style.display = items.length === 0 ? "block" : "none";

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-info">
                <img class="product-image" src="${item.image}" alt="${item.name}">
                <p class="product-info-description">
                    <b>${item.name} ${item.size}</b><br>
                    Размер: ${item.size} мм<br>
                    Количество: ${quantityMap[item.name] ? `${quantityMap[item.name]} шт/кв.м` : "Поштучно"}<br>
                    Цвета: ${item.colors.length}
                </p>
                <div class="color-options">
                    ${item.colors.map(color => 
                        `<span class="color" style="background-color: ${colorMap[color] || '#ccc'};"></span>`
                    ).join('')}
                </div>
            </div>
            <div class="product-prices">
                <div class="price">
                    ${Object.entries(item.prices)
                        .map(([color, price]) => 
                            `<p class="price-item"><b>${color}</b> ${price ? `${price} руб/${quantityMap[item.name] ? "кв.м" : "шт"}` : "по запросу"}</p>`
                        ).join('')}
                </div>
                <button class="add-to-cart button-order">+</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function applyMethod(method) {
    let result = [...catalog];
    switch (method) {
        case "map-discount":
            result = catalog.map(item => ({
                ...item,
                prices: Object.fromEntries(
                    Object.entries(item.prices).map(([color, price]) => [
                        color,
                        price ? Math.round(price * 0.9) : null
                    ])
                )
            }));
            break;
        case "filter-type":
            result = catalog.filter(item => item.type === "Плитка");
            break;
        case "reduce-total":
            const total = catalog.reduce((sum, item) => {
                const validPrices = Object.values(item.prices).filter(p => p !== null);
                const minPrice = validPrices.length ? Math.min(...validPrices) : 0;
                return sum + minPrice;
            }, 0);
            alert(`Общая стоимость (по минимальной цене): ${total} руб`);
            return;
        case "sort-price":
            result = [...catalog].sort((a, b) => {
                const priceA = Math.min(...Object.values(a.prices).filter(p => p !== null));
                const priceB = Math.min(...Object.values(b.prices).filter(p => p !== null));
                return priceA - priceB;
            });
            break;
        case "slice-first5":
            result = catalog.slice(0, 5);
            break;
        case "includes-gray":
            result = catalog.filter(item => item.colors.includes("Серый"));
            break;
        case "find-expensive":
            result = [catalog.find(item => {
                const validPrices = Object.values(item.prices).filter(p => p !== null);
                return validPrices.length && Math.max(...validPrices) === Math.max(...catalog.flatMap(i => 
                    Object.values(i.prices).filter(p => p !== null)
                ));
            })].filter(Boolean);
            break;
        case "forEach-log":
            catalog.forEach(item => {
                console.log(`Товар: ${item.name}, Цена: ${Math.min(...Object.values(item.prices).filter(p => p !== null)) || "по запросу"}`);
            });
            alert("Товары выведены в консоль");
            return;
        case "some-cheap":
            const hasCheap = catalog.some(item => {
                const validPrices = Object.values(item.prices).filter(p => p !== null);
                return validPrices.length && Math.min(...validPrices) < 500;
            });
            alert(hasCheap ? "Есть товары дешевле 500 руб" : "Нет товаров дешевле 500 руб");
            return;
        case "every-instock":
            const allInStock = catalog.every(item => 
                Object.values(item.prices).some(p => p !== null)
            );
            alert(allInStock ? "Все товары в наличии" : "Некоторые товары недоступны");
            return;
    }
    renderCatalog(result);
}

function handleSearchAndFilter() {
    const search = document.getElementById("search-input").value.toLowerCase();
    const category = document.getElementById("category-select").value;
    const sortBy = document.getElementById("sort-select").value;

    let result = [...catalog];

    if (search) {
        result = result.filter(item => item.name.toLowerCase().includes(search));
    }

    if (category !== "all") {
        result = result.filter(item => item.type === category);
    }

    switch (sortBy) {
        case "name-asc":
            result.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name-desc":
            result.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "price-asc":
            result.sort((a, b) => {
                const priceA = Math.min(...Object.values(a.prices).filter(p => p !== null));
                const priceB = Math.min(...Object.values(b.prices).filter(p => p !== null));
                return priceA - priceB;
            });
            break;
        case "price-desc":
            result.sort((a, b) => {
                const priceA = Math.max(...Object.values(a.prices).filter(p => p !== null));
                const priceB = Math.max(...Object.values(b.prices).filter(p => p !== null));
                return priceB - priceA;
            });
            break;
    }

    renderCatalog(result);
}

document.addEventListener("DOMContentLoaded", () => {
    renderCatalog(catalog);
    document.getElementById("search-input").addEventListener("input", handleSearchAndFilter);
    document.getElementById("sort-select").addEventListener("change", handleSearchAndFilter);
    document.getElementById("category-select").addEventListener("change", handleSearchAndFilter);
});