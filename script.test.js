const googleSearch = require('./script.js');

dbMonck = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
];

it('is a silly test',() => {
    expect('hello').toBe('hello');
})

it('is search google',() => {
    googleSearch('testtest', dbMonck);
    expect(googleSearch('dog', dbMonck)).toEqual(['dog.com', 'dogpictures.com'])
})