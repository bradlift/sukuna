Sellers.json file locations were sourced by appending 'sellers.json' to our list of urls in app-ads.txt.
Then, from within the sellers folder, running this command:
wget --input-file=sellers_json_list.txt

The formatted results.json file contains all new additions updated within our most recent sellers.json file

The 'new_additions'.json file contains only new additions. For each new addition, there is an entry for both the name, and the name as transformed post replace regex

