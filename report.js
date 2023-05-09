const newman = require('newman');
 
newman.run({
    //collection: require('./Collection/collection.json'),
     collection:'https://api.postman.com/collections/25356639-8bbe9da7-bed2-41dd-9169-e078c1967162?access_key=PMAT-01GZYX3VBDV0C50JHJR71ZDZ2N',
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});