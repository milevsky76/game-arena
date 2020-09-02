$(document).ready(function () {
	var hero = getHero();

	filling();

	$(".name").change(function () {
		hero.name = $(this).val();
		setHero(hero);
	});

	$(".add").click(function () {

		if (hero.freePoints > 0) {
			hero.freePoints--;
		}

		var currentAttribute = $(this).attr("stat");
		hero[currentAttribute]++;

		$(this).siblings(".remove").removeAttr('disabled');

		filling();
	});

	$(".remove").click(function () {
		var currentAttribute = $(this).attr("stat");

		if (hero[currentAttribute] > 1) {
			hero[currentAttribute]--;
			hero.freePoints++;
			if (hero.freePoints > 0) {
				$(".add").removeAttr("disabled");
			}
			if (hero[currentAttribute] == heroDefault[currentAttribute]) {
				$(this).attr("disabled", "disabled");
			}
		} else {
			$(this).attr("disabled", "disabled");
		}
		filling();
	});

	function filling() {
		if (hero.freePoints <= 0) {
			$(".add").attr("disabled", "disabled");
		}

		while (hero.points >= 1000) {
			hero.points -= 1000;
			hero.level++;
			hero.freePoints++;
			hero.money += 150;
			alert("Вы перешли на новый уровень!");
		}

		linearBar(".level-bar .band", ".level-bar .experience", ".level-bar .band-max", hero.currentPoints, ".level-bar .band-now", hero.points);

		$('.level').text(hero.level);

		$('.nameHero .initStr').val(hero.name);

		$('.strengthHero .initInt').val(hero.strength);
		if (hero.strength == heroDefault.strength) {
			$("button.remove[stat='strength']").attr("disabled", "disabled");
		}
		hero.maximumHealth = hero.strength * 2;
		hero.health = hero.maximumHealth;
		hero.attack = hero.strength * 1.5;

		$('.agilityHero .initInt').val(hero.agility);
		if (hero.agility == heroDefault.agility) {
			$("button.remove[stat='agility']").attr("disabled", "disabled");
		}
		hero.armor = hero.agility * 0.25;

		$('.intellectHero .initInt').val(hero.intellect);
		if (hero.intellect == heroDefault.intellect) {
			$("button.remove[stat='intellect']").attr("disabled", "disabled");
		}
		hero.maximumMana = hero.intellect * 2;
		hero.mana = hero.maximumMana;
		hero.magicDamage = hero.intellect * 1.5;

		$('.point').val(hero.freePoints);

		setHero(hero);
	}

	function updateColorPreviewHSV() {
		var hue = 0;
		var sat = 0;
		var light = 0;

		for (i = light; i < 101; i++) {
			var rgb = hslToRgb(hue, sat, i);
		}


		var hslText = "hsl(" + hue + "%, " + sat + "%, " + light + "%)";

		console.log(hslText);
		console.log($("body").css("background-color", (rgb.r, rgb.g, rgb.b)));
	}

	$(".characteristics__item").mouseenter(function () {
		var currentAttribute = $(this).attr("alt");
		$(".info").text(currentAttribute);
	});

	$(".characteristics__item").mouseleave(function () {
		var charInfo = "Характеристики – это совокупность всех атрибутов, параметров героя, которые определяют наносимый им урон, максимальное количество здоровья, количество очков брони. Таких атрибутов (характеристик) две: сила и ловкость. Они увеличиваются с повышением уровня героя, а также после покупок некоторых предметов.";

//		var charInfo = "Характеристики – это совокупность всех атрибутов, параметров героя, которые определяют наносимый им урон, максимальное количество здоровья и маны, количество очков брони. Таких атрибутов (характеристик) три: сила, ловкость и интеллект. Они увеличиваются с повышением уровня героя, а также после покупок некоторых предметов.";
		$(".info").text(charInfo);
	});

	$(".arena-buttons button").click(function () {
		var btnClass = $(this).attr('class');
		var masBtn = $("button." + btnClass);
		for (var i = 0; i < masBtn.length; i++) {
			$(masBtn[i]).css("background-color", "transparent");
			$(masBtn[i]).css("color", "#000000");
			$(masBtn[i]).css("fill", "#000000");
			$(masBtn[i]).removeAttr("focus");
		}
		if ($(this).hasClass("button_attack")) {
			$(this).css("background-color", "#27AE60");
			$(this).css("color", "#FCF8EC");
			$(this).css("fill", "#FCF8EC");
			$(this).attr("focus", "a");
		} else {
			$(this).css("background-color", "#F39C12");
			$(this).css("color", "#FCF8EC");
			$(this).css("fill", "#FCF8EC");
			$(this).attr("focus", "p");
		}
	});

	//	$(".button_attack[stat='attackHead']").click(function () {
	//		$(this).css("background-color", "#27AE60");
	//		$(this).css("color", "#FCF8EC");
	//		$(this).css("fill", "#FCF8EC");
	//	});
	//
	//	$(".button_protection[stat='protectionBody']").click(function () {
	//		$(this).css("background-color", "#F39C12");
	//		$(this).css("color", "#FCF8EC");
	//		$(this).css("fill", "#FCF8EC");
	//	});
	console.log("ВЫПОЛНЕН \"characteristics.js!\"");
});

function linearBar(common, line, nameMax, valueMax, nameNow, valueNow) {
	commonW = $(common).css("width").replace(/[^-\d\.]/g, '');
	line = $(line).css("width", (commonW * valueNow / valueMax));
	$(nameNow).text(valueNow);
	$(nameMax).text(valueMax);
}
