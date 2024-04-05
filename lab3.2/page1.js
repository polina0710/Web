// Объявление пустого хэша для хранения пар ключ-значение
let campaignsInfo = {};

// Функция добавления информации о рекламной кампании
function AddCampaign(key, value) {
    campaignsInfo[key] = value;
    console.log(`Информация о кампании "${key}" добавлена.`);
}

// Функция удаления информации о рекламной кампании
function DeleteCampaign(key) {
    if (key in campaignsInfo) {
        delete campaignsInfo[key];
        console.log(`Информация о кампании "${key}" удалена.`);
    } else {
        console.log("Информация о такой кампании не найдена.");
    }
}

// Функция получения информации о рекламной кампании
function GetCampaignInfo(key) {
    if (key in campaignsInfo) {
        return `Кампания: ${key}, Описание: ${campaignsInfo[key]}`;
    } 
    if (value === null) {
        return; 
        }
    else {
        return "Нет информации.";
    }
}

// Функция вывода информации обо всех рекламных кампаниях
function ListCampaigns() {
    let allInfo = "";
    for (let key in campaignsInfo) {
        allInfo += `Кампания: ${key}, Описание: ${campaignsInfo[key]}\n`;
    }
    return allInfo || "Нет информации о кампаниях.";
}
