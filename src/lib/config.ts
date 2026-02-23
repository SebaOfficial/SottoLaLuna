// File di configurazione del sito

const config = {
	vatNumber: '07388310018',
	map: {
		address: 'Via Caprera, 54, 10136 Torino TO',
		shortAddress: 'Via Caprera, 54',
		coordinates: {
			lat: 45.050782,
			lng: 7.6430418,
		},
		directions:
			'https://www.google.com/maps/search/?api=1&query=Sotto+La+Luna+Via+Caprera,+54,+10136+Torino+TO',
		src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5637.460676097705!2d7.6455892!3d45.0506938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886cd70104fd6b%3A0x1f10cc953681e5dd!2sSotto%20La%20Luna!5e0!3m2!1sit!2sit!4v1770485446003!5m2!1sit!2sit',
	},
	openingHours: {
		open: '19:00',
		close: '22:30',
	},
	socials: {
		instagram: 'https://www.instagram.com/trattoria.sottolaluna/',
		facebook: 'https://www.facebook.com/', // TODO: add facebook page
	},
	baseUrl: 'https://sottolaluna.it',
};

export default config;
