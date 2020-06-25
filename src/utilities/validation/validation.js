// export a global handler check for empty ness across numerous types
export var isEmpty =  value => value == null || false || (typeof value === "object" && Object.keys(value).length === 0) ||  (typeof value === "string" && value.trim().length === 0);
export var containsInteger =  value => value.match(/\d+/g);
