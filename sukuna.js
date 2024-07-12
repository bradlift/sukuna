const fs = require('fs');
const applovin = require('./applovin.json');
const liftoff = require('./liftoff.json');
//const google = require('./google.json');
const google = require('./old_google.json');
const unruly = require('./unruly.json');
const rubicon = require('./rubicon.json');
const inmobi = require('./inmobi.json');

const appl = [];
const liftl = [];
const googl = [];
const unrul = [];
const rubi = [];
const inmob = [];

for (let i in applovin["sellers"]) {
    if(applovin["sellers"][i].name && applovin["sellers"][i].domain) {
        appl.push(
            {
                "name": applovin["sellers"][i].name.toLowerCase(),
                //.replace(/[^a-zA-Z\d:]/g,""),
                "domain": applovin["sellers"][i].domain
            }
        )
 //       console.log(applovin["sellers"][i].name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""))
    }
}

for (let i in google["sellers"]) {
    if(google["sellers"][i].name && google["sellers"][i].domain) {
        googl.push(
            {
                "name": google["sellers"][i].name.toLowerCase(),
                //.replace(/[^a-zA-Z\d:]/g,""),
                "domain": google["sellers"][i].domain
            }
        )
 //       console.log(applovin["sellers"][i].name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""))
    }
}

for (let i in inmobi["sellers"]) {
    if(inmobi["sellers"][i].name && inmobi["sellers"][i].domain) {
        inmob.push(
            {
                "name": inmobi["sellers"][i].name.toLowerCase(),
                //.replace(/[^a-zA-Z\d:]/g,""),
                "domain": inmobi["sellers"][i].domain
            }
        )
 //       console.log(applovin["sellers"][i].name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""))
    }
}

for (let i in unruly["sellers"]) {
    if(unruly["sellers"][i].name && unruly["sellers"][i].domain) {
        unrul.push(
            {
                "name": unruly["sellers"][i].name.toLowerCase(),
                //.replace(/[^a-zA-Z\d:]/g,""),
                "domain": unruly["sellers"][i].domain
            }
        )
 //       console.log(applovin["sellers"][i].name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""))
    }
}

for (let i in rubicon["sellers"]) {
    if(rubicon["sellers"][i].name && rubicon["sellers"][i].domain) {
        rubi.push(
            {
                "name": rubicon["sellers"][i].name.toLowerCase(),
                //.replace(/[^a-zA-Z\d:]/g,""),
                "domain": rubicon["sellers"][i].domain
            }
        )
 //       console.log(applovin["sellers"][i].name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""))
    }
}


for (let a in liftoff["sellers"]) {
    if(liftoff["sellers"][a].name && liftoff["sellers"][a].domain == "") {
        liftl.push(
            
//                "name": liftoff["sellers"][a].name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""),
                liftoff["sellers"][a].name.toLowerCase()
                //.replace(/[^a-zA-Z\d:]/g,""),
            
        )
 //       console.log(applovin["sellers"][i].name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""))
    }
}

// console.log(appl)

function checkLift(elem) {
    return liftl.includes(elem.name);
}

const results = inmob.filter(checkLift)
//const results = unrul.filter(checkLift)
//const results = appl.map((elem) => {if(liftl.includes(elem.name)){return elem}});

// console.log(results)

let sort_res = {};

 for (let c in results) {
    if (sort_res[results[c].name]) {
        sort_res[results[c].name].domains.push(results[c].domain);
    } else {
        sort_res[results[c].name] = {name: results[c].name, domains:[results[c].domain]}
    }
 }

 let arr = [];  
 for (let d in sort_res) {
    arr.push(sort_res[d]);
 }

console.log(arr)
console.log(arr.length)
