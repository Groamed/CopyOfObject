let person = {
    name: 'Jonh',
    age: 17,
    lifestyle: {
        training: true,
        smoking: false,
        drunk: false
    },
    money: 123
}

function copyObj(obj) {
    let nobj = {}
    for(let key in obj) {
        if(typeof obj[key] == 'object') {
            
            nobj[key] = copyObj(obj[key])
        } else {
            nobj[key] = obj[key]
        }
    }
    return nobj
}

let person2 = copyObj(person)
document.write('Имя основного: ' + person.name + '<br>')
document.write('Имя скопированного: ' + person2.name + '<br>')
person.name = 'Bob'
document.write('Имя основного: ' + person.name + '<br>')
document.write('Имя скопированного: ' + person2.name + '<br>')