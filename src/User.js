import DOMupdates from '../src/DOMupdates.js';

class User {
  constructor(userData) {
    this.userData = userData;
    this.name = undefined;
    this.id = undefined;
  }

  findUser(name) {
    let user = this.userData
      .find(user => user.name.toUpperCase() === name.toUpperCase());
    if (this.name !== undefined && name.toUpperCase() === this.name.toUpperCase()) {
      DOMupdates.displayUserAlreadySelected()
    } else if (user) {
      this.name = user.name;
      this.id = user.id;
      DOMupdates.displayUser(this.name);
    } else {
      this.name = undefined;
      DOMupdates.displayUserReset()
      DOMupdates.displayUserNotFound();
    }
  }

  checkAddUser(name) {
    let capitalizedNames = this.userData.map(user => user.name.toUpperCase());
    if (capitalizedNames.includes(name.toUpperCase())) {
      DOMupdates.displayUserAlreadyExists()
    } else if (name.split(' ').length < 2) {
      DOMupdates.displayEnterFullName();
    } else {
      this.addUser(name);
    }
  }

  addUser(name) {
    let fixedName = name.toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
    this.name = fixedName;
    this.id = this.totalUsers;
    this.userData.push({ id: this.userData.length + 1, name: this.name })
    DOMupdates.displayUser(this.name);
  }
}

export default User;