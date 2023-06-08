class GetType {
    constructor(context){
      this.context = context;
    }
    isString(){
            return typeof context === "string" !== false;
    }
}
const getType = new GetType()
class Kit {
  constructor() {
    this.root = new Root();
    this.configure = new Configure();
    this.Utility = new Utility();
  }
}

class Root {
  constructor() {
    this.Item = new Item();
    this.extracts = {};
    this.Resource = new Resource();
  }
    getUtility(){
        return new Utility()
    }
  }

class Item {
  constructor() {
    this.items = {};
  }

  assignGroup(group) {
    Object.assign(this.items, group);
    return this;
  }

  clearGroup(key) {
    this.items[key] = {};
    return this;
  }

  replaceItem(id, value) {
    for (let group in this.items) {
      if (this.items.hasOwnProperty(group)) {
        const itemToUpdate = this.items[group].find(item => item.id === id);
        if (itemToUpdate) {
          itemToUpdate.value = value;
          return this;
        }
      }
    }
    return this;
  }

  createGroup(groupName, ...items) {
    return {
      [groupName]: [...items]
    };
  }

  createItem(item) {
    return {
      id: item.id,
      value: item.value
    };
  }

  getItem(id) {
    for (let group in this.items) {
      if (this.items.hasOwnProperty(group)) {
        const item = this.items[group].find(item => item.id === id);
        if (item) {
          return item.value;
        }
      }
    }
    return null;
  }

  getItemsByGroup(groupName) {
    return this.items[groupName] || [];
  }

  getGroup(groupName) {
    return this.items[groupName] || {};
  }

  pushItem(groupName, item) {
    this.items[groupName].push(item);
    return this;
  }
}

class Configure {
  constructor() {
    this.root = new Root();
  }

  setExtracts(key, extracts) {
    this.root.extracts = { ...this.root.extracts, [key]: extracts };
    return this;
  }

  getExtracts(key) {
    return this.root.extracts[key];
  }

  setResource() {
    this.root.Resource = new Resource();
    return this;
  }

  setValue(key, bundle) {
    this.root.Resource.values[key] = { ...bundle };
    return this;
  }

  getValue(key) {
    return this.root.Resource.values[key];
  }

  extendBundle(key, bundle) {
    Object.assign(this.root.Resource.values[key], bundle);
    return this;
  }
}

class Resource {
  constructor() {
    this.values = {};
  }
}
class Utility {
    constructor()
    {
    this.root = new Root();
    this.Item = new Item()
    this.Methods = new Methods()
    }
    getMethods(context){
        if(getType.isString(context))
        {
            return this.getStringMethods(context)
        }
    }
    
}
class Methods {
    constructor(){
        
        }
        getStringMethods(string){
            return new getStringMethods(string)
        }
    
}
class getStringMethods
{
    constructor(string,...strings)
    {
        
    }
}
const kit = new Kit();
console.log(new Utility().getMethods())