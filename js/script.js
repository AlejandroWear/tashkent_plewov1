/**
 * @author Qazi Maaz Arshad <qazimaazarshad@gmail.com>
 */
(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

// Translations object
const translations = {
    uz: {
        greeting: "Assalom Alaykum!",
        guestGreeting: "Hurmatli",
        guestDefault: "mehmon",
        invitationText: "Sizni aziz va suyukli farzandlarimiz",
        groomName: "Abdullo",
        brideName: "Azimaxon",
        weddingDetails: "larning nikoh to'ylari munosabati bilan<br><strong>2025 yil 22 oktyabr</strong> kuni soat <strong>7:00</strong><br>bo'lib o'tadigan <strong>\"Amru-Maruf\"</strong> osh<br>dasturhonimizga lutfan taklif etamiz!",
        familySignature: "Xurmat va ehtirom bilan<br><strong>Ashrapov Farhod</strong> va<br><strong>Atoyev Ismatillo</strong> oilasi.",
        locationTitle: "LOKATSIYA",
        venueName: "\"Amru-Maruf\" osh",
        venueAddress: "Toshkent shahri, Yunusobod tumani",
        venueDate: "⏰ Sana: 22 oktyabr 2025 yil",
        venueTime: "🕰 Vaqt: 7:00",
        directionsBtn: "YO'L-YO'RIQ OLISH",
        countdownTitle: "TO'YIMIZGACHA QOLGAN VAQT",
        days: "Kun",
        hours: "Soat",
        minutes: "Daqiqa",
        seconds: "Soniya",
        modalTitle: "Ismingizni kiriting",
        modalPlaceholder: "Ismingiz...",
        modalConfirm: "Tasdiqlash",
        modalSkip: "O'tkazib yuborish",
        calendarBtn: "Kalendarga qo'shish",
        telegramBtn: "Telegramga yuborish",
        welcomeMessage: "🎉 Xush kelibsiz,",
        weddingDayMessage: "🎉 TO'Y KUNI KELDI! 🎉",
        musicOn: "Musiqani yoqish",
        musicOff: "Musiqani o'chirish",
        eventTitles: "Abdullo va Azimaxon nikoh to'yi",
        eventDescriptions: "To'yi marosimi - Amru-Maruf osh, 2025 yil 22 oktyabr, soat 7:00",
        musicError: "Musiqa ijro etilmadi. Iltimos, audio faylni tekshiring."
    },
    ru: {
        greeting: "Ассалом Алейкум!",
        guestGreeting: "Уважаемый",
        guestDefault: "гость",
        invitationText: "Приглашаем Вас на свадьбу наших дорогих детей",
        groomName: "Абдулло",
        brideName: "Азимахон",
        weddingDetails: "которая состоится<br><strong>22 октября 2025 года</strong> в <strong>19:00</strong><br>в ресторане <strong>\"Амру-Маруф\"</strong><br>Будем рады видеть Вас на нашем торжестве!",
        familySignature: "С уважением и почтением<br><strong>Семья Ашрапов Фарход</strong> и<br><strong>Семья Атоев Исматилло</strong>",
        locationTitle: "ЛОКАЦИЯ",
        venueName: "Ресторан \"Амру-Маруф\"",
        venueAddress: "г. Ташкент, Юнусабадский район",
        venueDate: "⏰ Дата: 22 октября 2025 года",
        venueTime: "🕰 Время: 19:00",
        directionsBtn: "ПОЛУЧИТЬ МАРШРУТ",
        countdownTitle: "ДО НАШЕЙ СВАДЬБЫ ОСТАЛОСЬ",
        days: "Дней",
        hours: "Часов",
        minutes: "Минут",
        seconds: "Секунд",
        modalTitle: "Введите ваше имя",
        modalPlaceholder: "Ваше имя...",
        modalConfirm: "Подтвердить",
        modalSkip: "Пропустить",
        calendarBtn: "Добавить в календарь",
        telegramBtn: "Отправить в Telegram",
        welcomeMessage: "🎉 Добро пожаловать,",
        weddingDayMessage: "🎉 ДЕНЬ СВАДЬБЫ НАСТАЛ! 🎉",
        musicOn: "Включить музыку",
        musicOff: "Выключить музыку",
        eventTitles: "Свадьба Абдулло и Азимахон",
        eventDescriptions: "Свадебная церемония - ресторан Амру-Маруф, 22 октября 2025 года, 19:00",
        musicError: "Музыка не воспроизводится. Проверьте аудиофайл."
    },
    en: {
        greeting: "Peace be upon you!",
        guestGreeting: "Dear",
        guestDefault: "guest",
        invitationText: "We invite you to the wedding of our beloved children",
        groomName: "Abdullo",
        brideName: "Azimakhon",
        weddingDetails: "which will take place on<br><strong>October 22, 2025</strong> at <strong>7:00 PM</strong><br>at <strong>\"Amru-Maruf\"</strong> restaurant<br>We would be delighted to see you at our celebration!",
        familySignature: "With respect and honor<br><strong>Ashrapov Farhod Family</strong> and<br><strong>Atoyev Ismatillo Family</strong>",
        locationTitle: "LOCATION",
        venueName: "\"Amru-Maruf\" Restaurant",
        venueAddress: "Tashkent city, Yunusabad district",
        venueDate: "⏰ Date: October 22, 2025",
        venueTime: "🕰 Time: 7:00 PM",
        directionsBtn: "GET DIRECTIONS",
        countdownTitle: "TIME UNTIL OUR WEDDING",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        modalTitle: "Enter your name",
        modalPlaceholder: "Your name...",
        modalConfirm: "Confirm",
        modalSkip: "Skip",
        calendarBtn: "Add to Calendar",
        telegramBtn: "Share on Telegram",
        welcomeMessage: "🎉 Welcome,",
        weddingDayMessage: "🎉 WEDDING DAY IS HERE! 🎉",
        musicOn: "Turn on music",
        musicOff: "Turn off music",
        eventTitles: "Wedding of Abdullo and Azimakhon",
        eventDescriptions: "Wedding ceremony - Amru-Maruf restaurant, October 22, 2025, 7:00 PM",
        musicError: "Music cannot be played. Please check the audio file."
    }
};

let currentLanguage = 'uz';
let currentPage = 1;
let guestName = '';
let countdownInterval;
let isMusicPlaying = false; // Music starts off by default
let audioElement = null;
let hasUserInteracted = false; // Track user interaction

// Initialize music controls
function initializeMusic() {
    audioElement = document.getElementById("my_audio");
    if (audioElement) {
        audioElement.volume = 0.7; // Set default volume
        const savedMusicState = localStorage.getItem('musicEnabled');
        isMusicPlaying = savedMusicState === 'true';
        updateMusicButton();
        
        // Only attempt to play music if user has interacted and music is enabled
        if (isMusicPlaying && hasUserInteracted) {
            tryPlayMusic();
        }
    } else {
        console.error('Audio element not found');
        showMusicError();
    }
}

// Show music error notification
function showMusicError() {
    const errorDiv = document.createElement('div');
    errorDiv.textContent = translations[currentLanguage].musicError;
    errorDiv.style.position = 'fixed';
    errorDiv.style.bottom = '80px';
    errorDiv.style.right = '20px';
    errorDiv.style.background = 'rgba(255, 0, 0, 0.8)';
    errorDiv.style.color = 'white';
    errorDiv.style.padding = '10px';
    errorDiv.style.borderRadius = '10px';
    errorDiv.style.zIndex = '10000';
    errorDiv.style.fontFamily = "'Poiret One', cursive";
    document.body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 5000);
}

