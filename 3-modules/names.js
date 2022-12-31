// private
const secret = 'SUPER SECRET';

// public
const john = 'john';
const peter = 'peter';

// console.log(module);

const namesArray1 = ['bob', 'matio'];

// regular exports - only the last regular exported export will show.

module.exports = { john };
module.exports = { john, peter, namesArray1 };
// module.exports = namesArray1;

//export as you go method - this method automatically returns all exports in one object - all the exports will show.

module.exports.namesArray2 = ['bob', 'john'];
const namesObject = { john, peter };

module.exports.namesObject = namesObject;
