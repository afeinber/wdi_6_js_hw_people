var Person = function(firstName, lastName, options) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = options.age || 30;
  this.weight = options.weight || 80;
  this.height = options.height || Math.floor(Math.random() * 50) + 150;
  this.friends = options.friends || [];


  // return {
  //   firstName: firstName,
  //   lastName: lastName,
  //   age: age,
  //   weight: weight,
  //   height: height,
  //   friends: friends
  // };
};

Person.prototype = {
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  weightInStone: function() {
    return this.weight / 14;
  },
  addFriend: function(friend) {
    this.friends.push(friend);
  },
  removeFriend: function(badFriend) {
    this.friends = this.friends.filter(function(friend) {
      return friend.name === badFriend;
    });
  },
  greetPeople: function(options) {
    options = options || {};
    var greeting = options.greeting || 'Hi';
    var people = options.people || this.friends;
    if(!people) {
      throw 'You have nobody to greet :(';
    }
    greetings = '';
    people.forEach(function(person) {
      greetings += greeting + ' ' + person.firstName + '! \n';
    });
    return greetings;
  }
};