// Attempt to play music
function tryPlayMusic() {
    if (audioElement && isMusicPlaying) {
        const playPromise = audioElement.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log('Music started successfully');
                })
                .catch(error => {
                    console.log('Music play failed:', error);
                    showMusicError();
                });
        }
    }
}

// Handle user interaction to enable music
function handleUserInteraction() {
    if (!hasUserInteracted) {
        hasUserInteracted = true;
        if (isMusicPlaying) {
            tryPlayMusic();
        }
        // Remove interaction listeners after first interaction
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
    }
}

// Toggle music on/off
function toggleMusic() {
    if (!audioElement) {
        audioElement = document.getElementById("my_audio");
    }

    if (audioElement) {
        if (isMusicPlaying) {
            audioElement.pause();
            isMusicPlaying = false;
            localStorage.setItem('musicEnabled', 'false');
        } else {
            isMusicPlaying = true;
            localStorage.setItem('musicEnabled', 'true');
            if (hasUserInteracted) {
                tryPlayMusic();
            }
        }
        updateMusicButton();
    } else {
        console.error('Audio element not found');
        showMusicError();
    }
}

// Update music button appearance
function updateMusicButton() {
    const musicBtn = document.getElementById('musicToggle');
    if (musicBtn) {
        musicBtn.textContent = isMusicPlaying ? '🎵' : '🔇';
        musicBtn.classList.toggle('active', isMusicPlaying);
        musicBtn.classList.toggle('muted', !isMusicPlaying);
        musicBtn.title = isMusicPlaying ? translations[currentLanguage].musicOff : translations[currentLanguage].musicOn;
    }
}

