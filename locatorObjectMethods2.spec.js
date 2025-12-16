import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });
  test("innerText(): retrives the visible text", async ({ page }) => {
    let headerElement = page.locator(
      "//span[@class='h1y' and text()='Test Automation Practice']"
    );

    let actualText = await headerElement.innerText();
    console.log(actualText);
  });

  test("inputValue(): only works with <input>, <textarea>, <select>, retrives with input value", async ({
    page,
  }) => {
    let inputLink = page.getByText("Inputs");
    await inputLink.click();
    let inputBox = page.locator("//input[@type='number']");
    await page.waitForTimeout(3000);

    await inputBox.fill("123");
    await page.waitForTimeout(3000);

    //return the value from inputBox
    let actualImput = await inputBox.inputValue();
    console.log(actualImput);
  });

  test("getAttribute(): retrives the atribute value", async ({ page }) => {
    let abTestingLink = page.locator("text='A/B Testing'");
    let hrefLink = await abTestingLink.getAttribute("href");
    console.log(hrefLink);
  });
});
