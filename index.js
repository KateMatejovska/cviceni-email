const goodbye = (name) => {
    const emClose = document.querySelector(".email__closing");
    emClose.textContent = `S pozdravem ${name}`;
};

goodbye('Kateřina Matějovská');

const fillSubject = (subject) => {
    document.querySelector('.email__subject').textContent = subject;
};

fillSubject(`BlaBla`);

const fillBody = (body, name) => {
    const emBody = document.querySelector(".email__body");
    emBody.innerHTML += body;
    const emClose = document.querySelector(".email__closing");
    emClose.textContent = goodbye(name);
};

fillBody(`Toto je tělo emailu.`,`Kateřina Matějovská`);

