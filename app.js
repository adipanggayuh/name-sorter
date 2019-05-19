var fs = require("fs");
const main = () => {
  fs.readFile("unsorted-names-list.txt", "utf8", (error, data) => {
    var names = data.replace(/\r\n/g, "\n").split("\n"); // converting data to array
    var sortedNames = sortLastName(names).join("\n");
    fs.writeFileSync("sorted-names-list.txt", sortedNames);
    console.log(sortedNames);
  });
};
//---function to sort name---
const sortLastName = items => {
  items.sort((a, b) => {
    var nameA = getLastName(a);
    var nameB = getLastName(b);
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return items;
};
//---function to get the last name----
const getLastName = names => {
  return names.slice(names.lastIndexOf(" ") + 1).toUpperCase(); // the uppercase and lower case will be ignored
};

main();

module.exports = {
  sortLastName,
  getLastName
};
