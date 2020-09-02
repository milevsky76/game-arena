$(document).ready(function () {
	var hero = getHero();
	var objectType = "helm";
	var objectNumber = 0;
	var canBuy;

	filling();

	function filling() {

		var liInven = $("ul li.inventories_item");
		var currentClass;
		var liImg;

		for (var i = 0; i < liInven.length; i++) {

			currentClass = $(liInven[i]).attr('class');
			currentClass = currentClass.split(' ');
			currentClass = currentClass[currentClass.length - 1];

			liImg = $("li." + currentClass + " img");

			for (var j = 0; j < liImg.length; j++) {
				$(liImg[j]).attr("title", eval("hero.inventory." + currentClass + "[" + j + "].alt"));
				$(liImg[j]).attr("value", j);

				if (eval("hero.inventory." + currentClass + "[" + j + "].isAvailable")) {
					$(liImg[j]).css("border-color", "#27AE60");
				} else {
					$(liImg[j]).css("border-color", "#E74C3C");
				}
			}
		}

		$(".selected-item").attr("src", hero.inventory[objectType][objectNumber].src);
		$(".parameters_health-value").text(hero.inventory[objectType][objectNumber].health);
		$(".parameters_attack-value").text(hero.inventory[objectType][objectNumber].attack);
		$(".parameters_armor-value").text(hero.inventory[objectType][objectNumber].armor);
		$(".level-needed_value").text(hero.inventory[objectType][objectNumber].levelNeeded);
		$(".to-acquire_value").text(Math.round(hero.inventory[objectType][objectNumber].cost));
		$(".current-coins").text(hero.money);

		if (Math.round(hero.inventory[objectType][objectNumber].cost) <= hero.money && hero.inventory[objectType][objectNumber].levelNeeded <= hero.level) {
			canBuy = true;
			$(".to-acquire_value").css("background-color", "#27AE60");
		} else {
			canBuy = false;
			$(".to-acquire_value").css("background-color", "#E74C3C");
		}

		if (hero.inventory[objectType][objectNumber].isAvailable) {
			$(".to-acquire").css("display", "none");
			$(".purchased").css("display", "flex");
		} else {
			$(".to-acquire").css("display", "flex");
			$(".purchased").css("display", "none");
		}

		setHero(hero);

		linearBar(".level-bar .band", ".level-bar .experience", ".level-bar .band-max", hero.currentPoints, ".level-bar .band-now", hero.points);
	}

	$(".inventories_item img").click(function () {
		objectNumber = $(this).attr("value");
		objectType = $(this).attr("alt");

		filling();
	});

	$(".to-acquire").click(function () {
		if (hero.money < Math.round(hero.inventory[objectType][objectNumber].cost) && hero.level < hero.inventory[objectType][objectNumber].levelNeeded) {
			alert("Недостаточный уровень и нет монет!");
		} else if (hero.money < Math.round(hero.inventory[objectType][objectNumber].cost)) {
			alert("Нет монет!");
		} else if (hero.level < hero.inventory[objectType][objectNumber].levelNeeded) {
			alert("Недостаточный уровень!");
		} else {
			hero.money -= Math.round(hero.inventory[objectType][objectNumber].cost);
			hero.inventory[objectType][objectNumber].isAvailable = true;
			alert("Вещь куплена!");
			
			filling();
		}
	});

	$(".purchased").click(function () {
		alert("Вещь уже куплена!");
	});

	console.log("FULFILLED \"shop.js!\"");
});
