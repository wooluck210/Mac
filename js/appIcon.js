let appIcons = document.querySelectorAll('.apps')

function openApp(event) {
    let btnClass = event.target.classList[1];

    let Apps = document.querySelectorAll('main > section');

    Apps.forEach(App => {
        if (App.classList.contains(btnClass)) {
            App.classList.toggle('active');
        }
        else {
            App.classList.remove('active');
        }
    });
}

appIcons.forEach(icon => {
    icon.addEventListener('click', openApp);
});