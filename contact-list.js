var friends = new Object();

friends.bill = new Object();
friends.steve = new Object();
friends.al = new Object();

friends.bill.firstName = "Bill";
friends.bill.lastName = "Rogers";
friends.bill.number = "347";
friends.bill.address = ["35", "Maiden Lane", "Brooklyn", "NY"];

friends.steve.firstName = "Steve";
friends.steve.lastName = "Stevens";
friends.steve.number = "917";
friends.steve.address = ["37 Asian Ave.", "New York", "NY"];

friends.al.firstName = "Al";
friends.al.lastName = "Galante";
friends.al.number = "718";
friends.al.address = ["122 Horizon Drive", "Wilmington", "Delaware"];


var list = function(friends) {
    for(var firstName in friends) {
        console.log(firstName);
    };
};

var search=function(name){
  for(var key in friends){
    if(friends[key].firstName===name)
    {
        console.log(friends[key]);    
        return friends[key];
    }
  }
};

console.log("bill");