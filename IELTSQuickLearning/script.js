document.addEventListener('DOMContentLoaded', async () => {
    const csvData = `Urbanization & Migration,Health & Lifestyle,Education,Environment & Climate Change,Technology & Society,Government & Society,Psychology & Behavior
mass exodus,sedentary lifestyle,rote memorization,carbon footprint,technological disruption,government accountability,delayed gratification
rural depopulation,diet-related illnesses,critical thinking,sustainable development,digital divide,grassroots movements,impulse control
overcrowded metropolises,health-conscious consumers,holistic development,climate-conscious,information overload,civic engagement,instant gratification
strain on urban infrastructure,preventive healthcare,curriculum reform,environmental degradation,screen addiction,authoritarian regimes,peer influence
socioeconomic imbalance,public health campaigns,vocational training,non-renewable energy,AI-driven society,redistribution of wealth,cognitive bias
widening rural-urban divide,obesity epidemic,equitable access,eco-friendly,automation of labor,welfare state,emotional intelligence
job magnet cities,mental well-being,digital literacy,zero-waste lifestyle,cybersecurity threats,free market economy,behavioral patterns
in search of greener pastures,nutritional awareness,educational inequality,climate change mitigation,online privacy,public sector reform,decision-making processes
internal migration,fast food dependency,student-centered learning,biodiversity loss,social media influence,regulatory frameworks,self-discipline
urban sprawl,lifestyle diseases,distance education,deforestation,digital transformation,social justice,habit formation
housing crisis,cardiovascular issues,higher education funding,greenhouse gases,remote working,income inequality,motivation theory
slum development,balanced diet,teacher training,ocean acidification,smart devices,policy implementation,social conditioning
public transport strain,physical inactivity,standardized testing,environmental awareness,tech-savvy generation,legislative process,groupthink
city congestion,mental fatigue,academic achievement,recycling habits,cloud computing,government intervention,risk aversion
migratory trends,wellness trends,learning outcomes,plastic pollution,big data analytics,civil liberties,personality traits
economic migration,health supplements,education gap,renewable resources,blockchain applications,political transparency,intrinsic motivation
urban drift,screen fatigue,lifelong learning,urban greening,virtual reality,democratic values,external validation
infrastructure bottlenecks,junk food culture,pedagogical approaches,carbon neutrality,tech addiction,bureaucratic inefficiency,mood swings
youth outmigration,fitness regimes,e-learning platforms,environmental footprint,e-governance,state funding,self-awareness
regional disparities,work-life balance,blended learning,green technology,wearable technology,public trust,mindfulness practice
urban influx,chronic illness,critical pedagogy,green architecture,digital footprint,executive authority,neuroplasticity
housing shortage,preventive measures,learning autonomy,eco-conscious behavior,information ethics,tax reform,mental conditioning
suburban expansion,wellness programs,scholarly excellence,global warming,algorithm bias,political participation,self-regulation
urban decay,nutritional intake,academic discipline,reforestation,data-driven society,national sovereignty,behavioral economics
inner-city decline,addiction treatment,STEM education,environmental resilience,internet governance,voting rights,coping mechanisms
economic hubs,mental disorders,knowledge retention,pollution control,social networking,institutional corruption,stress response
infrastructure collapse,caloric balance,subject mastery,environmental policy,technology integration,civic responsibility,psychological resilience
urban renewal,active living,interactive learning,sustainable agriculture,e-learning tools,human rights advocacy,habit loops
spatial inequality,fitness awareness,online education,ecological conservation,technological literacy,public service delivery,social cues
population boom,health indicators,school infrastructure,habitat destruction,AI ethics,electoral systems,identity formation
development imbalance,urban stress,education accessibility,energy efficiency,automated systems,policy transparency,empathy development
transitional migration,well-being strategies,learning diversity,climate change adaptation,data surveillance,state intervention,cognitive load
rural stagnation,healthcare burden,standardized curriculum,environmental hazards,machine learning,government stability,emotional triggers
urban appeal,hygiene standards,co-curricular activities,natural disasters,digital innovation,freedom of speech,self-reflection
employment hubs,immune resilience,academic burnout,fossil fuel dependency,internet dependency,economic planning,self-esteem
megacities,recreational therapy,higher-order thinking,green legislation,biometric security,public sector efficiency,thought patterns
squatter settlements,personal hygiene,learning motivation,ecological footprint,data encryption,legal frameworks,impulsive tendencies
real estate inflation,psychosocial health,collaborative learning,waste management,smart infrastructure,political polarization,conflict resolution
resource depletion,disease prevention,student engagement,environmental awareness,digital ecosystems,administrative oversight,interpersonal dynamics
civic amenities,healthcare access,educational attainment,carbon offsetting,cloud storage,foreign policy,decision paralysis
decentralization,nutritional balance,equity in education,marine conservation,quantum computing,constitutional rights,resilience training
informal settlements,substance abuse,knowledge dissemination,climate justice,augmented reality,state subsidies,emotional awareness
commuter towns,detox habits,teacher-student ratio,green subsidies,tech-driven change,central governance,persuasion tactics
seasonal migration,longevity trends,academic resources,pollution mitigation,cyberbullying,demographic policy,goal orientation
push-pull factors,mind-body connection,curriculum standardization,eco-restoration,internet regulation,urban governance,reinforcement theory
peri-urban zones,alternative medicine,pedagogical shift,solar energy,online learning platforms,bureaucratic reform,emotional outbursts
job saturation,dietary fiber,education reforms,wind power,tech monopolies,law enforcement,procrastination cycle
social fragmentation,vitamin deficiency,instructional design,sustainable consumption,IT revolution,national legislation,mindset shift
urban fringe,body image,education policy,green revolution,digital payment systems,policy formulation,belief systems
brain drain,sustainable diet,learning disparities,clean energy,virtual assistants,government legitimacy,emotional regulation`;

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
            console.log(category);
            console.log(translationData[category]);
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

    async function displayWords(words) {
        grid.innerHTML = '';
        words.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${item.word}</h3>
                <p class="pronunciation">${item.pronunciation} <button class="speak-btn" data-word="${item.word}" title="Listen">🔊</button></p>
                <p class="meaning">${item.meaning}</p>
            `;
            grid.appendChild(card);
        });

        function speakWord(word) {
            // Check if the browser supports the SpeechSynthesis API
            if ('speechSynthesis' in window) {
                // Cancel any previous speech to prevent overlap
                window.speechSynthesis.cancel();

                const utterance = new SpeechSynthesisUtterance(word);
                utterance.lang = 'en-US'; // Set the language for correct pronunciation
                utterance.rate = 0.9;     // Slightly slower for clarity
                
                window.speechSynthesis.speak(utterance);
            } else {
                alert("Sorry, your browser does not support text-to-speech.");
            }
        }

        // Add a single event listener to the grid container
        grid.addEventListener('click', function(event) {
            // Check if the clicked element is a speak button
            const speakButton = event.target.closest('.speak-btn');
            
            if (speakButton) {
                const wordToSpeak = speakButton.dataset.word;
                speakWord(wordToSpeak);
            }
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
