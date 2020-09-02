var costBelt = 75;
var costSword = 100;
var costShield = 125;
var costPants = 150;
var costBoots = 175;
var costChest = 200;
var costHelm = 225;

var heroDefault = {
	name: "Игрок",
	strength: 1,
	agility: 1,
	intellect: 1,

	freePoints: 0,
	level: 0,
	points: 0,
	currentPoints: 1000,
	money: 0,

	attack: 1.5,
	coefAttack: 0,
	clotheAttack: 0,
	maximumHealth: 2,
	health: 2,
	coefHealth: 0,
	clotheHealth: 0,
	armor: 0.25,
	coefArmor: 0,
	clotheArmor: 0,
	maximumMana: 2,
	mana: 2,
	coefMana: 0,
	magicDamage: 0.5,
	coefMagicDamage: 0,

	currentQuest: 0,
	quests: [
		{
			Text1: "Бывалый: Привет, ",
			Text2: ", есть работёнка для тебя, эльфы напали на аванпост белого престола, нам не хватает людей,  можешь помочь?",
			acceptF: {
				btn: "Отказаться",
				text: "Бывалый: Сдрейфил что ли, я то думал ты воин белого престола, ладно, увидимся.",
			},
			acceptT: {
				btn: "Помочь",
				coeff: 0.3,
				a: {
					text: "Бывалый: Спасибо что помог, эти эльфы бежали как трусы, ха-ха, они ещё не скоро вернуться, держи свою награду [+200 опыта, +50 монет].",
					points: 200,
					money: 50
				},
				b: {
					text: "Бывалый: Эх, не повезло, отдыхай и залечивай свои раны, мы ещё покажем этим эльфам всю мощь белого престола.",
					points: 0,
					money: 0
				}
			},
			accepted: false
		}
	],
	clothes: {
		helm: {
			src: "img/clothes/helm/helm_0.png",
			alt: "Шлем",
			health: 0,
			attack: 0,
			armor: 0
		},
		chest: {
			src: "img/clothes/chest/chest_0.png",
			alt: "Кираса",
			health: 0,
			attack: 0,
			armor: 0
		},
		belt: {
			src: "img/clothes/belt/belt_0.png",
			alt: "Пояс",
			health: 0,
			attack: 0,
			armor: 0
		},
		pants: {
			src: "img/clothes/pants/pants_0.png",
			alt: "Штаны",
			health: 0,
			attack: 0,
			armor: 0
		},
		boots: {
			src: "img/clothes/boots/boots_0.png",
			alt: "Сапоги",
			health: 0,
			attack: 0,
			armor: 0
		},
		shield: {
			src: "img/clothes/shield/shield_0.png",
			alt: "Щит",
			health: 0,
			attack: 0,
			armor: 0
		},
		sword: {
			src: "img/clothes/sword/sword_0.png",
			alt: "Меч",
			health: 0,
			attack: 0,
			armor: 0
		}
	},
	inventory: {
		helm: [
			{
				src: "img/clothes/helm/helm_0.png",
				cost: costHelm * 0,
				alt: "Шлем",
				health: 0,
				attack: 0,
				armor: 0,
				isAvailable: true,
				levelNeeded: 0
			},
			{
				src: "img/clothes/helm/helm_1.png",
				cost: costHelm * 1,
				alt: "Шлем",
				health: 1,
				attack: 1,
				armor: 1,
				isAvailable: false,
				levelNeeded: 3
			},
			{
				src: "img/clothes/helm/helm_2.png",
				cost: costHelm * 1.5,
				alt: "Шлем",
				health: 2,
				attack: 2,
				armor: 2,
				isAvailable: false,
				levelNeeded: 5
			},
			{
				src: "img/clothes/helm/helm_3.png",
				cost: costHelm * 2,
				alt: "Шлем",
				health: 3,
				attack: 3,
				armor: 3,
				isAvailable: false,
				levelNeeded: 7
			},
			{
				src: "img/clothes/helm/helm_4.png",
				cost: costHelm * 2.5,
				alt: "Шлем",
				health: 4,
				attack: 4,
				armor: 4,
				isAvailable: false,
				levelNeeded: 11
			},
			{
				src: "img/clothes/helm/helm_5.png",
				cost: costHelm * 3,
				alt: "Шлем",
				health: 5,
				attack: 5,
				armor: 5,
				isAvailable: false,
				levelNeeded: 15
			}
		],
		chest: [
			{
				src: "img/clothes/chest/chest_0.png",
				cost: costChest * 0,
				alt: "Кираса",
				health: 0,
				attack: 0,
				armor: 0,
				isAvailable: true,
				levelNeeded: 0
			},
			{
				src: "img/clothes/chest/chest_1.png",
				cost: costChest * 1,
				alt: "Кираса",
				health: 1,
				attack: 1,
				armor: 1,
				isAvailable: false,
				levelNeeded: 3
			},
			{
				src: "img/clothes/chest/chest_2.png",
				cost: costChest * 1.5,
				alt: "Кираса",
				health: 2,
				attack: 2,
				armor: 2,
				isAvailable: false,
				levelNeeded: 5
			},
			{
				src: "img/clothes/chest/chest_3.png",
				cost: costChest * 2,
				alt: "Кираса",
				health: 3,
				attack: 3,
				armor: 3,
				isAvailable: false,
				levelNeeded: 7
			},
			{
				src: "img/clothes/chest/chest_4.png",
				cost: costChest * 2.5,
				alt: "Кираса",
				health: 4,
				attack: 4,
				armor: 4,
				isAvailable: false,
				levelNeeded: 11
			},
			{
				src: "img/clothes/chest/chest_5.png",
				cost: costChest * 3,
				alt: "Кираса",
				health: 5,
				attack: 5,
				armor: 5,
				isAvailable: false,
				levelNeeded: 15
			}
		],
		belt: [
			{
				src: "img/clothes/belt/belt_0.png",
				cost: costBelt * 0,
				alt: "Пояс",
				health: 0,
				attack: 0,
				armor: 0,
				isAvailable: true,
				levelNeeded: 0
			},
			{
				src: "img/clothes/belt/belt_1.png",
				cost: costBelt * 1,
				alt: "Пояс",
				health: 1,
				attack: 1,
				armor: 1,
				isAvailable: false,
				levelNeeded: 3
			},
			{
				src: "img/clothes/belt/belt_2.png",
				cost: costBelt * 1.5,
				alt: "Пояс",
				health: 2,
				attack: 2,
				armor: 2,
				isAvailable: false,
				levelNeeded: 5
			},
			{
				src: "img/clothes/belt/belt_3.png",
				cost: costBelt * 2,
				alt: "Пояс",
				health: 3,
				attack: 3,
				armor: 3,
				isAvailable: false,
				levelNeeded: 7
			},
			{
				src: "img/clothes/belt/belt_4.png",
				cost: costBelt * 2.5,
				alt: "Пояс",
				health: 4,
				attack: 4,
				armor: 4,
				isAvailable: false,
				levelNeeded: 11
			},
			{
				src: "img/clothes/belt/belt_5.png",
				cost: costBelt * 3,
				alt: "Пояс",
				health: 5,
				attack: 5,
				armor: 5,
				isAvailable: false,
				levelNeeded: 15
			}
		],
		pants: [
			{
				src: "img/clothes/pants/pants_0.png",
				cost: costPants * 0,
				alt: "Штаны",
				health: 0,
				attack: 0,
				armor: 0,
				isAvailable: true,
				levelNeeded: 0
			},
			{
				src: "img/clothes/pants/pants_1.png",
				cost: costPants * 1,
				alt: "Штаны",
				health: 1,
				attack: 1,
				armor: 1,
				isAvailable: false,
				levelNeeded: 3
			},
			{
				src: "img/clothes/pants/pants_2.png",
				cost: costPants * 1.5,
				alt: "Штаны",
				health: 2,
				attack: 2,
				armor: 2,
				isAvailable: false,
				levelNeeded: 5
			},
			{
				src: "img/clothes/pants/pants_3.png",
				cost: costPants * 2,
				alt: "Штаны",
				health: 3,
				attack: 3,
				armor: 3,
				isAvailable: false,
				levelNeeded: 7
			},
			{
				src: "img/clothes/pants/pants_4.png",
				cost: costPants * 2.5,
				alt: "Штаны",
				health: 4,
				attack: 4,
				armor: 4,
				isAvailable: false,
				levelNeeded: 11
			},
			{
				src: "img/clothes/pants/pants_5.png",
				cost: costPants * 3,
				alt: "Штаны",
				health: 5,
				attack: 5,
				armor: 5,
				isAvailable: false,
				levelNeeded: 15
			}
		],
		boots: [
			{
				src: "img/clothes/boots/boots_0.png",
				cost: costBoots * 0,
				alt: "Сапоги",
				health: 0,
				attack: 0,
				armor: 0,
				isAvailable: true,
				levelNeeded: 0
			},
			{
				src: "img/clothes/boots/boots_1.png",
				cost: costBoots * 1,
				alt: "Сапоги",
				health: 1,
				attack: 1,
				armor: 1,
				isAvailable: false,
				levelNeeded: 3
			},
			{
				src: "img/clothes/boots/boots_2.png",
				cost: costBoots * 1.5,
				alt: "Сапоги",
				health: 2,
				attack: 2,
				armor: 2,
				isAvailable: false,
				levelNeeded: 5
			},
			{
				src: "img/clothes/boots/boots_3.png",
				cost: costBoots * 2,
				alt: "Сапоги",
				health: 3,
				attack: 3,
				armor: 3,
				isAvailable: false,
				levelNeeded: 7
			},
			{
				src: "img/clothes/boots/boots_4.png",
				cost: costBoots * 2.5,
				alt: "Сапоги",
				health: 4,
				attack: 4,
				armor: 4,
				isAvailable: false,
				levelNeeded: 11
			},
			{
				src: "img/clothes/boots/boots_5.png",
				cost: costBoots * 3,
				alt: "Сапоги",
				health: 5,
				attack: 5,
				armor: 5,
				isAvailable: false,
				levelNeeded: 15
			}
		],
		shield: [
			{
				src: "img/clothes/shield/shield_0.png",
				cost: costShield * 0,
				alt: "Щит",
				health: 0,
				attack: 0,
				armor: 0,
				isAvailable: true,
				levelNeeded: 0
			},
			{
				src: "img/clothes/shield/shield_1.png",
				cost: costShield * 1,
				alt: "Щит",
				health: 1,
				attack: 1,
				armor: 1,
				isAvailable: false,
				levelNeeded: 3
			},
			{
				src: "img/clothes/shield/shield_2.png",
				cost: costShield * 1.5,
				alt: "Щит",
				health: 2,
				attack: 2,
				armor: 2,
				isAvailable: false,
				levelNeeded: 5
			},
			{
				src: "img/clothes/shield/shield_3.png",
				cost: costShield * 2,
				alt: "Щит",
				health: 3,
				attack: 3,
				armor: 3,
				isAvailable: false,
				levelNeeded: 7
			},
			{
				src: "img/clothes/shield/shield_4.png",
				cost: costShield * 2.5,
				alt: "Щит",
				health: 4,
				attack: 4,
				armor: 4,
				isAvailable: false,
				levelNeeded: 11
			},
			{
				src: "img/clothes/shield/shield_5.png",
				cost: costShield * 3,
				alt: "Щит",
				health: 5,
				attack: 5,
				armor: 5,
				isAvailable: false,
				levelNeeded: 15
			}
		],
		sword: [
			{
				src: "img/clothes/sword/sword_0.png",
				cost: costSword * 0,
				alt: "Меч",
				health: 0,
				attack: 0,
				armor: 0,
				isAvailable: true,
				levelNeeded: 0
			},
			{
				src: "img/clothes/sword/sword_1.png",
				cost: costSword * 1,
				alt: "Меч",
				health: 1,
				attack: 1,
				armor: 1,
				isAvailable: false,
				levelNeeded: 3
			},
			{
				src: "img/clothes/sword/sword_2.png",
				cost: costSword * 1.5,
				alt: "Меч",
				health: 2,
				attack: 2,
				armor: 2,
				isAvailable: false,
				levelNeeded: 5
			},
			{
				src: "img/clothes/sword/sword_3.png",
				cost: costSword * 2,
				alt: "Меч",
				health: 3,
				attack: 3,
				armor: 3,
				isAvailable: false,
				levelNeeded: 7
			},
			{
				src: "img/clothes/sword/sword_4.png",
				cost: costSword * 2.5,
				alt: "Меч",
				health: 4,
				attack: 4,
				armor: 4,
				isAvailable: false,
				levelNeeded: 11
			},
			{
				src: "img/clothes/sword/sword_5.png",
				cost: costSword * 3,
				alt: "Меч",
				health: 5,
				attack: 5,
				armor: 5,
				isAvailable: false,
				levelNeeded: 15
			}
		]
	},
	zid: "8D86341404A29C76AAB264B9E191B4A1"
};

function getHero() {
	var heroJSON = localStorage.hero;

	if (!heroJSON) {
		setHero(heroDefault);
		return heroDefault;
	}

	return JSON.parse(heroJSON);
}

function setHero(hero) {
	localStorage.hero = JSON.stringify(hero);
}

function clearLocalStorage() {
	localStorage.hero = '';
}

function initialization() {
	if (localStorage.hero == '') {
		var init = $(".initInt");
		init.val(0);
		init = $(".name");
		init.val("Игрок");
	} else {
		filling();
	}
}
