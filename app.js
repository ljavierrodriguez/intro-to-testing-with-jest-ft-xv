const calculator = {
    sum: function(a, b){
        return a + b;
    },
    diff: (a, b) => a - b
};

const esMayor = edad => edad > 21;

module.exports = {
    calculator,
    esMayor
};

