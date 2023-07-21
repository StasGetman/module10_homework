let x = 1;
switch (typeof x) {
    case 'number':
        console.log("x=number");
        break;
    case 'string':
        console.log("x=строка");
        break;
    case 'boolean':
        console.log("x=логический тип");
        break; 
    default: 
        console.log("Тип x не определён")     
}