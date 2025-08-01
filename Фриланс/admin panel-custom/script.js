// Sidebar: выпадающее подменю
document.querySelectorAll('.sidebar_menu > ul > li > a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const parentLi = item.parentElement;
        parentLi.classList.toggle('active');
    });
});

// Dropdowns: язык
document.querySelector('.language-button').addEventListener('click', (e) => {
    e.stopPropagation(); // Чтобы не закрывалось сразу
    const dropdown = document.querySelector('.language-dropdown');
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }
});

// Dropdowns: пользователь
document.querySelector('.user-button').addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = document.querySelector('.user-dropdown');
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }
});

// Закрытие dropdown при клике вне
document.addEventListener('click', () => {
    const langDropdown = document.querySelector('.language-dropdown');
    const userDropdown = document.querySelector('.user-dropdown');
    if (langDropdown) langDropdown.style.display = 'none';
    if (userDropdown) userDropdown.style.display = 'none';
});

// Язык: смена флага и текста + закрытие меню
function changeLanguage(lang) {
    const flag = document.querySelector('.language-button img');
    const text = document.querySelector('.language-button');
    let newFlagSrc = '';
    let label = '';

    switch (lang) {
        case 'en':
            newFlagSrc = './assets/images/eng_flag.jpg';
            label = 'EN';
            break;
        case 'ru':
            newFlagSrc = './assets/images/rus_flag.webp';
            label = 'RU';
            break;
        case 'az':
            newFlagSrc = './assets/images/aze_flag.png';
            label = 'AZ';
            break;
    }

    if (flag) flag.src = newFlagSrc;
    if (text) text.innerHTML = `<img src="${newFlagSrc}" alt="${label}" class="flag"> ${label} <span class="arrow">▼</span>`;

    // Закрыть выпадающее меню
    const dropdown = document.querySelector('.language-dropdown');
    if (dropdown) dropdown.style.display = 'none';
}

// Профиль
function editProfile() {
    alert("Редактировать профиль");
    document.querySelector('.user-dropdown').style.display = 'none';
}

function logout() {
    alert("Выход из аккаунта");
    document.querySelector('.user-dropdown').style.display = 'none';
}

// Мобильное меню
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}
