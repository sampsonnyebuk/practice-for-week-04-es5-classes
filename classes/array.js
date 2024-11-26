Array.prototype.isEqual = function (otherArray) {
    // Check if the argument is an array
    if (!Array.isArray(otherArray)) {
      return false;
    }

    // Check if lengths are the same
    if (this.length !== otherArray.length) {
      return false;
    }

    // Compare elements one by one
    for (let i = 0; i < this.length; i++) {
      if (this[i] !== otherArray[i]) {
        return false;
      }
    }

    return true; // All elements match
  };
