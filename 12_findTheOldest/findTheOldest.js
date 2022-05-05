const findTheOldest = function(people) {
    let oldest = people[0]; 
    let oldestAge;
    let personAge;

    function countAge (person)
    {
        return (person.yearOfDeath != undefined) ? person.yearOfDeath - person.yearOfBirth: -10;
    }

    for (let person of people)
    {
        oldestAge = countAge(oldest);
        personAge = countAge(person);
        oldest = (personAge > oldestAge)? person: oldest;
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
