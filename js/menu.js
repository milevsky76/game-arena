$(document).ready(function () {
	var hero = getHero();
	
	if (hero.zid != "8D86341404A29C76AAB264B9E191B4A1") {
		$("li.continue-game").css("display", "none");
	}

	$(".new-game__link").click(function () {
		clearLocalStorage();
		$(this).attr("href", "characteristics.html");
	});

	$(".continue-game__link").click(function () {
		$(this).attr("href", "characteristics.html");
	});

	console.log("ВЫПОЛНЕН \"menu.js!\"");
});
