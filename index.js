function loadJSONData(key) {
    const jsonData = localStorage.getItem(key);
    return JSON.parse(jsonData);
}

function renderContent(data) {
    const wildlife1 = document.getElementById('wildlife1');
    const para1 = document.getElementById('para1');

    if (data && data.wildlife1 && data.wildlife1.title) {
        wildlife1.innerHTML = data.wildlife1.title;
    } else {
        console.error('Title not found in wildlife1 data.');
    }

    if (data && data.para1 && data.para1.description) {
        para1.innerHTML = data.para1.description;
    } else {
        console.error('Description not found in para1 data.');
    }
}

function loadDataIntoLocalStorage() {
    if (!localStorage.getItem('data')) {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('data', JSON.stringify(data));
                renderContent(data);
            })
            .catch(error => console.error('Error fetching or parsing JSON:', error));
    } else {
        const data = loadJSONData('data');
        renderContent(data);
    }
}

loadDataIntoLocalStorage();
