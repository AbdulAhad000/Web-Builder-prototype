// Define the root object to store the global context
const root = {"Item":class{}};

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
    root.Resources = {
        "values": {}
    };

    return {
        // Get the resources values object
        "Resources": function() {
            // Define various classes for different data types
            root.Resources.values.Array = class {};
            root.Resources.values.Bool = class {};
            root.Resources.values.CSS = class {};
            root.Resources.values.Date = class {};
            root.Resources.values.HTML = class {};
            root.Resources.values.Map = class {};
            root.Resources.values.Markup = class {};
            root.Resources.values.Matrix = class {};
            root.Resources.values.MatrixBox = class {};
            root.Resources.values.Node = class {};
            root.Resources.values.Number = class {};
            root.Resources.values.Queue = class {};
            root.Resources.values.Sequence = class {};
            root.Resources.values.Set = class {};
            root.Resources.values.Stack = class {};
            root.Resources.values.String = class {};
            root.Resources.values.Tree = class {};

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