// Set up interaction listeners
document.addEventListener('click', handleUserInteraction);
document.addEventListener('touchstart', handleUserInteraction);

// Console messages
var styles = [
    'background: linear-gradient(#D33106, #571402)',
    'border: 4px solid #3E0E02',
    'color: white',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
    'line-height: 40px',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
    'line-height: 40px',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 22nd Oct, 2025!', styles);
console.log('%cYour presence is requested!%c\n\nRegards: Abdullo & Azimaxon', styles1, styles2);
console.log(`%cTo\'yda ko\'rishguncha!\n\n`, 'color: yellow; background:tomato; font-size: 24pt; font-weight: bold');

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function handleGuestNameFromUrl() {
    const nameFromUrl = getUrlParameter('name');
    if (nameFromUrl) {
        const decodedName = decodeURIComponent(nameFromUrl);
        setGuestNameDisplay(decodedName);
        hideGuestModal();
        localStorage.setItem('guestName', decodedName);
        console.log('Имя из URL установлено:', decodedName);
        showWelcomeMessage(decodedName);
    }
}

function showGuestModal() {
    const modal = document.getElementById('guestModal');
    if (modal) {
        modal.classList.add('hidden');
    }
    setGuestNameDisplay(translations[currentLanguage].guestDefault);
}

document.addEventListener('DOMContentLoaded', function() {
    handleGuestNameFromUrl();
    showGuestModal();
    initializeCountdown();
    initializeNavigation();
    initializeTouchNavigation();
    createLanguageSwitcher();
    changeLanguage('uz');
    initializeMusic();
});

function createLanguageSwitcher() {
    const languageSwitcher = document.createElement('div');
    languageSwitcher.className = 'language-switcher';
    languageSwitcher.innerHTML = `
        <button class="music-btn" id="musicToggle" onclick="toggleMusic()">🔇</button>
        <button class="lang-btn active" onclick="changeLanguage('uz')">UZ</button>
        <button class="lang-btn" onclick="changeLanguage('ru')">RU</button>
        <button class="lang-btn" onclick="changeLanguage('en')">EN</button>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .language-switcher {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            gap: 8px;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 25px;
            padding: 8px 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .lang-btn {
            background: transparent;
            color: #2c5530;
            border: 2px solid transparent;
            padding: 8px 15px;
            border-radius: 15px;
            cursor: pointer;
            font-family: 'Poiret One', cursive;
            font-size: 0.9rem;
            font-weight: 600;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            min-width: 45px;
        }

        .music-btn {
            background: transparent;
            color: #2c5530;
            border: 2px solid transparent;
            padding: 8px 12px;
            border-radius: 15px;
            cursor: pointer;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            min-width: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .lang-btn:hover,
        .music-btn:hover {
            background: rgba(44, 85, 48, 0.1);
            border-color: #2c5530;
        }

        .lang-btn.active {
            background: #2c5530;
            color: white;
            border-color: #2c5530;
            box-shadow: 0 2px 8px rgba(44, 85, 48, 0.3);
        }

        .music-btn.active {
            background: #2c5530;
            color: white;
            border-color: #2c5530;
            box-shadow: 0 2px 8px rgba(44, 85, 48, 0.3);
        }

        .music-btn.muted {
            background: #d4af37;
            color: white;
            border-color: #d4af37;
            opacity: 0.7;
        }

        @media (max-width: 799px) {
            .language-switcher {
                bottom: 15px;
                right: 15px;
                padding: 6px 10px;
                gap: 6px;
            }
            
            .lang-btn {
                padding: 6px 12px;
                font-size: 0.8rem;
                min-width: 40px;
            }
            
            .music-btn {
                padding: 6px 10px;
                font-size: 1rem;
                min-width: 40px;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(languageSwitcher);
}

function changeLanguage(lang) {
    currentLanguage = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const targetBtn = document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`);
    if (targetBtn) targetBtn.classList.add('active');
    
    document.querySelectorAll('.modal-lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const modalBtn = document.querySelector(`.modal-lang-btn[onclick="changeLanguageInModal('${lang}')"]`);
    if (modalBtn) modalBtn.classList.add('active');
    
    updateTranslations(lang);
    
    const modal = document.getElementById('guestModal');
    if (modal && !modal.classList.contains('hidden')) {
        updateModalTranslations(lang);
    }
}

function updateTranslations(lang) {
    const t = translations[lang];
    
    const greeting = document.querySelector('.greeting');
    if (greeting) greeting.textContent = t.greeting;
    
    const guestGreeting = document.querySelector('.guest-greeting');
    if (guestGreeting && document.getElementById('guestName')) {
        const guestNameEl = document.getElementById('guestName');
        const guestNameText = guestNameEl.textContent;
        if (guestNameText === 'mehmon' || guestNameText === 'гость' || guestNameText === 'guest') {
            guestNameEl.textContent = t.guestDefault;
        }
        guestGreeting.innerHTML = `${t.guestGreeting} <span id="guestName">${guestNameEl.textContent}</span>!`;
    }
    
    const mainText = document.querySelector('.main-text');
    if (mainText) mainText.textContent = t.invitationText;
    
    const groomName = document.querySelector('.groom-name');
    const brideName = document.querySelector('.bride-name');
    const conjunction = document.querySelector('.conjunction');
    
    if (groomName) groomName.textContent = t.groomName;
    if (brideName) brideName.textContent = t.brideName;
    
    if (conjunction) {
        if (lang === 'uz') {
            conjunction.textContent = 'va ';
        } else if (lang === 'ru') {
            conjunction.textContent = 'и ';
        } else {
            conjunction.textContent = '& ';
        }
    }
    
    const weddingDetails = document.querySelector('.wedding-details');
    if (weddingDetails) weddingDetails.innerHTML = t.weddingDetails;
    
    const familySignature = document.querySelector('.family-signature p');
    if (familySignature) familySignature.innerHTML = t.familySignature;
    
    const locationTitle = document.querySelector('.location-page .section-title');
    if (locationTitle) locationTitle.textContent = t.locationTitle;
    
    const venueName = document.querySelector('.venue-name');
    if (venueName) venueName.textContent = t.venueName;
    
    const venueAddress = document.querySelector('.venue-address');
    if (venueAddress) venueAddress.textContent = t.venueAddress;
    
    const venueDateEl = document.querySelector('.venue-date');
    if (venueDateEl) venueDateEl.textContent = t.venueDate;
    
    const venueTimeEl = document.querySelector('.venue-time');
    if (venueTimeEl) venueTimeEl.textContent = t.venueTime;
    
    const directionsBtn = document.querySelector('.directions-btn');
    if (directionsBtn) directionsBtn.textContent = t.directionsBtn;
    
    const countdownTitle = document.querySelector('.countdown-page .section-title');
    if (countdownTitle) countdownTitle.textContent = t.countdownTitle;
    
    const timeLabels = document.querySelectorAll('.time-label');
    if (timeLabels.length >= 4) {
        timeLabels[0].textContent = t.days;
        timeLabels[1].textContent = t.hours;
        timeLabels[2].textContent = t.minutes;
        timeLabels[3].textContent = t.seconds;
    }
    
    const modalTitle = document.querySelector('.modal-content h3');
    if (modalTitle) modalTitle.textContent = t.modalTitle;
    
    const modalInput = document.getElementById('guestInput');
    if (modalInput) modalInput.placeholder = t.modalPlaceholder;
    
    const modalButtons = document.querySelectorAll('.modal-content button:not(.modal-lang-btn)');
    if (modalButtons.length >= 2) {
        modalButtons[0].textContent = t.modalConfirm;
        modalButtons[1].textContent = t.modalSkip;
    }
    
    const calendarBtn = document.querySelector('button[onclick*="addToCalendar"]');
    if (calendarBtn) calendarBtn.textContent = t.calendarBtn;
    
    const telegramBtn = document.querySelector('button[onclick*="shareOnSocial"]');
    if (telegramBtn) telegramBtn.textContent = t.telegramBtn;
    
    updateMusicButton(); // Update music button text
}

function addLanguageSwitcherToModal() {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent && !modalContent.querySelector('.modal-lang-switcher')) {
        const langSwitcher = document.createElement('div');
        langSwitcher.className = 'modal-lang-switcher';
        langSwitcher.innerHTML = `
            <button class="modal-lang-btn ${currentLanguage === 'uz' ? 'active' : ''}" onclick="changeLanguageInModal('uz')">UZ</button>
            <button class="modal-lang-btn ${currentLanguage === 'ru' ? 'active' : ''}" onclick="changeLanguageInModal('ru')">RU</button>
            <button class="modal-lang-btn ${currentLanguage === 'en' ? 'active' : ''}" onclick="changeLanguageInModal('en')">EN</button>
        `;
        
        modalContent.insertBefore(langSwitcher, modalContent.firstChild);
        
        const modalLangStyles = document.createElement('style');
        modalLangStyles.id = 'modal-lang-styles';
        modalLangStyles.textContent = `
            .modal-lang-switcher {
                display: flex;
                justify-content: center;
                gap: 8px;
                margin-bottom: 20px;
                padding: 8px;
                background: rgba(44, 85, 48, 0.05);
                border-radius: 15px;
                border: 1px solid rgba(44, 85, 48, 0.1);
            }
            
            .modal-lang-btn {
                background: transparent;
                color: #2c5530;
                border: 2px solid transparent;
                padding: 6px 12px;
                border-radius: 10px;
                cursor: pointer;
                font-family: 'Poiret One', cursive;
                font-size: 0.85rem;
                font-weight: 600;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 1px;
                min-width: 35px;
            }
            
            .modal-lang-btn:hover {
                background: rgba(44, 85, 48, 0.1);
                border-color: #2c5530;
                transform: translateY(-1px);
            }
            
            .modal-lang-btn.active {
                background: #2c5530;
                color: white;
                border-color: #2c5530;
                box-shadow: 0 2px 6px rgba(44, 85, 48, 0.3);
            }
            
            @media (max-width: 479px) {
                .modal-lang-switcher {
                    gap: 6px;
                    padding: 6px;
                }
                
                .modal-lang-btn {
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    min-width: 32px;
                }
            }
        `;
        document.head.appendChild(modalLangStyles);
    }
}

