document.addEventListener('DOMContentLoaded', function() {
    const imageEndpoint = "https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1";
    const apiEndpoint = "https://test-node-server-n86p3o8hk-pffranco.vercel.app";
    const contentContainer = document.querySelector(".content");
    const buttons = document.querySelectorAll('button');

    const extractName = obj => obj.name;

    const addToContentText = (text) => {
        contentContainer.innerHTML = text;
    };
    const createImgFromBlob = function(blob) {
        return new Promise((resolve, reject) => {
            const url = URL.createObjectURL(blob);
            const img = document.createElement('img');
            img.onload = function() {
                URL.revokeObjectURL(url);
                resolve(img);
            };
            img.src = url;
        });
    };
    const parseHtml = text => {
        let parser = new DOMParser();
        return parser.parseFromString(text, "text/html");
    };

    const addToContentImage = element => {
        contentContainer.appendChild(element);
    };

    buttons[0].addEventListener('click', function (ev) {
        ev.preventDefault();
        fetch(`${apiEndpoint}/user`)
            .then(response => response.json())
            .then(extractName)
            .then(addToContentText);
    });

    buttons[1].addEventListener('click', function (ev) {
        ev.preventDefault();
        fetch(imageEndpoint)
            .then(response => response.blob())
            .then(createImgFromBlob)
            .then(addToContentImage);
    });

    buttons[2].addEventListener('click', function (ev) {
        ev.preventDefault();
        fetch(`${apiEndpoint}/hello`)
            .then(response => response.text())
            .then(parseHtml)
            .then(console.log);
    });
});
