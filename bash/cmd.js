var parse = require('./parse');

var db = require('./db');

//parse.parseDir(_dirname + '/data', interviews );

//parse.parseFile(__dirname + '/data/Barclays.txt')
//    .then(function(interviews){
//        console.log(interviews[0].questions.length,interviews.length)
//    });

parse.parseDir(__dirname + '/data').then(db.saveInterviews).then(function(){
    
    return db.Conn.then(function(db) {
        return db.close();
    })    
}).catch(console.log);


