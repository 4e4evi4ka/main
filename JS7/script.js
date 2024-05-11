const list = (array) => {
    const myList = document.getElementById('myList');
    
   const renderList = (item) => {
    if (Array.isArray(item)) {
        const subitems = item.map(Item => renderList(Item)).join('');
        return `<ul>${subitems}</ul>`;
    } else if (typeof item === 'object' && item !== null){
        const subitems = Object.entries(item).map(([key, value]) =>`<li>${key}: ${value}</li>`).join('');
        return `<ul>${subitems}</ul>`;
    }else{
        return `<li>${item}</li>`;
    }
   };
   const listItems = array.map(item =>renderList(item)).join('');
   myList.innerHTML = listItems;
};

const data = ['hello', 'world', ['Kiev', 'Kharkiv', 'Odessa'], 'Lviv'];
list(data);


const timerElement = document.createElement('label');
timerElement.textContent = 'Очищення сторінки через ...';
document.body.appendChild(timerElement);

let seconds = 10;

const countdownInterval = setInterval(() => {
    timerElement.textContent = `Очищення сторінки через ${seconds} сек.`;
    seconds--;

    if (seconds < 0) {
        clearInterval(countdownInterval);
        document.body.innerHTML = '';
    }
}, 1000);

