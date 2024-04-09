// Function to load JSON data from localStorage
function loadJSONData(key) {
    const jsonData = localStorage.getItem(key);
    return JSON.parse(jsonData);
}

// Function to render content from JSON
function renderContent(data) {
    const horton1 = document.getElementById('horton1');
    horton1.innerHTML = data.wildlifeLocations[0].title;

    const sinharaja1 = document.getElementById('sinharaja1');
    sinharaja1.innerHTML = data.wildlifeLocations[1].title;

    const para1 = document.getElementById('para1');
    para1.innerHTML = data.wildlifeLocations[0].description;

    const para2 = document.getElementById('para2');
    para2.innerHTML = data.wildlifeLocations[1].description;

}

// Function to check if data exists in localStorage, if not, fetch from JSON files and store in localStorage
function loadDataIntoLocalStorage() {
    if (!localStorage.getItem('data')) {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('data', JSON.stringify(data));
                renderContent(data);
            })
            .catch(error => console.error('Error fetching JSON:', error));
    } else {
        const data = loadJSONData('data');
        renderContent(data);
    }
}

// Load data into localStorage and render content
loadDataIntoLocalStorage();