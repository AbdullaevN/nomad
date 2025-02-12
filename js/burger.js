const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

burger.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
});