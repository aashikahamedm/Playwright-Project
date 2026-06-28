Feature: Greeting

		Scenario Outline: Say hello
		Given login to Ecommerce2 application with "<username>" and "<password>"
		Then Verify Error message is displayed

		 Examples:
          | username    	  | 	password  |
          | aashikahamed.m@gmail.com | Abcde@12345   |
       
       
