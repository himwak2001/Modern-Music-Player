

$(document).ready(function() {

	const songs = {
		"trending": [{
			song_name: 'Kesariya',
			song_title: 'Kesariya',
			song_artist: 'Arjit Singh',
			song_img: 'img/t-1'
		},
		{
			song_name: 'Pachtaoge',
			song_title: 'Pachtaoge',
			song_artist: 'Arjit Singh',
			song_img: 'img/t-2'
		},
		{
			song_name: 'manike',
			song_title: 'Manike',
			song_artist: 'Jubin Nautiyal, Surya Ragunaathan, and Yohani',
			song_img: 'img/t-3'
		},
		{
			song_name: 'Khairiyat',
			song_title: 'Khairiyat',
			song_artist: 'Arjit Singh',
			song_img: 'img/t-4'
		},
		{
			song_name: 'pal_pal_dil_ke_pass',
			song_title: 'Pal Pal Dil Ke Paas (Title Track)',
			song_artist: 'Arjit Singh,  Parampara Thakur',
			song_img: 'img/t-5'
		},
		{
			song_name: 'tujhe_sochta_hoon',
			song_title: 'Tujhe Sochta Hoon',
			song_artist: 'KK,  Pritam Chakraborty',
			song_img: 'img/t-6'
		},
		{
			song_name: 'mujhko_barsaat_bana_lo',
			song_title: 'Mujhko Barsaat Bana Lo',
			song_artist: 'Armaan Malik',
			song_img: 'img/t-7'
		},
		{
			song_name: 'mann_mera',
			song_title: 'Mann Mera',
			song_artist: 'Gajendra verma',
			song_img: 'img/t-8'
		}],
		"top_charts": [{
			song_img: 'img/tc-1',
			song_sub_head: 'Hindi Romantic Hot Songs',
			song_head: 'Romantic Top 5',
			song_list: [{
				song_name: 'sanam_re',
				song_title: 'Sanam Re',
				song_artist: 'Arjit Singh, Mithoon',
				song_img: 'img/t_s_1'
			},
			{
				song_name: 'dil_galti_kar_baitha',
				song_title: 'Dil Galti Kar Baitha Hai',
				song_artist: 'Jubin Nautiyal, Meet Bros, Shardul Rathod',
				song_img: 'img/t_s_2'
			},
			{
				song_name: 'oh_humsafar',
				song_title: 'Oh Hamsafar',
				song_artist: 'Neha Kakkar, Tony Kakkar',
				song_img: 'img/t_s_3'
			},
			{
				song_name: 'dard_dilo_ke',
				song_title: 'Dard Dilo Ke',
				song_artist: 'Himesh Reshammiya, Mohammed Irfan',
				song_img: 'img/t_s_4'
			},
			{
				song_name: 'dillagi',
				song_title: 'Dillagi',
				song_artist: 'Rahat Fateh Ali Khan',
				song_img: 'img/t_s_5'
			}]
		},
		{
			song_img: 'img/tc-2',
			song_sub_head: 'Hindi 60s Songs',
			song_head: 'Hindi 60s',
			song_list: [{
				song_name: 'bekhudi_mein_sanam',
				song_title: 'Bekhudi Mein Sanam',
				song_artist: 'Lata Mangeshkar, Mohammed Rafi',
				song_img: 'img/t_s_6'
			},
			{
				song_name: 'kora_kagaz',
				song_title: 'Kora kagaz Tha Yeh Man Mera',
				song_artist: 'Lata Mangeshkar, Kishore Kumar',
				song_img: 'img/t_s_7'
			},
			{
				song_name: 'gulabi_aakhen',
				song_title: 'Gulabi Aakhen',
				song_artist: 'Mohammed Rafi',
				song_img: 'img/t_s_8'
			},
			{
				song_name: 'aap_ki_nazron',
				song_title: 'Aap Ki Nazron Ne',
				song_artist: 'Lata Mangeshkar, Madan Mohan',
				song_img: 'img/t_s_9'
			}]
		},
		{
			song_img: 'img/tc-3',
			song_sub_head: 'Hindi 70s Songs',
			song_head: 'Hindi 70s',
			song_list: [{
				song_name: 'pal_pal_dil_ke_pass_1',
				song_title: 'Pal Pal Dil Ke Pass (Black mail)',
				song_artist: 'Kishore Kumar',
				song_img: 'img/t_s_10'
			},
			{
				song_name: 'tum_aa_gaye_ho',
				song_title: 'Tum Aa Gaye Ho Noor Aa Gaya',
				song_artist: 'Lata Mangeshkar, Kishore Kumar',
				song_img: 'img/t_s_11'
			},
			{
				song_name: 'wada_karo_nahin',
				song_title: 'Wada Karo Nahin Chodogi',
				song_artist: 'R.D. Burman, Kishore Kumar, Lata Mangeshkar',
				song_img: 'img/t_s12'
			},
			{
				song_name: 'mere_dil_mein_aaj',
				song_title: 'Mere Dil Mein Aaj Kya Hai',
				song_artist: 'Kishore Kumar',
				song_img: 'img/t_s_13'
			},
			{
				song_name: 'raat_kali_ek_khwab',
				song_title: 'Raat Kali Ek Khwab Men Aai',
				song_artist: 'Kishore Kumar',
				song_img: 'img/t_s_14'
			}]
		},
		{
			song_img: 'img/tc-4',
			song_sub_head: 'Hindi 90s Songs',
			song_head: 'Hindi 90s',
			song_list: [{
				song_name: 'dheere_dheere_se',
				song_title: 'Dheere Dheere Se Meri Zindagi Mein Aana',
				song_artist: 'Anuradha Paudwal, Kumar Sanu',
				song_img: 'img/t_s_15'
			},
			{
				song_name: 'tip_tip_barsa_paani',
				song_title: 'Tip Tip Barsa Paani',
				song_artist: 'Alka Yagnik, Udit Narayan',
				song_img: 'img/t_s_16'
			},
			{
				song_name: 'tu_pyar_hai_kisi',
				song_title: 'Tu Pyar Hai Kisi Aur Ka',
				song_artist: 'Anuradha Paudwal, Kumar Sanu',
				song_img: 'img/t_s_17'
			}]
		},
		{
			song_img: 'img/tc-5',
			song_sub_head: 'Hindi Songs Of 2000s',
			song_head: 'Charts Hindi 2000s',
			song_list: [{
				song_name: 'gindagi_ban_gaye',
				song_title: 'Gindagi Ban Gaye Ho Tum',
				song_artist: 'Nadeem-Shravan',
				song_img: 'img/t_s_18'
			},
			{
				song_name: 'khuda_jaane',
				song_title: 'Khuda Jaane',
				song_artist: 'Vishal & Shekhar, KK, Shipa Rao, Anvita Dutt Guptan',
				song_img: 'img/t_s_19'
			},
			{
				song_name: 'haan_tu_hain',
				song_title: 'Haan Tu Hain',
				song_artist: 'Pritam, KK',
				song_img: 'img/t_s_20'
			},
			{
				song_name: 'tumhe_jo_maine',
				song_title: 'Tumhe Jo Maine Dekha',
				song_artist: 'Abhijeet, Shreya Ghoshal',
				song_img: 'img/t_s_21'
			},
			{
				song_name: 'rab_kare',
				song_title: 'Rab Kare',
				song_artist: 'Udit Narayan',
				song_img: 'img/t_s_22'
			}]
		}],
		"artist_songs": [{
			song_img: 'img/a-1'
		},
		{
			song_img: 'img/a-2'
		},
		{
			song_img: 'img/a-3'
		},
		{
			song_img: 'img/a-4'
		},
		{
			song_img: 'img/a-5'
		},
		{
			song_img: 'img/a-6'
		},
		{
			song_img: 'img/a-7'
		},
		{
			song_img: 'img/a-8'
		},
		{
			song_img: 'img/a-9'
		},
		{
			song_img: 'img/a-10'
		}],
		"devotional_songs": [{
			song_img: 'img/d-1'
		},
		{
			song_img: 'img/d-2'
		},
		{
			song_img: 'img/d-3'
		},
		{
			song_img: 'img/d-4'
		},
		{
			song_img: 'img/d-5'
		},
		{
			song_img: 'img/d-6'
		},
		{
			song_img: 'img/d-7'
		}]
	}

	const music = document.getElementById('music');
	const playBtn = document.getElementById('play-music');
	const musicList = document.querySelectorAll('.music-list');
	const trendingSongs = musicList[0];
	const topChartSongs = musicList[1];
	const artistsSongs = musicList[2];
	const devotionalSongs = musicList[3];



	// TRENDING SONGS 
	const loadAllSongs = () => {
		// TRENDING SONGS 
		trendingSongs.innerHTML = songs['trending'].map((trending_song) =>
			`
            <div class="music-list-item">
                <img src="${trending_song.song_img}.jpg" alt="" class="music-list-item-img">
                <span class="music-title">${trending_song.song_title}</span>
                <span class="music-artist">${trending_song.song_artist}</span>
                <i class="fa-solid fa-circle-play play-btn btn-song" name="trending"></i>
                <i class="fa-solid fa-heart favourite"></i>
            </div>
            `
		).join("");

		// TOP CHARTS SONGS
		topChartSongs.innerHTML = songs['top_charts'].map((top_chart) =>
			`
            <div class="top-charts-list-item">
                <img src="${top_chart.song_img}.jpg" alt="" class="top-charts-list-item-img"/>
                <i class="fa-solid fa-circle-play top-charts-play-btn btn-song" name="top_charts"></i>
            </div>
          `
		).join("");

		// ARTISTS SONGS
		artistsSongs.innerHTML = songs['artist_songs'].map((artist_song) =>
			`
            <div class="artist-list-item">
                <img src="${artist_song.song_img}.jpg" alt="" class="artist-list-item-img" />
                <i class="fa-solid fa-circle-play artist-play-btn btn-song" name="artist_songs"></i>
            </div>
          `
		).join("");

		// DEVOTIONAL SONGS
		devotionalSongs.innerHTML = songs['devotional_songs'].map((devotional_song) =>
			`
            <div class="dev-list-item">
                <img src="${devotional_song.song_img}.jpg" alt="" class="dev-list-item-img" />
                <i class="fa-solid fa-circle-play play-btn btn-song" name="devotional_songs"></i>
            </div>
          `
		).join("");
	}

	loadAllSongs();

	const play_list_btn = document.getElementsByClassName('play-btn');
	const song_play_img = document.querySelector('.play-img');
	const song_play_title = document.querySelector('.play-music-song');
	const song_play_artist = document.querySelector('.play-music-artist');
	const detail_song_img = document.querySelector('.show-play-img');
	const detail_song_title = document.querySelector('.show-play-music-song');
	const detail_song_artist = document.querySelector('.show-play-music-artist');
	const compo_content = document.querySelector('.container-content');
	const show_detail_compo = document.querySelector('.music-component-detail');
	const show_first_compo = document.querySelector('.first-component-div');
	const second_compo_heading = document.querySelector('.second-compo-heading');
	const second_compo_list = document.querySelector('.second-compo-song-list');
	const close_compo_btn = document.querySelector('.close-compo-arrow');

	// LOAD SELECTED SONGS
	const loadSongs = (song) => {
		song_play_img.src = `${song.song_img}.jpg`;
		detail_song_img.src = `${song.song_img}.jpg`;
		song_play_title.textContent = song.song_title;
		detail_song_title.textContent = song.song_title;
		song_play_artist.textContent = song.song_artist;
		detail_song_artist.textContent = song.song_artist;
		music.src = `songs/${song.song_name}.mp3`;
		playMusic();
	}

	// PLAY TRENDING SONGS
	for (let i = 0; i < songs['trending'].length; i++) {
		play_list_btn[i].addEventListener('click', () => {
			let song_list_name = play_list_btn[i].getAttribute('name');
			loadSongs(songs[song_list_name][i]);
		})
	}

	close_compo_btn.addEventListener('click', () => {
		hide_screen();
	})

	const hide_screen = () => {
		compo_content.classList.toggle('hide-compo');
		show_detail_compo.classList.toggle('hide-compo');
	}

	const show_song_compo = (card_name, i) => {
		show_first_compo.innerHTML =
			`
            <img src="${songs[card_name][i].song_img}.jpg" alt="" class="compo-img">
            <div class="first-compo-info">
                <h2 class="first-compo-heading">${songs[card_name][i].song_head}</h2>
                <p><span>92K Fans</span>  |  <span id="songs-count">${songs[card_name][i].song_list.length} Songs</span></p>
                <button class="play-all-songs">Play</button>
                <span><i class="fa-regular fa-heart"></i></span>
                <span><i class="fa-solid fa-ellipsis"></i></span>
            </div>
        `;

		second_compo_heading.innerHTML = `${songs[card_name][i].song_sub_head}`;

		second_compo_list.innerHTML = songs[card_name][i].song_list.map(song =>
			`
                <div class="second-compo-song">
                    <img src="${song.song_img}.jpg" alt="">
                    <div class="secong-song-info">
                        <span class="second-song-title">${song.song_title}</span>
                        <span class="second-song-artist">${song.song_artist}</span>
                    </div>
                </div>
            `
		).join("");

		const second_compo_play = document.getElementsByClassName('second-compo-song');
		for (let j = 0; j < second_compo_play.length; j++) {
			second_compo_play[j].addEventListener('click', () => {
				loadSongs(songs[card_name][i]['song_list'][j])
			})
		}
	}

	// PLAY TOP CHARTS
	const top_btn = document.getElementsByClassName('top-charts-play-btn');

	for (let i = 0; i < songs['top_charts'].length; i++) {
		top_btn[i].addEventListener('click', () => {
			hide_screen();
			let song_attr = top_btn[i].getAttribute('name');
			show_song_compo(song_attr, i);
		})
	}

	// SEARCH BAR FUNCTIONALITY
	const searchBar = document.querySelector('.search-song');
	const overlaySearch = document.getElementById('overlay-search');
	const close_search = document.querySelector('.close-search');
	const search_bar_input = document.getElementById('search-bar-input');
	const show_songs = document.querySelector('.show-search-song');
	const search_song = document.querySelector('.song-search');

	close_search.addEventListener('click', () => {
		overlaySearch.style.display = "none";
	})

	searchBar.addEventListener('click', () => {
		overlaySearch.style.display = "block";
	});

	search_song.addEventListener('click', () => {
		overlaySearch.style.display = "block";
	});

	const showSearchSong = (searchSong) => {
		show_songs.innerHTML = searchSong.map(song =>
			`
                <img src="${song.song_img}.jpg" alt="" class="search-img">
            `
		).join("");

		let image_play = document.querySelectorAll('.search-img');

		for (let i = 0; i < image_play.length; i++) {
			image_play[i].addEventListener('click', () => {
				loadSongs(searchSong[i]);
			})
		}
	}

	const search_songs = [...songs["trending"], ...songs["top_charts"][0].song_list, ...songs["top_charts"][1].song_list, ...songs["top_charts"][2].song_list, ...songs["top_charts"][3].song_list, ...songs["top_charts"][4].song_list];

	showSearchSong(search_songs);

	search_bar_input.addEventListener('keyup', (e) => {
		let searchSong = e.target.value.toLowerCase();
		if (searchSong) {
			showSearchSong(search_songs.filter(item => item.song_title.toLowerCase().indexOf(searchSong) != -1));
		}

	})



	// SLIDER SWIPING -> TRENDING, TOPCHARTS, ARTISTS AND DEVOTIONAL
	const arrows = document.querySelectorAll(".arrow");
	const musiclists = document.querySelectorAll(".music-list");

	arrows.forEach((arrow, i) => {
		const itemNumber = musiclists[i].querySelectorAll('img').length;
		let clickCounter = 0;
		arrow.addEventListener("click", () => {
			const ratio = Math.floor(window.innerWidth / 270);
			clickCounter++;
			if (itemNumber - (6 + clickCounter) + (6 - ratio) > 0) {
				musiclists[i].style.transform = `translateX(${musiclists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
			} else {
				musiclists[i].style.transform = "translateX(0)";
				clickCounter = 0;
			}
		});
	})

	// Initialize Swiper
	var swiper = new Swiper(".top-slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});



	// PLAY SONG FUNCTIONALITY
	let isPlaying = false;

	const playMusic = () => {
		isPlaying = true;
		music.play();
		playBtn.setAttribute('class', 'fa-solid fa-circle-pause play-music');
	}

	const pauseMusic = () => {
		isPlaying = false;
		music.pause();
		playBtn.setAttribute('class', 'fa-solid fa-circle-play play-music');
	}

	playBtn.addEventListener('click', () => {
		isPlaying ? pauseMusic() : playMusic();
	})

	music.addEventListener('ended', pauseMusic());

	// PROGRESS BAR
	const progress_bar = document.getElementById("progress-bar");
	const current_time = document.getElementById("current-song-duration");

	music.addEventListener('timeupdate', (event) => {
		const { currentTime, duration } = event.srcElement;
		let progressLimit = (currentTime / duration) * 100;
		progress_bar.style.width = `${progressLimit}%`;

		let duration_min = Math.floor(duration / 60);
		let duration_sec = Math.floor(duration % 60);

		let currentTime_min = Math.floor(currentTime / 60);
		let currentTime_sec = Math.floor(currentTime % 60);

		if (duration) {
			current_time.textContent = `${currentTime_min}:${currentTime_sec} / ${duration_min}:${duration_sec}`;
		}
	})

	// JQuery

	$(".player-login").click(function() {
		$(".signin-page").addClass("active");
		$("#overlay").css("display", "block");
	});

	$(".close").click(function() {
		$(".signin-page").removeClass("active");
		$("#overlay").css("display", "none");
	});

	$(".toggle-ball").click(function() {
		$(this).toggleClass("active-trans");
		$(".login-page").toggleClass("active");
		$(".register-page").toggleClass("active");
	});

	$('#search-input').on({
		"focus": function() {
			$(".search-container").css('display', 'block')
		},
		"blur": function() {
			$(".search-container").css('display', 'none')
		}
	})

	$('#expand').click(function() {
		$('#contract').toggleClass('hidden');
		$('.show-music-details').toggleClass('trans-details');
		$(this).toggleClass('hidden');
		$('.play-img, .play-music-song, .play-music-artist').css('display', 'none');
	});

	$('#contract').click(function() {
		$(this).toggleClass('hidden');
		$('#expand').toggleClass('hidden');
		$('.show-music-details').toggleClass('trans-details');
		$('.play-img, .play-music-song, .play-music-artist').css('display', 'block');
	});
});