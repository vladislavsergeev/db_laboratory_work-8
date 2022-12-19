db.ScienceJournal.drop();

db.ScienceJournal.insertMany([
	{
		title: "Чем хорош мониторинг SCADA-систем WinCC в Zabbix",
		authors: ["Баранов Владимир"],
		date: new Date("04.04.2019"),
		content: "Для управления производством мы в «Северстали» используем SCADA-системы, в частности, SIMATIC WinCC.",
		tags: ["статья 1", "администрирование"],
		reviews: [
			{
				name: "neobuh",
				comment: '"Zabbix — это специализированное отечественное ПО для мониторинга": это вы откуда взяли?',
				mark: 4,
			},
			{
				name: "ev-gorlov",
				comment: "статья супер!",
				mark: 7,
			},
			{
				name: "mvkozyrev",
				comment: "отличная статья!",
				mark: 8,
			},
			{
				name: "ars_tiunov",
				comment: "с удовольствием почитал статью, благодарю!",
				mark: 9,
			}
		]
	},
    {
		title: "Геометрия объектной модели документа: исчерпывающее руководство",
		authors: ["Кузнецова Александра"],
		date: new Date("05.07.2020"),
		content: "Знаете ли вы, что кроме интерфейсов, определенных спецификациями объектной модели документа (Document Object Model, DOM) и объектной модели каскадных таблиц стилей (Cascading Style Sheets (CSS) Object Model, CSSOM), существует также набор свойств и методов, определяемых в модуле отображения CSSOM (CSSOM View Module)?",
		tags: ["статья 2", "веб"],
		reviews: [
			{
				name: "neobuh",
				comment: "шикарная статья, интересно было почитать!",
				mark: 9,
			},
			{
				name: "mvkozyrev",
				comment: "еле дочитал, много умных терминов сложным языком...",
				mark: 1,
			},
			{
				name: "ars_tiunov",
				comment: "хорошая статья, спасибо!",
				mark: 7,
			}
		]
	},
    {
		title: "Лучшие облачные приложения для бизнеса",
		authors: ["Поляков Тимур", "Петрова Алиса"],
		date: new Date("11.09.2020"),
		content: "Облачные приложения в бизнесе уже стали привычным инструментом.",
		tags: ["статья 3", "разработка", "бизнес"],
		reviews: [
			{
				name: "neobuh",
				comment: "шикарная статья, спасибо!",
				mark: 9,
			},
			{
				name: "ars_tiunov",
				comment: "хорошая статья, мне понравилось.",
				mark: 8,
			}
		]
	},
    {
		title: "Использование SSH для подключения к Linux",
		authors: ["Капустин Михаил"],
		date: new Date("03.05.2021"),
		content: "SSH — Secure Shell — протокол прикладного уровня, разработанный для обеспечения подключения к удалённому устройству и туннелирования TCP-соединений.",
		tags: ["статья 4", "администрирование"],
		reviews: [
			{
				name: "neobuh",
				comment: "шикарная статья, спасибо!",
				mark: 8,
			},
			{
				name: "ars_tiunov",
				comment: "хорошая статья, мне понравилось.",
				mark: 7,
			}
		]
	},
    {
		title: "Рассмотрим, как работает подключение через SSH в Linux и других ОС.",
		authors: ["Капустин Михаил"],
		date: new Date("07.11.2022"),
		content: "Коротко о принципе работы SSH",
		tags: ["статья 5", "администрирование"],
		reviews: [
			{
				name: "neobuh",
				comment: "шикарная статья, интересно было почитать!",
				mark: 9,
			},
			{
				name: "mvkozyrev",
				comment: "мне статья не понравилась... ни о чём, ярлычки на столе в винде лучше и проще будут...",
				mark: 1,
			},
			{
				name: "ars_tiunov",
				comment: "хорошая статья, спасибо!",
				mark: 7,
			}
		]
	},
	{
		title: "Подробно о типах кабелей USB-C",
		authors: ["Чесноков Илья"],
		date: new Date("12.11.2022"),
		content: "Тема кабелей и разъёмов стандарта USB-C является довольно запутанной, и тому есть объективные причины.",
		tags: ["статья 1", "дизайн", "интерфейсы"],
		reviews: [
			{
				name: "neobuh",
				comment: "неплохая статья!",
				mark: 6,
			},
			{
				name: "ars_tiunov",
				comment: "плохая статья, мне не понравилось.",
				mark: 2,
			}
		]
	}
])