export default function showMessage(title, message, typeMsg) {
    const myNotification = window.createNotification({
        displayCloseButton: true,
        closeOnClick: true,
        displayCloseButton: true,
        positionClass: 'nfc-top-right',
        onclick: false,
        // success, info, warning, error, and none
        theme: typeMsg
    });
    myNotification({
        title: title,
        message: message,

    });
}