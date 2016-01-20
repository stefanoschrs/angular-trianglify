# Angular Wrapper for Trianglify.js

## Prerequisites
Download **angular-trianglify**, **angular**, **trianglify**
* Using bower  
`bower install --save angular-trianglify angular trianglify`
* Or if you are into reinventing the wheel you can download all them manually from their repositories :)

## How to use
1) Load the 3 scripts  
```html  
	<script src="bower_components/trianglify/dist/trianglify.min.js"></script>  
	<script src="bower_components/angular/angular.min.js"></script>  
	<script src="bower_components/angular-trianglify/angular-trianglify.min.js"></script>  
</body>  
```  
2) Add **angular-trianglify** as a dependency to your angular module  
```javascript  
	angular.module('MyModule', ['stefanoschrs.angular-trianglify']);  
```  
3) Add the **trianglify** attribute to the div you want the background to be placed  
```html  
<body trianglify>  
```

## Examples
You can find examples of the usage in the `examples` folder

## Releases
### *0.0.1*
* Basic usecase that adds random triangle patterns as background image to the element you apply this to

## TODO
* Allow the user to pass options
* Add more examples/ usecases