function changeLanguageInModal(lang) {
    currentLanguage = lang;
    
    document.querySelectorAll('.modal-lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.modal-lang-btn[onclick="changeLanguageInModal('${lang}')"]`).classList.add('active');
    
    updateModalTranslations(lang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const mainLangBtn = document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`);
    if (mainLangBtn) mainLangBtn.classList.add('active');
}

function updateModalTranslations(lang) {
    const t = translations[lang];
    
    const modalTitle = document.querySelector('.modal-content h3');
    if (modalTitle) modalTitle.textContent = t.modalTitle;
    
    const modalInput = document.getElementById('guestInput');
    if (modalInput) modalInput.placeholder = t.modalPlaceholder;
    
    const modalButtons = document.querySelectorAll('.modal-content button:not(.modal-lang-btn)');
    if (modalButtons.length >= 2) {
        modalButtons[0].textContent = t.modalConfirm;
        modalButtons[1].textContent = t.modalSkip;
    }
}

function setGuestName() {
    const input = document.getElementById('guestInput');
    const name = input.value.trim();
    if (name) {
        guestName = name;
        setGuestNameDisplay(name);
        localStorage.setItem('guestName', name);
        hideGuestModal();
    } else {
        const alertMessages = {
            uz: 'Iltimos, ismingizni kiriting!',
            ru: 'Пожалуйста, введите ваше имя!',
            en: 'Please enter your name!'
        };
        alert(alertMessages[currentLanguage]);
    }
}

function skipGuestName() {
    setGuestNameDisplay(translations[currentLanguage].guestDefault);
    hideGuestModal();
}

function setGuestNameDisplay(name) {
    const guestNameElement = document.getElementById('guestName');
    if (guestNameElement) {
        guestNameElement.textContent = name;
    }
}

function hideGuestModal() {
    const modal = document.getElementById('guestModal');
    modal.classList.add('hidden');
}

function initializeCountdown() {
    const weddingDate = new Date('2025-10-22T19:00:00+05:00');
    function updateCountdown() {
        const now = new Date();
        const timeDifference = weddingDate.getTime() - now.getTime();
        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            
            if (document.getElementById('days')) {
                document.getElementById('days').textContent = String(days).padStart(2, '0');
                document.getElementById('hours').textContent = String(hours).padStart(2, '0');
                document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
                document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
            }
        } else {
            if (document.getElementById('days')) {
                document.getElementById('days').textContent = '00';
                document.getElementById('hours').textContent = '00';
                document.getElementById('minutes').textContent = '00';
                document.getElementById('seconds').textContent = '00';
            }
            clearInterval(countdownInterval);
            const countdownSection = document.querySelector('.countdown-timer');
            if (countdownSection) {
                countdownSection.innerHTML = `<div class="wedding-day-message">${translations[currentLanguage].weddingDayMessage}</div>`;
            }
        }
    }
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}

function initializeNavigation() {
    updateNavigationDots();
    window.addEventListener('scroll', throttle(updateCurrentPage, 100));
    const navDots = document.querySelectorAll('.nav-dot');
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToPage(index + 1));
    });
}

function goToPage(pageNumber) {
    currentPage = pageNumber;
    const targetSection = document.getElementById(`page${pageNumber}`);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    updateNavigationDots();
}

function updateNavigationDots() {
    const navDots = document.querySelectorAll('.nav-dot');
    navDots.forEach((dot, index) => {
        if (index + 1 === currentPage) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function updateCurrentPage() {
    const sections = document.querySelectorAll('.page-section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            if (currentPage !== index + 1) {
                currentPage = index + 1;
                updateNavigationDots();
            }
        }
    });
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function openDirections() {
    const correctMapUrl = "https://maps.app.goo.gl/D59PGuc3WDtV3Lg5A";
    window.open(correctMapUrl, '_blank');
}

function addToCalendar() {
    const eventTitles = {
        uz: "Abdullo va Azimaxon nikoh to'yi",
        ru: "Свадьба Абдулло и Азимахон",
        en: "Wedding of Abdullo and Azimakhon"
    };
    
    const eventDescriptions = {
        uz: "To'yi marosimi - Amru-Maruf osh",
        ru: "Свадебная церемония - ресторан Амру-Маруф",
        en: "Wedding ceremony - Amru-Maruf restaurant"
    };
    
    const eventLocation = "Amru-Maruf osh, Yunusobod tumani, Toshkent";
    const startDate = "20251022T190000Z";
    const endDate = "20251022T230000Z";
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitles[currentLanguage])}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDescriptions[currentLanguage])}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;
    window.open(calendarUrl, '_blank');
}

function shareOnSocial(platform) {
    if (platform === 'telegram') {
        const t = translations[currentLanguage];
        const eventTitle = t.eventTitles;
        const eventDescription = t.eventDescriptions.replace(/<br>/g, '\n');
        const eventLocation = t.venueName;
        const siteUrl = window.location.href || "https://meek-gelato-2836d6.netlify.app/";
        const guestName = document.getElementById('guestName')?.textContent || t.guestDefault;

        // Form share text
        const shareText = `${t.welcomeMessage} ${guestName}!\n\n` +
                         `${eventTitle}\n` +
                         `${eventDescription}\n` +
                         `📍 ${eventLocation}\n` +
                         `🔗 ${siteUrl}`;

        // Encode text for URL
        const encodedText = encodeURIComponent(shareText);

        // Create Telegram share URL
        const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(siteUrl)}&text=${encodedText}`;

        // Open Telegram
        window.open(telegramUrl, '_blank');
    }
}

let touchStartY = 0;
let touchEndY = 0;

function initializeTouchNavigation() {
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchend', handleTouchEnd, false);
}

function handleTouchStart(event) {
    touchStartY = event.changedTouches[0].screenY;
}

function handleTouchEnd(event) {
    touchEndY = event.changedTouches[0].screenY;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchStartY - touchEndY;
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            if (currentPage < 3) goToPage(currentPage + 1);
        } else {
            if (currentPage > 1) goToPage(currentPage - 1);
        }
    }
}

