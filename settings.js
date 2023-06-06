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