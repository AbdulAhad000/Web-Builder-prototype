const getOnArrayHasKey = function(array,key){
let map;
array.forEach((group)=>{if(group.hasOwnProperty(key)){map = group[key];}});
return map;
}
// Define the root object to store the global context
const root = {
    "Item": class {}};

// Define the Settings object to store configuration settings
const Settings = {};

// Function to enable extracts
// This function returns an object with methods related to extracts
const Extracts = function() {
    return Settings.enableExtracts().Extracts();
}

// Method to enable extracts in the Settings object
// This method sets up the necessary properties and methods for extracts
Settings.enableExtracts = function() {
    root.Extracts = {};

    return {
        // Get the extracts object
        "Extracts": function() {
            return root.Extracts;
        },

        // Clear the extracts object
        "clearExtracts": function() {
            root.Extracts = {};
            return root.Extracts;
        },

        // Disable extracts and return the updated object
        "disableExtracts": function() {
            return Settings.disableExtracts();
        }
    }
}

// Method to disable extracts in the Settings object
// This method removes the extracts object from Settings if it exists
Settings.disableExtracts = function() {
    if (root.Extracts) {
        root.Extracts = undefined;
    }

    return {
        // Get the extracts object
        "Extracts": function() {
            return root.Extracts;
        },

        // Clear the extracts object
        "clearExtracts": function() {
            root.Extracts = {};
            return root.Extracts;
        },

        // Disable extracts and return the updated object
        "disableExtracts": function() {
            return Settings.disableExtracts();
        }
    }
}

// Function to enable resources
// This function returns an object with methods related to resources
const Resources = function() {
    return Settings.enableResources().Resources();
}

// Method to enable resources in the Settings object
// This method sets up the necessary properties and classes for resources
Settings.enableResources = function() {
    root.Resources = {
        "values": {}
    };

    return {
        // Get the resources values object
        "Resources": function() {
            // Define various classes for different data types
            root.Resources.values.Array = function(name, ...elements) {
                return class {
                    constructor() {
                        this.array = [];
                        this.pushArray();
                    }
                    pushArray() {
                        this.array.push({[name]: [...elements]});
                    }
                    getArray() {
                        let value;
                        this.array.forEach((item)=> {
                            if (item.hasOwnProperty(name)) {
                                value = item[name]}});
                        return value;
                    }
                    methods() {
                        return {
                            ...root.Utility.utility.Array.loadMethods(this.getArray())}
                    }
                }};
            root.Resources.values.Bool = function (name, bool) {
                return class {
                    constructor() {
                        this.bool = [];
                        this.pushBool();
                    }
                    pushBool() {
                        this.bool.push({
                            [name]: Boolean(bool)
                        });
                    }
                    getBool() {
                        return getOnArrayHasKey(this.bool,name)
                    }
                    methods() {
                        return {
                            ...root.Utility.utility.Bool.loadMethods(this.getBool())
                        };
                    }
                };
            };
            root.Resources.values.CSS = class {
                constructor() {
                    this.css = [];
                }};
            root.Resources.values.Date = class {
                constructor() {
                    this.Date = [];
                }};
            root.Resources.values.HTML = class {
                constructor() {
                    this.html = [];
                }};
            root.Resources.values.Map = class {
                constructor() {
                    this.map = [];
                }};
            root.Resources.values.Markup = class {
                constructor() {
                    this.markup = [];
                }};
            root.Resources.values.Matrix = class {
                constructor() {
                    this.matrix = [];
                }};
            root.Resources.values.MatrixBox = class {
                constructor() {
                    this.matrixBox = [];
                }};
            root.Resources.values.Node = class {
                constructor() {
                    this.node = [];
                }};
            root.Resources.values.Number = class {
                constructor() {
                    this.number = [];
                }};
            root.Resources.values.Queue = class {
                constructor() {
                    this.queue = [];
                }};
            root.Resources.values.Sequence = class {
                constructor() {
                    this.sequence = [];
                }};
            root.Resources.values.Set = class {
                constructor() {
                    this.set = [];
                }};
            root.Resources.values.Stack = class {
                constructor() {
                    this.stack = [];
                }};
            root.Resources.values.String = class {
                constructor() {
                    this.string = [];
                }};
            root.Resources.values.Tree = class {
                constructor() {
                    this.tree = [];
                }};

            return root.Resources.values;
        },

        // Disable resources and return the updated object
        "disableResources": function() {
            return Settings.disableResources();
        }
    }
}

// Method to disable resources in the Settings object
// This method removes the resources object from Settings if it exists
Settings.disableResources = function() {
    if (root.Resources) {
        root.Resources = undefined;
    }

    return {
        // Get the resources object
        "Resources": function() {
            return root.Resources;
        },

        // Disable resources and return the updated object
        "disableResources": function() {
            return Settings.disableResources();
        }
    }
}
Bool = Resources().Bool()
instanceofBool = new Bool();
instanceofBool.pushBool("fun",2>5);
instanceofBool.getBool()
console.log(instanceofBool)