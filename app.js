const menuItems = document.querySelectorAll(".manu-items");

//messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');


//========sidebar==========//

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item =>{
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active')
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        }
        else{document.querySelector('.notification-popup').style.display = 'block';
             document.querySelector('#notifications .notification-count').style.display = 'none';
            }
    })
})

//-----------messages----------
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1re var(--color-primary)';
    console.log('am working')
})