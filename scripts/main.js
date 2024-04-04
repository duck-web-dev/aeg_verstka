// Спарсил чтоб в ручную не переписывать
const data = [
	{
		"title": "Ремонт эл. плиты",
		"cause": "Перестала включаться после попадания воды",
		"fix": "Замена комфорки",
		"time": "50 мин",
		"price": "1000 ₽"
	},
	{
		"title": "Ремонт плиты",
		"cause": "Перестал включаться, перегорел свет",
		"fix": "Замена переключателей",
		"time": "50 мин",
		"price": "750 ₽"
	},
	{
		"title": "Ремонт стиральной машины",
		"cause": "Перестала включаться",
		"fix": "Замена сетевого фильтра",
		"time": "110 мин",
		"price": "750 ₽"
	},
	{
		"title": "Ремонт стиральной машины",
		"cause": "Заклинило люк",
		"fix": "Разблокировка двери перепайка платы управления",
		"time": "150 мин",
		"price": "850 ₽"
	},
	{
		"title": "Ремонт посудомоечной машины",
		"cause": "Не греет воду",
		"fix": "Замена тэна",
		"time": "50 мин",
		"price": "750 ₽"
	},
	{
		"title": "Ремонт посудомоечной машины",
		"cause": "Перестала включаться",
		"fix": "Замена сетевого фильтра",
		"time": "80 мин",
		"price": "750 ₽"
	}
]

const el = $('section#images > div');
let templateEl = el[0].children[0];
const template = templateEl.outerHTML;
templateEl.remove();
console.log(template)

data.forEach((e, id) => {
	let t = template.replace(
		'{src}', "/img/examples/"+(id+1)+".jpg"
	).replace(
		'{title}', e.title
	).replace(
		'{cause}', e.cause
	).replace(
		'{fix}', e.fix
	).replace(
		'{time}', e.time
	).replace(
		'{price}', e.price
	)
	el.append(t);
})

$(el[0]).slick({
	dots: true,
	arrows: true,
	infinite: true,
	speed: 1000,
	variableHeight: true,
	variableWidth: true,
	adaptiveHeight: true
	// slidesToShow: 1,
	// slidesToScroll: 1,
	// centerMode: true
});