$(document).ready(function () {
	var hero = getHero();
	var completingQuest = false;
	var currentQuest = hero.currentQuest;

	filling();

	function filling() {
		if (currentQuest >= hero.quests.length) {
			completingQuest = true;
			$(".journeys").text("Квестов пока нету, но вы держитесь!");
		}

		if (!completingQuest) {
			quest();
		}

		while (hero.points >= 1000) {
			hero.points -= 1000;
			hero.level++;
			hero.freePoints++;
			hero.money += 150;
			alert("Вы перешли на новый уровень!");
		}

		linearBar(".level-bar .band", ".level-bar .experience", ".level-bar .band-max", hero.currentPoints, ".level-bar .band-now", hero.points);

		setHero(hero);
	}

	function quest() {
		$(".journeys").attr("currentquest", currentQuest);
		$(".journeys").attr("accepted", hero.quests[currentQuest].accepted);

		$(".journeys").text(hero.quests[currentQuest].Text1 + hero.name + hero.quests[currentQuest].Text2);

		$(".journeys-f-text").text(hero.quests[currentQuest].acceptF.btn);
		$(".journeys-t-text").text(hero.quests[currentQuest].acceptT.btn);
	};

	$(".journeys-f").click(function () {
		if (!completingQuest) {
			$(".journeys").text(hero.quests[currentQuest].acceptF.text);
			completingQuest = true;
			filling();
		}
	});

	$(".journeys-t").click(function () {
		if (!completingQuest) {
			if (Math.random() < hero.quests[currentQuest].acceptT.coeff) {
				$(".journeys").text(hero.quests[currentQuest].acceptT.a.text);
				hero.money += hero.quests[currentQuest].acceptT.a.money;
				hero.points += hero.quests[currentQuest].acceptT.a.points;
				completingQuest = true;
				hero.currentQuest++;
			} else {
				$(".journeys").text(hero.quests[currentQuest].acceptT.b.text);
				hero.money += hero.quests[currentQuest].acceptT.b.money;
				hero.points += hero.quests[currentQuest].acceptT.b.points;
				completingQuest = true;
				hero.currentQuest++;
			}
			filling();
		}
	});

	console.log("ВЫПОЛНЕН \"journey.js!\"");
});
