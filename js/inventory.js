$(document).ready(function () {
	var hero = getHero();
	var currentBorderColor;


	filling();

	function filling() {

		var liInven = $("ul li.inventories_item");
		var currentClass;
		var liImg;
		hero.clotheAttack = 0;
		hero.clotheHealth = 0;
		hero.clotheArmor = 0;

		for (var i = 0; i < liInven.length; i++) {

			currentClass = $(liInven[i]).attr('class');
			currentClass = currentClass.split(' ');
			currentClass = currentClass[currentClass.length - 1];

			liImg = $("li." + currentClass + " img");

			for (var j = 0; j < liImg.length; j++) {
				$(liImg[j]).attr("title", eval("hero.inventory." + currentClass + "[" + j + "].alt"));
				$(liImg[j]).attr("value", j);

				if (eval("hero.inventory." + currentClass + "[" + j + "].isAvailable")) {
					if (eval("hero.inventory." + currentClass + "[" + j + "].src") != eval("hero.clothes." + currentClass + ".src")) {
						$(liImg[j]).css("border-color", "#27AE60");
					} else {
						$(liImg[j]).css("border-color", "#F39C12");
						$(liImg[j]).attr("isdressed", "true");
						hero.clotheAttack += eval("hero.clothes." + currentClass + ".attack");
						hero.clotheHealth += eval("hero.clothes." + currentClass + ".health");
						hero.clotheArmor += eval("hero.clothes." + currentClass + ".armor");
						$("img.d" + currentClass).attr("src", eval("hero.clothes." + currentClass + ".src"));
						$("img.d" + currentClass).attr("alt", eval("hero.clothes." + currentClass + ".alt"));
						$("img.d" + currentClass).attr("title", eval("hero.clothes." + currentClass + ".alt"));
					}
				} else {
					$(liImg[j]).css("border-color", "#E74C3C");
				}
			}
		}

		setHero(hero);

		linearBar(".level-bar .band", ".level-bar .experience", ".level-bar .band-max", hero.currentPoints, ".level-bar .band-now", hero.points);
	}

	$(".inventories_item img").click(function () {
		var elementN = $(this).attr("value");
		var element = $(this).attr("alt");
		$("li." + element + " img[isdressed='true']").removeAttr("isdressed");

		//		if (eval("hero.inventory." + element + "[" + elementN + "].isAvailable") {
		//			hero.clothes[element].src = eval("hero.inventory." + element + "[" + elementN + "].src");
		//			hero.clothes[element].health = eval("hero.inventory." + element + "[" + elementN + "].health");
		//			hero.clothes[element].attack = eval("hero.inventory." + element + "[" + elementN + "].attack");
		//			hero.clothes[element].armor = eval("hero.inventory." + element + "[" + elementN + "].armor");
		//			filling();
		//		}
		
		if (hero.inventory[element][elementN].isAvailable) {
			hero.clothes[element].src = hero.inventory[element][elementN].src;
			hero.clothes[element].health = hero.inventory[element][elementN].health;
			hero.clothes[element].attack = hero.inventory[element][elementN].attack;
			hero.clothes[element].armor = hero.inventory[element][elementN].armor;
			filling();
		}
	});

	console.log("FULFILLED \"training.js!\"");
});
