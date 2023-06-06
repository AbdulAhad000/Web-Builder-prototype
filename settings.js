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
    Settings.Extracts = {};

    return {
        // Get the extracts object
        "Extracts": function() {
            return Settings.Extracts;
        },

        // Clear the extracts object
        "clearExtracts": function() {
            Settings.Extracts = {};
            return Settings.Extracts;
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
    if (Settings.Extracts) {
        Settings.Extracts = undefined;
    }

    return {
        // Get the extracts object
        "Extracts": function() {
            return Settings.Extracts;
        },

        // Clear the extracts object
        "clearExtracts": function() {
            Settings.Extracts = {};
            return Settings.Extracts;
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
    Settings.Resources = {
        "values": {}
    };

    return {
        // Get the resources values object
        "Resources": function() {
            // Define various classes for different data types
            values.Array = class {}
            values.Bool = class {}
            values.CSS = class {}
            values.Date = class {}
            values.HTML = class {}
            values.Item = class {}
            values.Map = class {}
            values.Markup = class {}
            values.Matrix = class {}
            values.MatrixBox = class {}
            values.Node = class {}
            values.Number = class {}
            values.Queue = class {}
            values.Sequence = class {}
            values.Set = class {}
            values.String = class {}
            values.Tree = class {}
            
            return Resources.values;
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
    if (Settings.Resources) {
        Settings.Resources = undefined;
    }

    return {
        // Get the resources object
        "Resources": function() {
            return Settings.Resources;
        },

        // Disable resources and return the updated object
        "disableResources": function() {
            return Settings.disableResources();
        }
    }
}
