$(document).ready(function () {
	var hero = getHero();


	var maxhpPl = hero.health + hero.coefHealth + hero.clotheHealth;
	var hpPl = maxhpPl;
	var demPl = hero.attack + hero.coefAttack + hero.clotheAttack;
	var armPl = hero.armor + hero.coefArmor + hero.clotheArmor;

	var maxhpAI = Math.round(Math.random() * (maxhpPl - hero.health) + hero.health);
	var hpAI = maxhpAI;
	var demAI = Math.round(Math.random() * (demPl - hero.attack) + hero.attack);
	var armAI = Math.round(Math.random() * (armPl - hero.armor) + hero.armor);

	//	console.log("ЖИЗНИ КОМПЬЮТЕРА : " + hpAI);
	//	console.log("ЖИЗНИ ИГРОКА : " + hpPl);

	filling();

	$(".button_step").click(function () {
		//Запись выбора игрока
		var attaPl = $(".button_attack[focus='a']").attr('value');
		var protPl = $(".button_protection[focus='p']").attr('value');

		if (hpPl > 0 && hpAI > 0 && attaPl && protPl) {
			//Рандом компьютера
			var attaAI = Math.floor(Math.random() * 3);
			var protAI = Math.floor(Math.random() * 3);

			//Атака игрока против защиты компьютера
			if (attaPl != protAI) {
				hpAI -= demPl;
			} else if (attaPl == protAI) {
				// && armAI < demPl
				//hpAI -= Math.abs(armAI - demPl);
				//console.log("Твоя атака была заблокирована");
			}

			//Атака компьютера против защиты игрока
			if (attaAI != protPl) {
				hpPl -= demAI;
				//console.log("Компьютер атаковал тебя : " + attaAI);
			} else if (attaAI == protPl) {
				// && armPl < demAI
				//hpPl -= Math.abs(armPl - demAI);
				//console.log("Атака компьютера была заблокирована");
			}

			//Обновить хп, информацию
			filling();
			//Очистить нажатые клавиши
			//Если игра закончилась вывести окно

			//Обновить опыт
		}
	});

	function filling() {
		if (hpPl <= 0 || hpAI <= 0) {
			if (hpPl <= 0 && hpAI <= 0) {
				$(".game_item_info").text("Ничия " + "\n" + "[+100 опыта +10 монет]");
				hero.points += 100;
				hero.money += 10;
			} else if (hpPl <= 0) {
				$(".game_item_info").text("Выиграл компьютер" + "\n" + "[+50 опыта +5 монет]");
				hero.points += 50;
				hero.money += 5;
			} else if (hpAI <= 0) {
				$(".game_item_info").text("Выиграл игрок" + "\n" + "[+200 опыта +20 монет]");
				hero.points += 200;
				hero.money += 20;
			}
		}

		linearBar(".game_item_left .hp-bar .band", ".game_item_left .hp-bar .experience", ".game_item_left .hp-bar .band-max", maxhpPl, ".game_item_left .hp-bar .band-now", hpPl);
		linearBar(".game_item_right .hp-bar .band", ".game_item_right .hp-bar .experience", ".game_item_right .hp-bar .band-max", maxhpAI, ".game_item_right .hp-bar .band-now", hpAI);

		while (hero.points >= 1000) {
			hero.points -= 1000;
			hero.level++;
			hero.freePoints++;
			alert("Вы перешли на новый уровень!");
		}

		linearBar(".level-bar .band", ".level-bar .experience", ".level-bar .band-max", hero.currentPoints, ".level-bar .band-now", hero.points);

		$('.level').text(hero.level);

		setHero(hero);
	}

	console.log("FULFILLED \"arena.js!\"");
});
