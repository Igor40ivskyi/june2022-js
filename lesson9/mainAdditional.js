coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let arrayElement of coursesAndDurationArray) {

    for (let itemKey in arrayElement) {
        let divElement = document.createElement('div');
        divElement.innerText = `${itemKey}  ----- ${arrayElement.title} --- ${arrayElement.monthDuration}`
        document.body.appendChild(divElement);
    }
}