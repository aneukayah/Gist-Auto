Feature: Gist Create Edit Delete
	Scenario Outline: Create Public gist
		Given Go to gist websites
		And User input
			|Email | <Email>|
			|Password | <Password>|
		And User at gist page
		And Fill
			|description | <description>|
			|filename | <filename>|
			|body | <body>|
		Then User Click Create Public gist button
		And User Click Edit button
		And Fill Edit
			|editdesc | <editdesc>|
			|editbody | <editbody>|
		And User Click Delete button
		And User confirm delete
		Then User see all gist

		Examples:
			| Email  			| Password 		| description	| filename	| body	  | editdesc	| editbody	|
			| githubid		    | pass			| cobaaja123	| test.xml	| sendiri | 00edit	| editaja |