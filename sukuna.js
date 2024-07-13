const fs = require('fs');
const liftoff = require('./liftoff.json');

let lifto = [];
let liftl = [];
let lsid = [];
let lst = [];
let ldm = [];

let new_additions = [];

for (let a in liftoff["sellers"]) {
    //&& liftoff["sellers"][a].domain == ""
    if(liftoff["sellers"][a].name) {
        lifto[a] = liftoff["sellers"][a].name;
        liftl[a] = liftoff["sellers"][a].name.toLowerCase().replace(/[^a-zA-Z\d:]/g,"");
        lsid[a] = liftoff["sellers"][a].seller_id;
        lst[a] = liftoff["sellers"][a].seller_type;
        ldm[a] = liftoff["sellers"][a].domain;
 //       console.log(applovin["sellers"][i].name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""))
    }
}
let d_counter = 0;
for (let n=0; n<48; n++){
    var obj = JSON.parse(fs.readFileSync(`./sellers/sellers${n}.json`, 'utf8'));
    for (let i in obj["sellers"]) {
        let seller = obj["sellers"][i];
        console.log(seller);
        if(seller.name && seller.domain && liftl.indexOf(seller.name.toLowerCase().replace(/[^a-zA-Z\d:]/g,"")) > -1 && ldm[liftl.indexOf(seller.name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""))] === "") {

            d_counter++;
            new_additions.push({
                "name": seller.name,
                "name_after_regex":seller.name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""),
                "domain": seller.domain
            });
            ldm[liftl.indexOf(seller.name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""))]  = seller.domain;
            //console.log(`seller domain added! ${seller.domain}`)
        }
    }
}

for (let n=49; n<91; n++){
    var obj = JSON.parse(fs.readFileSync(`./sellers/sellers${n}.json`, 'utf8'));
    for (let i in obj["sellers"]) {
        let seller = obj["sellers"][i];
        if(seller.name && seller.domain && liftl.indexOf(seller.name.toLowerCase().replace(/[^a-zA-Z\d:]/g,"")) > -1 && ldm[liftl.indexOf(seller.name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""))] === "") {
            //console.log(liftl.indexOf(seller.name));
            d_counter++;
            new_additions.push({
                "name": seller.name,
                "name_after_regex":seller.name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""),
                "domain": seller.domain
            });
            ldm[liftl.indexOf(seller.name.toLowerCase().replace(/[^a-zA-Z\d:]/g,""))]  = seller.domain;
            //console.log(`seller domain added! ${seller.domain}`)
        }
    }
}


/*
for (let i in applovin["sellers"]) {
    let seller = applovin["sellers"][i];
    if(seller.name && seller.domain && liftl.indexOf(seller.name) > -1 && ldm[liftl.indexOf(seller.name)] === "none") {
        console.log(liftl.indexOf(seller.name));
        ldm[liftl.indexOf(seller.name)]  = seller.domain;
        console.log(`seller domain added! ${seller.domain}`)
    }
}
*/

// ^^WORKS
// now just need to iterate across sellers.json files

sellers =[];

for(let t in liftl) { 
    sellers.push({
        "seller_id": lsid[t],
        "seller_type": lst[t],
        "domain": ldm[t],
        "name":lifto[t]
    })
}

//console.log(sellers);
//console.log(d_counter);

fs.writeFile('./updated_liftoff.json',JSON.stringify(sellers), err => {if (err) throw err; console.log('all done');});
fs.writeFile('./new_additions_only.json',JSON.stringify(new_additions), err => {if (err) throw err; console.log('all done');});