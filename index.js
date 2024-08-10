function meanVal(a, b) {
    console.log(a + b);
}
meanVal(3, '3');
var newYear = 1900;
var num = 3;
var programmer = {
    id: 2,
    name: 'Air',
    role: 'Front',
    birthDay: 24,
    birthYear: 2000,
    hasHobby: true,
    getData: function (name, role) {
        console.log(name + " has role: " + role);
    }
};
programmer.getData(programmer.name, programmer.role);
