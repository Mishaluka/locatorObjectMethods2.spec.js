# locatorObjectMethods2.spec.js
This Playwright test suite titled “Test Group” focuses on validating various locator-based element interaction methods, specifically those used to retrieve values and attributes from elements on the Cydeo Practice Site . The suite demonstrates how to use core locator methods to inspect and verify content and input values on a webpage.

🧪 What This Test File Covers
# 1. innerText() - Retrieving Visible Text from DOM
Navigates to the homepage.
Locates a span element containing the text “Test Automation Practice”.
Extracts and logs the visible text using innerText().
📌 Purpose: Ensures the element contains the expected visible string on the page.

# 2. inputValue() - Reading Input Box Values
Clicks on the "Inputs" link to navigate to the number input field.
Fills the input field with the number "123".
Retrieves the typed value using inputValue().
📌 Purpose: Confirms the test can read actual values entered into an <input> element.

# 3. getAttribute() - Getting Element Attributes
Locates the "A/B Testing" link.
Extracts the value of the href attribute.
📌 Purpose: Validates the ability to inspect and assert HTML attributes of elements (e.g., links or form fields).

# 🛠️ Technologies Used
Playwright (JavaScript/TypeScript)
Assertions via standard logging (console.log)
XPath and text locators

# ✅ Use Case
These tests are useful for:
Understanding Playwright’s .locator() chain methods
Testing how to interact with and verify UI elements beyond just clicking and typing
Beginners practicing Playwright for input handling and attribute verification
