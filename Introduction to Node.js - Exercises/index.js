const storage = require('./storage');

storage.put("11","22");
console.log(storage.get("11"));
storage.clear();
//console.log(storage.get("11")); Throws exception
storage.put("22",33);
console.log(storage.getAll());
storage.deleteX("22");
// console.log(storage.getAll);
storage.put("11",11);
storage.update("11",22);
console.log(storage.get("11"));
storage.save();
storage.load();
