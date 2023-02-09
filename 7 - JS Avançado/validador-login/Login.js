export class Login {
  constructor(usernameString, passwordString) {
    const fixedUsername = usernameString.replace(/\s/g, "");
    const fixedPassword = passwordString.replace(/\s/g, "");
    this.usernameString = {
      firstHalf: fixedUsername.match(/\w+(?=@)/)?.[0],
      secondHalf: fixedUsername.match(/(?<=@)\w+/)?.[0],
      afterDot: fixedUsername.match(/(?<=\.)\w+/)?.[0],
    };
    this.passwordString = {
      someUpper: fixedPassword.match(/[a-z]/)?.[0],
      someLower: fixedPassword.match(/[A-Z]/)?.[0],
      someNumber: fixedPassword.match(/\d+/)?.[0],
    };
  }
  usernameStringHaveAnyUndefined() {
    const thisUsername = this.usernameString;
    if (
      thisUsername.firstHalf == undefined ||
      thisUsername.secondHalf == undefined ||
      thisUsername.afterDot == undefined
    ) {
      return true;
    } else {
      return false;
    }
  }

  passwordStringHaveAnyUndefined() {
    const thisPassword = this.passwordString;
    if (
      thisPassword.someUpper == undefined ||
      thisPassword.someLower == undefined ||
      thisPassword.someNumber == undefined
    ) {
      return true;
    } else {
      return false;
    }
  }

  usernameAccept() {
    if (!this.usernameStringHaveAnyUndefined()) {
      return `Username aceito`;

    } else {
      return `Username não aceito`;
    }
  }

  passwordAccept() {
    if (!this.passwordStringHaveAnyUndefined()) {
      return `Password aceito`;

    } else {
      return `Password não aceito`;
    }
  }
};
