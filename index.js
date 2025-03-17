const goodbye = (name) => {
    const emClose = document.querySelector(".email__closing");
    emClose.textContent = `S pozdravem ${name}`;
};


const fillSubject = (subject) => {
    document.querySelector('.email__subject').textContent = subject;
};

fillSubject(`BlaBla`);

const fillBody = (body, name) => {
    const emBody = document.querySelector(".email__body");
    emBody.innerHTML = body;
    goodbye(name);
};

fillBody(`Toto je tělo emailu.`,`Kateřina`);

