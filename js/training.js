$(document).ready(function () {
	var hero = getHero();

	filling();

	function filling() {
		rADNg();
		$("input[stat=attack]").val(hero.attack + hero.coefAttack + hero.clotheAttack);
		$("input[stat=health]").val(hero.health + hero.coefHealth + hero.clotheHealth);
		$("input[stat=armor]").val(hero.armor + hero.coefArmor + hero.clotheArmor);
		$("input[stat=mana]").val(hero.mana + hero.coefMana);
		$("input[stat=mDam]").val(hero.magicDamage + hero.coefMagicDamage);

		$("span[stat=moneyTraining]").text(hero.money);

		setHero(hero);
	}

	$(".training_item .trainingBtn").click(function () {
		if ($(this).attr("cost") <= hero.money) {
			var currentAttribute = $(this).attr("nameAttr");
			var currentAdd = $(this).attr("attr");
			hero[currentAttribute] += currentAdd - 0;
			hero.money -= $(this).attr("cost");
		}

		filling();
	});

	function rADNg() {
		var trainingBtn = $(".training_item .trainingBtn");
		var costTraining = $(".training_item .costTraining");

		for (i = 0; i < trainingBtn.length; i++) {
			if ($(trainingBtn[i]).attr("cost") > hero.money) {
				$(costTraining[i]).css("background-color", "#E74C3C");
			} else {
				$(costTraining[i]).css("background-color", "#27AE60");
			}
		}
	}

	console.log("FULFILLED \"training.js!\"");
});
