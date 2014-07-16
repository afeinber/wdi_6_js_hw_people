var Person = function(firstName, lastName, options) {
  var age = options.age || 30;
  var weight = options.weight || 80;
  var height = height || Math.floor(Math.random() * 50) + 150;
  var friends = friends || [];


  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    weight: weight,
    height: height,
    friends: friends
  };
};

Person.prototype = {
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  weightInStone: function() {
    return this.weight / 14;
  },
  addFriend: function(friend) {
    this.friends += [friend];
  },
  removeFriend: function(badFriend) {
    this.friends = this.friends.filter(function(friend) {
      return friend.name === badFriend;
    });
  }



};
