Feature: Error Validation
@Negative

		Scenario Outline: Negative Scenario for login
		Given login to Ecommerce2 application with "<username>" and "<password>"
		Then Verify Error message is displayed

		 Examples:
          | username    	  		 | 	password     |
          | aashikahamed.m@gmail.com | Abcde@12345   |
		  | aashik@gmail.com 		 | Abcde@12345   |