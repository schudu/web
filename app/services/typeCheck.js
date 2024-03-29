const TypeCheck = class {
  constructor(value) {
    this.value = value;
  }

  isPassword(min = 8, max = 30) {
    if (!this.value) return { where: "password", error: "missing" };

    if (typeof this.value !== "string")
      return { where: "password", error: "type" };

    if (this.value.length < min || this.value.length > max)
      return { where: "password", error: "length" };

    if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!$ %^&*-]).*$/.test(
        this.value
      )
    )
      return { where: "password", error: "format" };
  }

  isUsername() {
    if (!this.value) return { where: "username", error: "missing" };

    if (typeof this.value !== "string")
      return { where: "username", error: "type" };

    if (this.value.length < 4 || this.value.length > 30)
      return { where: "username", error: "length" };

    if (this.value.includes("@"))
      return { where: "username", error: "@symbol" };
  }

  isEmail() {
    if (!this.value) return { where: "email", error: "missing" };

    if (typeof this.value !== "string")
      return { where: "email", error: "type" };

    if (this.value.includes("@byom.de"))
      return { where: "email", error: "fake" };

    if (
      !/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/.test(
        this.value
      )
    )
      return { where: "email", error: "format" };
  }

  isName(where = "name") {
    if (!this.value) return { where: where, error: "missing" };

    if (typeof this.value !== "string") return { where: where, error: "type" };

    if (this.value.length < 2 || this.value.length > 50)
      return { where, error: "length" };

    if (!/^[a-z-]*$/i.test(this.value)) return { where, error: "format" };
  }
};

export default TypeCheck;
