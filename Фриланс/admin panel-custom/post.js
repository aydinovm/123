// Функция для переключения сайдбара на мобильных устройствах
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Функция для закрытия сайдбара
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Функция для переключения подменю
function toggleSubmenu(element) {
    const parent = element.parentElement;
    const isActive = parent.classList.contains('active');
    
    // Закрываем все открытые подменю
    document.querySelectorAll('.sidebar_menu li.active').forEach(li => {
        li.classList.remove('active');
    });
    
    // Открываем текущее, если оно было закрыто
    if (!isActive) {
        parent.classList.add('active');
    }
}

// Функция для переключения dropdown меню
function toggleDropdown(type) {
    const dropdown = document.getElementById(type + '-dropdown');
    const isVisible = dropdown.style.display === 'block';
    
    // Закрываем все dropdown
    document.querySelectorAll('.language-dropdown, .user-dropdown').forEach(dd => {
        dd.style.display = 'none';
    });
    
    // Открываем текущий, если он был закрыт
    if (!isVisible) {
        dropdown.style.display = 'block';
    }
}

// Закрытие dropdown при клике вне их области
document.addEventListener('click', function(event) {
    const isLanguageButton = event.target.closest('.language-button');
    const isUserButton = event.target.closest('.user-button');
    const isDropdown = event.target.closest('.language-dropdown, .user-dropdown');
    
    if (!isLanguageButton && !isUserButton && !isDropdown) {
        document.querySelectorAll('.language-dropdown, .user-dropdown').forEach(dd => {
            dd.style.display = 'none';
        });
    }
});

// Закрытие сайдбара при изменении размера окна
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
});

// Ваши существующие функции
function changeLanguage(lang) {
    console.log('Language changed to:', lang);
    // Здесь добавьте логику смены языка
    toggleDropdown('language');
}

function editProfile() {
    console.log('Edit profile clicked');
    // Здесь добавьте логику редактирования профиля
}

function logout() {
    console.log('Logout clicked');
    // Здесь добавьте логику выхода
}
