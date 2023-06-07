const Kit = {
  "root": {
    "Item": {
      "items": {}
    },
    "methods": function() {
      return {
        "assignGroup": function(group) {
          Object.assign(Kit.root.Item.items, {
            ...group
          });
          return Kit.root.Item.items;
        },
        "clearGroup": function(key) {
          Kit.root.Item.items[key] = {};
          return Kit.root.Item.items;
        },
        "replaceItem": function(id, value) {
          for (let group in Kit.root.Item.items) {
            if (Kit.root.Item.items.hasOwnProperty(group)) {
              const itemToUpdate = Kit.root.Item.items[group].find(
                item => item.id === id
              );
              if (itemToUpdate) {
                itemToUpdate.value = value;
                return Kit.root.Item.items;
              }
            }
          }
          return Kit.root.Item.items;
        },
        "createGroup": function(groupName, ...items) {
          return {
            [groupName]: [...items]
          };
        },
        "createItem": function(item) {
          return {
            id: item.id,
            value: item.value
          };
        },
        "getItem": function(id) {
          for (let group in Kit.root.Item.items) {
            if (Kit.root.Item.items.hasOwnProperty(group)) {
              const item = Kit.root.Item.items[group].find(
                item => item.id === id
              );
              if (item) {
                return item.value;
              }
            }
          }
          return null;
        },
        "getItemsByGroup": function(groupName) {
          return Kit.root.Item.items[groupName] || [];
        },
        "getGroup": function(groupName) {
          return Kit.root.Item.items[groupName] || {};
        },
        "pushItem": function(groupName, item) {
          Kit.root.Item.items[groupName].push(item);
        }
      };
    }
  },
  "configure": {
    "getExtracts": function(key, extracts) {
      return Kit.configure.setExtracts(key, extracts).getExtracts();
    },
    "setExtracts": function(key, extracts) {
      root.extracts = {};
      Object.assign(Kit.configure, extracts, {
        [key]: {
          ...extracts
        }
      });
      return {
        "getExtracts": function() {
          return root.extracts[key];
        }
      };
    },
    "setResource": function() {
      root.Resource = {
        values: {}
      };
      return {
        "setValue": function(key, bundle) {
          return Kit.configure.setValue(key, bundle);
        }
      };
    },
    "setBundle": function() {
      Kit.configure.setValue = function(key, bundle) {
        Object.assign(root.Resource.values, {
          [key]: {
            ...bundle
          }
        });
        return {
          "getValue": function() {
            return Kit.configure.getValue(key);
          },
          "extendBundle": function(bundle) {
            Object.assign(root.Resource.values[key], {
              ...bundle
            });
            return {
              "extendBundle": function(bundle) {
                return Kit.configure.getValue().extendBundle(bundle);
              }
            };
          }
        };
      };
      Kit.configure.getValue = function(key) {
        return root.Resource.values[key];
      };
      return {
        "setValue": function(key, bundle) {
          return Kit.configure.setValue(key, bundle);
        },
        "getValue": function(key) {
          return Kit.configure.getValue(key);
        }
      };
    }
  }
};
