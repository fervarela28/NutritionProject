
//what needs to happen???
//Understand the user's flow!!

/*
The user will be wanting to:
1) create his initial meal then
2) adjust certain items with that meal to see how various toppings affect the meal as a whole
3) see what happens when toppings stay constant but the form of the meal changes (this is only possible amongst burritos and quesidillas)


//every time a thing is changed, re calculate everything
// only when changing between quesidellas and burritos are values stored (and the cheese option shown)

itemForm---> what's on it ---> cal,carb, pro, fat

*/

// START Anna's data ===============================================================


var bigDictionary = {"chicken" : { 
						taco: { calories:149, protein:29, carbs:0, fat:3 },
			regularBurrito: { calories:186, protein:37, carbs:0, fat:4 },
			superBurrito: { calories:309, protein:61, carbs:0, fat:7 },
			regularQuesadilla: { calories:186, protein:37, carbs:0, fat:4 },
			superQuesadilla: { calories:309, protein:61, carbs:0, fat:7 },
			mexicanPlate: { calories:353, protein:70, carbs:0, fat:8 }
		}

,"steak" : { 
						taco: { calories:179, protein:24, carbs:0, fat:9 },
			regularBurrito: { calories:224, protein:30, carbs:0, fat:12 },
			superBurrito: { calories:372, protein:49, carbs:0, fat:19 },
		regularQuesadilla: { calories:224, protein:30, carbs:0, fat:12 },
		superQuesadilla: { calories:372, protein:49, carbs:0, fat:19 },
		mexicanPlate: { calories:425, protein:57, carbs:0, fat:22 }
		}

,"carnitas" : { 
						taco: { calories:160, protein:21, carbs:0, fat:9 },
			regularBurrito: { calories:200, protein:26, carbs:0, fat:11 },
			superBurrito: { calories:332, protein:43, carbs:0, fat:18 },
			mexicanPlate: { calories:380, protein:49, carbs:0, fat:20 },

			regularQuesadilla: { calories:200, protein:26, carbs:0, fat:11 },
			superQuesadilla: { calories:332, protein:43, carbs:0, fat:18 }
		}

,"vegetables" : { 
						taco: { calories:92, protein:5, carbs:15, fat:1 },
			regularBurrito: { calories:116, protein:7, carbs:19, fat:1 },
			superBurrito: { calories:192, protein:11, carbs:32, fat:2 },
			mexicanPlate: { calories:220, protein:13, carbs:36, fat:3 },

			regularQuesadilla: { calories:116, protein:7, carbs:19, fat:1 },
			superQuesadilla: { calories:192, protein:11, carbs:32, fat:2 }
		}

,"mexRice" : { 
						taco: { calories:16, protein:0, carbs:3, fat:0 },
			regularBurrito: { calories:97, protein:2, carbs:21, fat:1 },
			superBurrito: { calories:194, protein:4, carbs:41, fat:2 },
			mexicanPlate: { calories:233, protein:4, carbs:50, fat:2 },

			regularQuesadilla: { calories:97, protein:2, carbs:21, fat:1 },
			superQuesadilla: { calories:194, protein:4, carbs:41, fat:2 }
		}

// ,"vegRice" : mexRice //for now this will be the same as mexRice

,"pintoBeans" : { 
						taco: { calories:92, protein:6, carbs:17, fat:0 },
			regularBurrito: { calories:119, protein:7, carbs:22, fat:0 },
			superBurrito: { calories:181, protein:11, carbs:33, fat:1 },
			mexicanPlate: { calories:208, protein:13, carbs:38, fat:1 },

			regularQuesadilla: { calories:119, protein:7, carbs:22, fat:0 },
			superQuesadilla: { calories:181, protein:11, carbs:33, fat:1 }
		}

,"blackBeans" : { 
						taco: { calories:66, protein:4, carbs:12, fat:0 },
			regularBurrito: { calories:87, protein:6, carbs:15, fat:0 },
			superBurrito: { calories:131, protein:8, carbs:23, fat:1 },
			mexicanPlate: { calories:152, protein:10, carbs:27, fat:1 },

			regularQuesadilla: { calories:87, protein:6, carbs:15, fat:0 },
			superQuesadilla: { calories:131, protein:8, carbs:23, fat:1 }
		}

,"refBeans" : { 
						taco: { calories:39, protein:2, carbs:6, fat:1 },
			regularBurrito: { calories:52, protein:3, carbs:8, fat:1 },
			superBurrito: { calories:78, protein:5, carbs:13, fat:1 },
			mexicanPlate: { calories:90, protein:5, carbs:15, fat:1 },

			regularQuesadilla: { calories:52, protein:3, carbs:8, fat:1 },
			superQuesadilla: { calories:78, protein:5, carbs:13, fat:1 }
		}

,"lettuce" : { 
						taco: { calories:2, protein:0, carbs:0, fat:0 },
			regularBurrito: { calories:3, protein:0, carbs:1, fat:0 },
			superBurrito: { calories:6, protein:0, carbs:1, fat:0 },
			mexicanPlate: { calories:7, protein:1, carbs:1, fat:0 },

			regularQuesadilla: { calories:3, protein:0, carbs:1, fat:0 },
			superQuesadilla: { calories:6, protein:0, carbs:1, fat:0 }
		}

// ,"picoDeGallo" : lettuce;

,"guacomole" : { 
						taco: { calories:34, protein:0, carbs:2, fat:3 },
			regularBurrito: { calories:58, protein:1, carbs:3, fat:5 },
			superBurrito: { calories:96, protein:1, carbs:5, fat:8 },
			mexicanPlate: { calories:127, protein:1, carbs:7, fat:10 },

			regularQuesadilla: { calories:58, protein:1, carbs:3, fat:5 },
			superQuesadilla: { calories:96, protein:1, carbs:5, fat:8 }
		}

,"sourCream" : { 
						taco: { calories:30, protein:0, carbs:1, fat:3 },
			regularBurrito: { calories:50, protein:1, carbs:1, fat:5 },
			superBurrito: { calories:81, protein:1, carbs:1, fat:8 },
			mexicanPlate: { calories:107, protein:1, carbs:2, fat:11 },

			regularQuesadilla: { calories:50, protein:1, carbs:1, fat:5 },
			superQuesadilla: { calories:81, protein:1, carbs:1, fat:8 }
		}

,"cheese" : { 

			regularBurrito: { calories:81, protein:6, carbs:1, fat:6 },
			superBurrito: { calories:162, protein:12, carbs:1, fat:12 },

			regularQuesadilla: { calories:162, protein:12, carbs:1, fat:12 },
			superQuesadilla: { calories:324, protein:24, carbs:2, fat:24 }

		}

,"flourTortilla" : { 
			regularBurrito: { calories:213, protein:6, carbs:36, fat:5 },
			superBurrito: { calories:347, protein:10, carbs:59, fat:8 },

			regularQuesadilla: { calories:213, protein:6, carbs:36, fat:5 },
			superQuesadilla: { calories:347, protein:10, carbs:59, fat:8 }
		}

,"wheatTortilla" : { 
			regularBurrito: { calories:217, protein:6, carbs:36, fat:6 },
			superBurrito: { calories:353, protein:9, carbs:59, fat:9 },

			regularQuesadilla: { calories:217, protein:6, carbs:36, fat:6 },
			superQuesadilla: { calories:353, protein:9, carbs:59, fat:9 }
		}

,"cornTortilla" : { 
			taco: { calories:90, protein:2, carbs:18, fat:1 }
		}
}
// END Anna's data===============================================================



