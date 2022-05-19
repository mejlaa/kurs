const logger = (value) => {
    console.log(value);
};

const sum = (a, b, callback) => {
    if (callback) {
        callback(a + b);
    }

    return a + b;
};

//f-ja koja se salje u drugu fju i poziva se unutar  nje

sum(10, 20, logger);
//a moze i sum(10,20, (value) => console.log(value);)