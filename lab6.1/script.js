function showMenu(MenuItemsA, ParentElem) {

    while (ParentElem.querySelector("ul")) {
        ParentElem.removeChild(ParentElem.querySelector("ul"));
    }

    const menuContainer = document.createElement("ul");
    menuContainer.className = ParentElem.id === "mainMenu" ? "menu" : "menu submenu";

    MenuItemsA.forEach(item => {
        const menuItem = document.createElement("li");
        menuItem.textContent = item.name;
        menuItem.className = "menu-item";

        if (item.subItems && item.subItems.length > 0) {
            menuItem.classList.add("has-submenu");
            menuItem.addEventListener("click", function(event) {
                event.stopPropagation(); 
                if (!menuItem.querySelector("ul")) {
                    showMenu(item.subItems, menuItem);
                } else {
                    menuItem.removeChild(menuItem.querySelector("ul"));
                }
            });
        } else if (item.url) { 
            menuItem.addEventListener("click", function(event) {
                event.stopPropagation(); 
                window.location.href = item.url; 
            });
        }

        menuContainer.appendChild(menuItem);
    });

    ParentElem.appendChild(menuContainer);
}

const menuItems = [
    {
        name: "О Кампании",
        subItems: [
            { name: "Миссия и ценности", url: "page4.html" },
            { name: "История", url: "page4.html" },
            { name: "Команда", url: "page4.html" },
            { name: "Награды и достижения", url: "page4.html" },
            { name: "Партнеры", url: "page4.html" },
            { name: "Отзывы клиентов", url: "page4.html" }
        ]
    },
    {
        name: "Услуги",
        subItems: [
            { name: "Брендинг и идентичность", url: "page4.html" },
            { name: "Дизайн и креатив", url: "page4.html" },
            {
                name: "Цифровой маркетинг",
                subItems: [
                    { name: "SEO", url: "page4.html" },
                    { name: "Контекстная реклама", url: "page4.html" },
                    { name: "SMM", url: "page4.html" }
                ]
            },
            {
                name: "Медиа и Реклама",
                subItems: [
                    { name: "Наружная реклама", url: "page4.html" },
                    { name: "Телевидение и радио", url: "page4.html" },
                    { name: "Принт и публикации", url: "page4.html" }
                ]
            }
        ]
    },
    {
        name: "Портфолио",
        subItems: [
            { name: "Кейс-стадии", url: "page4.html" },
            { name: "Видео проектов", url: "page4.html" },
            { name: "Галерея креативов", url: "page4.html" }
        ]
    },
    {
        name: "Блог",
        subItems: [
            { name: "Маркетинговые тренды", url: "page4.html" },
            { name: "Кейсы из практики", url: "page4.html" },
            { name: "Советы по продвижению", url: "page4.html" },
            { name: "Аналитика рынка", url: "page4.html" },
            { name: "Интервью с экспертами", url: "page4.html" }
        ]
    },
    {
        name: "Карьера",
        subItems: [
            { name: "Вакансии", url: "page4.html" },
            { name: "Стажировки", url: "page4.html" },
            { name: "Корпоративная культура", url: "page4.html" },
            { name: "Отзывы сотрудников", url: "page4.html" }
        ]
    },
    {
        name: "Контакты",
        subItems: [
            { name: "Форма обратной связи", url: "page4.html" },
            { name: "Адреса и карты", url: "page4.html" },
            { name: "Социальные сети", url: "page4.html" }
        ]
    }
];



document.addEventListener("DOMContentLoaded", () => {
    showMenu(menuItems, document.getElementById("mainMenu"));
});
