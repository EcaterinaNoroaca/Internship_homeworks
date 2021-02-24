/*function isAObject(value); // boolean, try with null
function aWithouB(objA, objB); // return object a without keys existing in object B
function isEmptyObject(obj);// make sure works when nonObject used.
function isEqual(objA, objB); // boolean, if objA have same values as objA
function intersections(objA, objB); // object, return common keys between objA and objB
function getValueByPath(obj, path); // any, obj by the path from the given obj*/

function isAObject(value){
    return typeof(value) === 'object' ? true : false
}
console.log(isAObject({}))

function aWithouB(objA, objB){
    var x = Object.keys(objA).filter(prop => !(prop in objB))
    return Object.entries(objA).filter(([key, val])=> x.includes(key))
}
console.log(aWithouB({name:'Kate', age:20, height:170},{height:180,age:20}))


function isEmptyObject(obj){
    return ((typeof(obj) === 'object') && (Object.keys(obj).length ===0)) ? true : false
}

console.log(isEmptyObject({}))

function isEqual(objA, objB){
    return (Object.entries(objA).toString() === Object.entries(objB).toString()) ? true : false
}
console.log(isEqual({'name':'Kate', 'age':20},{'name':'Kate', 'age':20,'ss':"love"}))

function intersections(objA, objB){
    var x = Object.keys(objA).filter(prop => prop in objB)
     return Object.entries(objA).filter(([key, val])=> x.includes(key))
} 
console.log(intersections({'name':'Kate', 'age':20,'s':"love"},{'name':'Kate', 'age':20, 'ss':"love"}))


function getValueByPath(obj, path) {

	var stringToPath = function (path) {
		// If the path isn't a string, return it
		if (typeof path !== 'string') return path;
		// Create new array
		var output = [];
		// Split to an array with dot notation
		path.split('.').forEach(function (item, index) {
			// Split to an array with bracket notation
			item.split(/\[([^}]+)\]/g).forEach(function (key) {

				// Push to the new array
				if (key.length > 0) {
					output.push(key);
				}

			});

		});

		return output;

	};

	// Get the path as an array
	path = stringToPath(path);

	// Cache the current object
	var current = obj;

	// For each item in the path, dig into the object
	for (var i = 0; i < path.length; i++) {

		// If the item isn't found, return the default (or null)
		if (!current[path[i]]) return null;

		// Otherwise, update the current  value
		current = current[path[i]];

	}

	return current;

};

var obj = {
	'a': [
		{
			'b': {
				'c': 3
			}
		}
	]
}
console.log(getValueByPath(obj,"'a'.'b'"))