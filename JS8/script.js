document.getElementById("price").addEventListener('blur', () => {
    let tempPrice = +price.value;
    price.innerText = tempPrice;
    if (tempPrice < 0) {
        document.getElementById('tip').innerText = `Введіть правильну ціну!`;
        document.getElementById('price').classList.add('redOutline');
    } else {
        document.getElementById('price').classList.remove('redOutline');
        document.getElementById('tip').innerText = ``;
        let spanList = document.getElementById('spanList');
        let spanNode = document.createElement('span');
        spanNode.setAttribute('onclick', `removespan(this);`);
        let textNode = document.createTextNode(`Справжня ціна: ${tempPrice}`);
        spanNode.appendChild(textNode);
        spanList.appendChild(spanNode);
        console.log(tempPrice);
    }
});

let removespan = (span) => {
    span.parentNode.removeChild(span);
};
