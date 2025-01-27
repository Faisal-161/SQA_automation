class ProductPage {
    constructor(page) {
      this.page = page;
      this.menCategory = page.locator('a[href="#Men"]');
      this.jeansOption = page.locator('a[href="/category_products/3"]'); // Adjust selector
      this.productQuantityField = page.locator('input[name="quantity"]');
      this.addToCartButton = page.locator('button[class="btn btn-default cart"]');
    }
  
    async selectMenCategory() {
      await this.menCategory.click();
    }
  
    async selectJeans() {
      await this.jeansOption.click();
    }
  
    async updateProductQuantity(quantity) {
      await this.productQuantityField.fill(String(quantity));
      await this.addToCartButton.click();
    }
  }
  
  module.exports = ProductPage;
  