const evenFrineds = friends => friends.filter(friend => friend.length % 2 === 0);

const nameOfFriends = ['rahim', 'rakib', 'jamal', 'kamal', 'faurk', 'vs code','rony'];
console.log(evenFrineds(nameOfFriends));