function showWelcomeMessage(name) {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(44, 85, 48, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            z-index: 10000;
            font-family: 'Poiret One', cursive;
            font-size: 1.2rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            animation: slideIn 0.5s ease;
        ">
            ${translations[currentLanguage].welcomeMessage} ${name}!
        </div>
    `;
    document.body.appendChild(welcomeDiv);
    setTimeout(() => {
        if (welcomeDiv.parentNode) welcomeDiv.parentNode.removeChild(welcomeDiv);
    }, 3000);
}

function createColorfulFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    
    const flowerTypes = ['petal-1', 'petal-2', 'petal-3', 'petal-4', 'petal-5', 'petal-6'];
    const randomType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    flower.classList.add(randomType);
    
    const leftPosition = Math.random() * 100;
    flower.style.left = leftPosition + 'vw';
    flower.style.top = '-20px';
    
    const size = 12 + Math.random() * 8;
    flower.style.width = size + 'px';
    flower.style.height = size + 'px';
    
    const duration = 8 + Math.random() * 12;
    const driftX = (Math.random() - 0.5) * 200;
    flower.style.setProperty('--drift-x', driftX + 'px');
    flower.style.animationDuration = `${duration}s, ${duration * 0.5}s`;
    flower.style.animationDelay = Math.random() * 3 + 's';
    
    document.body.appendChild(flower);
    
    setTimeout(() => {
        if (flower.parentNode) flower.parentNode.removeChild(flower);
    }, (duration + 3) * 1000);
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'flower-sparkle';
    
    const leftPosition = Math.random() * 100;
    sparkle.style.left = leftPosition + 'vw';
    sparkle.style.top = '-10px';
    
    const duration = 6 + Math.random() * 8;
    sparkle.style.animationDuration = duration + 's';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle);
    }, (duration + 2) * 1000);
}

function createManualSakura() {
    const sakura = document.createElement('div');
    sakura.className = 'manual-sakura';
    const left = Math.random() * 100;
    sakura.style.left = left + 'vw';
    const colors = ['#ffb6c1', '#fffacd', '#e6e6fa', '#f0fff0'];
    sakura.style.background = colors[Math.floor(Math.random() * colors.length)];
    const duration = 10 + Math.random() * 20;
    sakura.style.animationDuration = duration + 's';
    sakura.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(sakura);
    setTimeout(() => {
        if (sakura.parentNode) sakura.parentNode.removeChild(sakura);
    }, duration * 1000);
}

function initializeFlowerWaterfall() {
    setInterval(createColorfulFlower, 1200);
    setInterval(createSparkle, 1800);
    setInterval(createManualSakura, 2000);
}

setTimeout(() => {
    if (!document.querySelector('.sakura')) {
        console.log('Запуск резервной анимации сакуры');
        initializeFlowerWaterfall();
    } else {
        setInterval(createColorfulFlower, 1000);
        setInterval(createSparkle, 1500);
    }
}, 2000);

window.addEventListener('beforeunload', function() {
    if (countdownInterval) clearInterval(countdownInterval);
});

const sakuraStyle = document.createElement('style');
sakuraStyle.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .manual-sakura {
        position: fixed;
        top: -50px;
        width: 20px;
        height: 20px;
        background: pink;
        border-radius: 50% 0 50% 50%;
        opacity: 0.7;
        animation: sakura-fall linear infinite;
        pointer-events: none;
        z-index: 9999;
    }
    
    @keyframes sakura-fall {
        0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 0.7; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(sakuraStyle);