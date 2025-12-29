
    // --- LOGIQUE DE NAVIGATION ---
    function showExercise(id, btnElement) {
    // 1. Cacher toutes les sections
    document.querySelectorAll('.exercise-section').forEach(el => el.classList.remove('active'));
    // 2. Afficher la section demandée
    document.getElementById(id).classList.add('active');

    // 3. Gérer la classe active sur le menu
    if(btnElement) {
    document.querySelectorAll('nav button').forEach(el => el.classList.remove('active'));
    btnElement.classList.add('active');
}
}

    // --- EXERCICE 1 : CAROUSEL ---
    const ex1Images = [
    "https://images.visualelectric.com/4c0cabcd-6584-4344-970b-1390a205c1d4/large",
    "https://images.visualelectric.com/4fb8f1cc-96d3-4967-badc-7d3e946645e9/large",
    "https://images.visualelectric.com/b54dc823-1123-4d1d-b5b1-e2f65495881d/large"
    ];
    let ex1Index = 0;
    function moveCarousel(direction) {
    ex1Index += direction;
    if (ex1Index < 0) ex1Index = ex1Images.length - 1;
    if (ex1Index >= ex1Images.length) ex1Index = 0;
    document.getElementById('carouselImg').src = ex1Images[ex1Index];
}

    // --- EXERCICE 2 : DROPDOWN ---
    document.getElementById('menuTrigger').addEventListener('click', () => {
    document.getElementById('menuDropdown').classList.toggle('open');
});

    // --- EXERCICE 3 : TODO LIST ---
    function addTodo() {
    const input = document.getElementById('todoInput');
    if (input.value === '') return;

    const li = document.createElement('li');
    li.style.padding = "10px";
    li.style.borderBottom = "1px solid #eee";
    li.innerHTML = `
                <span onclick="this.classList.toggle('task-done')" style="cursor:pointer;">${input.value}</span>
                <button class="btn-delete" onclick="this.parentElement.remove()">Supprimer</button>
            `;
    document.getElementById('todoList').appendChild(li);
    input.value = '';
}

    // --- EXERCICE 4 : MODAL ---
    function toggleModal(show) {
    document.getElementById('myModal').style.display = show ? 'block' : 'none';
}

    // --- EXERCICE 5 : FILTRE ---
    function filterList() {
    const filter = document.getElementById('filterInput').value.toLowerCase();
    const lis = document.querySelectorAll('#filterList li');
    lis.forEach(li => {
    const text = li.textContent.toLowerCase();
    li.style.display = text.includes(filter) ? 'block' : 'none';
});
}

    // --- EXERCICE 6 : RESPONSIVE ---
    function checkLayout() {
    const box = document.getElementById('layoutDisplay');
    if (window.innerWidth < 700) {
    box.style.background = '#e74c3c'; // Rouge
    box.textContent = "Mode Mobile (< 700px)";
} else {
    box.style.background = '#3498db'; // Bleu
    box.textContent = "Mode Ordinateur (> 700px)";
}
}
    window.addEventListener('resize', checkLayout);
    checkLayout(); // Init

    // --- EXERCICE 7 : PROGRESS BAR ---
    function startDownload() {
    const bar = document.getElementById("progressBar");
    let width = 0;
    bar.style.width = '0%';
    const interval = setInterval(() => {
    if (width >= 100) {
    clearInterval(interval);
    alert("Terminé !");
} else {
    width++;
    bar.style.width = width + '%';
}
}, 30);
}

    // --- EXERCICE 8 : DRAG & DROP ---
    function allowDrop(ev) { ev.preventDefault(); }
    function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
    function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(data));
}

    // --- EXERCICE 9 : THEME SOMBRE ---
    function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    // Sauvegarde LocalStorage
    if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
} else {
    localStorage.setItem('theme', 'light');
}
}

    // Charger le thème au démarrage
    if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}