Feature: Order History Validation

  @Regression
  Scenario Outline: Validate Order History
    Given login to Ecommerce application with "<username>" and "<password>"
    When Add "<product>" to Cart
    Then Verify "<product>" is displayed in the Cart
    When Enter valid details and Place the Order
    Then Verify order is present in the OrderHistory

    Examples:
      | username                 | password    | product     |
      | aashikahamed.m@gmail.com | Abcde@12345 | ZARA COAT 3 |
  @Negative
  Scenario Outline: Negative Scenario for login
    Given login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed

    Examples:
      | username                 | password    |
      | aashikahamed.m@gmail.com | Abcde@12345 |
