class ContactUsPage {
    constructor(page) {
      this.page = page;
      this.nameField = page.locator('input[data-qa="name"]');
      this.emailField = page.locator('input[data-qa="email"]');
      this.subjectField = page.locator('input[data-qa="subject"]');
      this.messageField = page.locator('textarea[data-qa="message"]');
      this.fileUpload = page.locator('input[type="file"]');
      this.submitButton = page.locator('button[data-qa="submit-button"]');
    }
  
    async navigate() {
      await this.page.goto('https://automationexercise.com/contact_us');
    }
  
    async submitForm(name, email, subject, message, filePath) {
      await this.nameField.fill(name);
      await this.emailField.fill(email);
      await this.subjectField.fill(subject);
      await this.messageField.fill(message);
      await this.fileUpload.setInputFiles(filePath);
      await this.submitButton.click();
    }
  }
  
  module.exports = ContactUsPage;
  