class LoginPage {
    constructor(page) {
      this.page = page;
      this.signupNameField = page.locator('input[data-qa="signup-name"]');
      this.signupEmailField = page.locator('input[data-qa="signup-email"]');
      this.signupButton = page.locator('button[data-qa="signup-button"]');
    }
  
    async navigate() {
      await this.page.goto('https://automationexercise.com/login');
    }
  
    async signUp(name, email) {
      await this.signupNameField.fill(name);
      await this.signupEmailField.fill(email);
      await this.signupButton.click();
    }
  }
  
  module.exports = LoginPage;
  