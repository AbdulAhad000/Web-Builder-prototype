const Settings = {};
const Extracts = function() {
    return Settings.enableExtracts().Extracts();
}
Settings.enableExtracts = function() {
    Settings.Extracts = {};
    return {
        "Extracts":function() {
            return Settings.Extracts
        },
        "clearExtracts":function() {
            Settings.Extracts = {}; return Settings.Extracts;
        },
        "disableExtracts":function() {
            return Settings.disableExtracts()}}
}
Settings.disableExtracts = function() {
    if (Settings.Extracts) {
        Settings.Extracts = undefined;
    }
    return {
        "Extracts":function() {
            return Settings.Extracts
        },
        "clearExtracts":function() {
            Settings.Extracts = {}; return Settings.Extracts;
        },
        "disableExtracts":function() {
            return Settings.disableExtracts()}}
}
const Resources = function() {
    return Settings.enableResources().Resources()};
Settings.enableResources = function() {
    Settings.Resources = {
        "values": {}};
    return {
        "Resources":function() {
            values.Item = class {
                
            };
            values.Bool = class {
                
            }
            values.String = class {
                
            }
            values.Array = class {
                
            }
            values.Map = class = {
                
            }
            values.Set = class = {
                
            }
            return Resources.values;
        },
        "disableResources":function() {
            return Settings.disableResources()}}};
Settings.disableResources = function() {
    if (Settings.Resources) {
        Settings.Resources = undefined;
    }
    return {
        "Resources":function() {
            return Settings.Resources
        },
        "disableResources":function() {
            return Settings.disableResources()}}};