/*
Cheese and tortilla have to be prefilled based on what user is ordering
--tortilla should only have "corn" as an option if the user is choosing a taco
--tortilla should only have "flour" and "wheat" as options if the user is choosing a quesidilla or bowl
--tortilla should have no options if the user is choosing a mexican plate

--cheese should only be an option if the user is getting a burrito or a quesidilla
*/

// START FUNCTIONS that handle use information from user
var globalCalories = 0;
var globalCarbs = 0;
var globalFat = 0;
var globalProtein = 0;
var ingredientsList = []

function selectDefaultItem()
{
	document.getElementById("defaultItem").childNodes[0].checked = true;
	getMealType();
}

function addIngredientToMeal(ingredient)
{
	for (i = 0; i < ingredientsList.length; i++)
	{
		if (ingredientsList[i] == ingredient)
		{
			return;
		}
	}
	ingredientsList.push(ingredient);
	updateNutritionNumbers(ingredientsList);
}

function removeIngredientFromMeal(ingredient)
{
	if (ingredientsList.length == 1){
		ingredientsList = [];
		updateNutritionNumbers(ingredientsList);
		return;
	}
	for (i = 0; i < ingredientsList.length; i++)
	{
		if (ingredientsList[i] == ingredient)
		{
			ingredientsList.splice(i,1);
		}
	}
	updateNutritionNumbers(ingredientsList);
}

function updateNutritionNumbers(ingredientsList)
{
	globalCalories = 0;
	globalCarbs = 0;
	globalFat = 0;
	globalProtein = 0;
	ingredientsList.forEach(function(ingredient){
	var ingredientDictionary = bigDictionary[ingredient];
	var nutritionDictionary = ingredientDictionary[mealType];


	
	globalCalories += nutritionDictionary.calories;
	globalFat += nutritionDictionary.fat;
	globalCarbs += nutritionDictionary.carbs;
	globalProtein += nutritionDictionary.protein;
	
	
	
	$("#caloriesIndicator").html("Calories (g): "+globalCalories);
	$("#proteinIndicator").html("Protein (g): "+globalProtein);
	$("#carbsIndicator").html("Carbs (g): "+globalCarbs);
	$("#fatIndicator").html("Fat (g): "+globalFat);
});
}

// function getIngredientsNutritionDictionary(ingredient)
// //returns a dictionary of cals, carbs, fats, and prot based on meal type
// {
	
// 		// console.log(window[ingredient]);
// 	for (var i = 0; i < ingredientsList.length; i++)
// 	{
// 		var ingredientDictionary[mealtType];
// 	}
// }

// END FUNCTIONS that handle use information from user

// FUNCTIONS that collect data from HTML
var mealType;


function getMealType(element)
{
	mealType = element.value;
	globalCalories = 0;
	globalCarbs = 0;
	globalFat = 0;
	globalProtein = 0;
	updateNutritionNumbers(ingredientsList);

}

function updateIngredientsList(element)
{
	if (element.checked == true){
			addIngredientToMeal(element.value);
	} else{
			removeIngredientFromMeal(element.value);
	}
		
	
}
// END FUNCTIONS that collect data from HTML



