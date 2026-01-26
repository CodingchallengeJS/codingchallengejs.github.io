document.addEventListener('DOMContentLoaded', async () => {
    // --- Data for translation and pronunciation ---
    let translationData;
    await fetch('./vocabularies.json')
        .then(res => res.json())
        .then(json => {
            console.log(true)
            translationData = json; 
        });
    
    console.log(translationData);
    const rows = csvData.trim().split('\n');
    const headers = rows[0].split(',');
    const vocabData = [];

    for (let i = 1; i < rows.length; i++) {
        const values = rows[i].split(',');
        for (let j = 0; j < headers.length; j++) {
            const category = headers[j];
            const word = values[j];
            
            // Check if we have translation data for this category and word
            const wordData = translationData[category] && translationData[category][word];
            console.log(translationData[category])
            vocabData.push({
                category: category,
                word: word,
                pronunciation: wordData ? wordData.pronunciation : '/prəˌnʌnsiˈeɪʃən/', 
                meaning: wordData ? wordData.meaning : 'Nghĩa tiếng Việt' 
            });
        }
    }

    const grid = document.getElementById('vocabulary-grid');
    const searchBar = document.getElementById('search-bar');
    const categoryFilter = document.getElementById('category-filter');

    // Populate category filter
    headers.forEach(header => {
        const option = document.createElement('option');
        option.value = header;
        option.textContent = header;
        categoryFilter.appendChild(option);
    });

    function displayWords(words) {
        grid.innerHTML = '';
        words.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${item.word}</h3>
                <p class="pronunciation">${item.pronunciation}</p>
                <p class="meaning">${item.meaning}</p>
            `;
            grid.appendChild(card);
        });
    }

    function filterAndSearch() {
        const searchTerm = searchBar.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const filteredWords = vocabData.filter(item => {
            const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
            const matchesSearch = item.word.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        displayWords(filteredWords);
    }

    searchBar.addEventListener('input', filterAndSearch);
    categoryFilter.addEventListener('change', filterAndSearch);

    // Initial display
    displayWords(vocabData);

});

document.getElementById('mobile-menu').addEventListener('change', function () {
    if (this.value) {
        window.location.href = this.value;
    }
});
