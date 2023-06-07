const getOnArrayHasKey = function(array,key){
    return array.find(function(item) {
        return item.hasOwnProperty(key);
    })?.[key];
}

const root = {
    "Item": class {}
};

const Settings = {};

const Extracts = function() {
    return Settings.enableExtracts().Extracts();
}

Settings.enableExtracts = function() {
    root.Extracts = {};

    return {
        "Extracts": function() {
            return root.Extracts;
        },

        "clearExtracts": function() {
            root.Extracts = {};
            return root.Extracts;
        },

        "disableExtracts": function() {
            return Settings.disableExtracts();
        }
    }
}

Settings.disableExtracts = function() {
    if (root.Extracts) {
        root.Extracts = undefined;
    }

    return {
        "Extracts": function() {
            return root.Extracts;
        },

        "clearExtracts": function() {
            root.Extracts = {};
            return root.Extracts;
        },

        "disableExtracts": function() {
            return Settings.disableExtracts();
        }
    }
}

const Resources = function() {
    return Settings.enableResources().Resources();
}

Settings.enableResources = function() {
    root.Resources = {
        "values": {}
    };

    return {
        "Resources": function() {
            root.Resources.values.Array = function(name, ...elements) {
                if(!(this instanceof root.Resources.values.Array)) {
                    const instance = new root.Resources.values.Array(name,...elements);
                    return new instance();
                }
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
                                value = item[name];
                            }
                        });
                        return value;
                    }
                    methods() {
                        return {
                            ...root.Utility.utility.Array.loadMethods(this.getArray())
                        }
                    }
                }
            };

            root.Resources.values.Bool = function (name, bool) {
                if(!(this instanceof root.Resources.values.Bool)) {
                    const instance = new root.Resources.values.Bool(name,bool);
                    return new instance();
                }
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
                }
            };

            root.Resources.values.Date = class {
                constructor() {
                    this.Date = [];
                }
            };

            root.Resources.values.HTML = class {
                constructor() {
                    this.html = [];
                }
            };

            root.Resources.values.Map = class {
                constructor() {
                    this.map = [];
                }
            };

            root.Resources.values.Markup = class {
                constructor() {
                    this.markup = [];
                }
            };

            root.Resources.values.Matrix = class {
                constructor() {
                    this.matrix = [];
                }
            };

            root.Resources.values.MatrixBox = class {
                constructor() {
                    this.matrixBox = [];
                }
            };

            root.Resources.values.Node = class {
                constructor() {
                    this.node = [];
                }
            };

            root.Resources.values.Number = class {
                constructor() {
                    this.number = [];
                }
            };

            root.Resources.values.Queue = class {
                constructor() {
                    this.queue = [];
                }
            };

            root.Resources.values.Sequence = class {
                constructor() {
                    this.sequence = [];
                }
            };

            root.Resources.values.Set = class {
                constructor() {
                    this.set = [];
                }
            };

            root.Resources.values.Stack = class {
                constructor() {
                    this.stack = [];
                }
            };

            root.Resources.values.String = class {
                constructor() {
                    this.string = [];
                }
            };

            root.Resources.values.Tree = class {
                constructor() {
                    this.tree = [];
                }
            };

            return root.Resources.values;
        },

        "disableResources": function() {
            return Settings.disableResources();
        }
    }
}

Settings.disableResources = function() {
    if (root.Resources) {
        root.Resources = undefined;
    }

    return {
        "Resources": function() {
            return root.Resources;
        },

        "disableResources": function() {
            return Settings.disableResources();
        }
    }
}
