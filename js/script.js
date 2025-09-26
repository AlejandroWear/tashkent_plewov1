/**
 * @author Qazi Maaz Arshad <qazimaazarshad@gmail.com>
 */
(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Audio played on user interaction');
});

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
        weddingDayMessage: "🎉 TO'Y KUNI KELDI! 🎉"
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
        weddingDayMessage: "🎉 ДЕНЬ СВАДЬБЫ НАСТАЛ! 🎉"
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
        weddingDayMessage: "🎉 WEDDING DAY IS HERE! 🎉"
    }
};

let currentLanguage = 'uz';

// Set the date we're counting down to
var countDownDate = new Date("Oct 22, 2025 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (document.getElementById("days")) {
        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }
    
    if (distance < 0) {
        clearInterval(x);
        const countdownSection = document.querySelector('.countdown-timer');
        if (countdownSection) {
            countdownSection.innerHTML = `<div class="wedding-day-message">${translations[currentLanguage].weddingDayMessage}</div>`;
        }
    }
}, 1000);

var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
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

let currentPage = 1;
let guestName = '';
let countdownInterval;

document.addEventListener('DOMContentLoaded', function() {
    handleGuestNameFromUrl();
    showGuestModal();
    initializeCountdown();
    initializeNavigation();
    // Removed initializeScrolling() to prevent auto-scrolling
    initializeTouchNavigation();
    createLanguageSwitcher();
    changeLanguage('uz'); // Set default language
});

function createLanguageSwitcher() {
    const languageSwitcher = document.createElement('div');
    languageSwitcher.className = 'language-switcher';
    languageSwitcher.innerHTML = `
        <button class="lang-btn active" onclick="changeLanguage('uz')">UZ</button>
        <button class="lang-btn" onclick="changeLanguage('ru')">RU</button>
        <button class="lang-btn" onclick="changeLanguage('en')">EN</button>
    `;
    
    // Add CSS for language switcher
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

        .lang-btn:hover {
            background: rgba(44, 85, 48, 0.1);
            border-color: #2c5530;
        }

        .lang-btn.active {
            background: #2c5530;
            color: white;
            border-color: #2c5530;
            box-shadow: 0 2px 8px rgba(44, 85, 48, 0.3);
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
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(languageSwitcher);
}

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update all translatable elements
    updateTranslations(lang);
}

function updateTranslations(lang) {
    const t = translations[lang];
    
    // Update greeting
    const greeting = document.querySelector('.greeting');
    if (greeting) greeting.textContent = t.greeting;
    
    // Update guest greeting
    const guestGreeting = document.querySelector('.guest-greeting');
    if (guestGreeting && document.getElementById('guestName')) {
        const guestNameEl = document.getElementById('guestName');
        const guestNameText = guestNameEl.textContent;
        if (guestNameText === 'mehmon' || guestNameText === 'гость' || guestNameText === 'guest') {
            guestNameEl.textContent = t.guestDefault;
        }
        guestGreeting.innerHTML = `${t.guestGreeting} <span id="guestName">${guestNameEl.textContent}</span>!`;
    }
    
    // Update invitation text
    const mainText = document.querySelector('.main-text');
    if (mainText) mainText.textContent = t.invitationText;
    
    // Update couple names
    const groomName = document.querySelector('.groom-name');
    const brideName = document.querySelector('.bride-name');
    const conjunction = document.querySelector('.conjunction');
    
    if (groomName) groomName.textContent = t.groomName;
    if (brideName) brideName.textContent = t.brideName;
    
    // Update conjunction between names
    if (conjunction) {
        if (lang === 'uz') {
            conjunction.textContent = 'va ';
        } else if (lang === 'ru') {
            conjunction.textContent = 'и ';
        } else {
            conjunction.textContent = '& ';
        }
    }
    
    // Update wedding details
    const weddingDetails = document.querySelector('.wedding-details');
    if (weddingDetails) weddingDetails.innerHTML = t.weddingDetails;
    
    // Update family signature
    const familySignature = document.querySelector('.family-signature p');
    if (familySignature) familySignature.innerHTML = t.familySignature;
    
    // Update location section
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
    
    // Update countdown section
    const countdownTitle = document.querySelector('.countdown-page .section-title');
    if (countdownTitle) countdownTitle.textContent = t.countdownTitle;
    
    // Update time labels
    const timeLabels = document.querySelectorAll('.time-label');
    if (timeLabels.length >= 4) {
        timeLabels[0].textContent = t.days;
        timeLabels[1].textContent = t.hours;
        timeLabels[2].textContent = t.minutes;
        timeLabels[3].textContent = t.seconds;
    }
    
    // Update modal
    const modalTitle = document.querySelector('.modal-content h3');
    if (modalTitle) modalTitle.textContent = t.modalTitle;
    
    const modalInput = document.getElementById('guestInput');
    if (modalInput) modalInput.placeholder = t.modalPlaceholder;
    
    const modalButtons = document.querySelectorAll('.modal-content button');
    if (modalButtons.length >= 2) {
        modalButtons[0].textContent = t.modalConfirm;
        modalButtons[1].textContent = t.modalSkip;
    }
    
    // Update action buttons if they exist
    const calendarBtn = document.querySelector('button[onclick*="addToCalendar"]');
    if (calendarBtn) calendarBtn.textContent = t.calendarBtn;
    
    const telegramBtn = document.querySelector('button[onclick*="shareOnSocial"]');
    if (telegramBtn) telegramBtn.textContent = t.telegramBtn;
}

function showGuestModal() {
    const modal = document.getElementById('guestModal');
    const savedName = localStorage.getItem('guestName');
    const nameFromUrl = getUrlParameter('name');
    if (savedName || nameFromUrl) {
        modal.classList.add('hidden');
    } else {
        modal.classList.remove('hidden');
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
        // Use manual scroll instead of smooth behavior to have more control
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

// Removed initializeScrolling and handleKeyboardNavigation functions
// to prevent automatic scrolling behavior

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
    const venueCoordinates = "41.327493574829546,69.26000731517259";
    const venueName = "Amru-Maruf osh, Yunusobod tumani";
    const userAgent = navigator.userAgent.toLowerCase();
    let mapUrl;
    
    // Правильные ссылки для навигации
    if (userAgent.includes('android')) {
        // Для Android - прямая ссылка на навигацию
        mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${venueCoordinates}&travelmode=driving`;
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
        // Для iOS - пробуем открыть в приложении Apple Maps
        mapUrl = `http://maps.apple.com/?daddr=${venueCoordinates}&dirflg=d`;
    } else {
        // Для десктопа и других устройств
        mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${venueCoordinates}&travelmode=driving`;
    }
    
    console.log('Opening map URL:', mapUrl);
    window.open(mapUrl, '_blank');
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
    const startDate = "20251022T140000Z";
    const endDate = "20251022T180000Z";
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitles[currentLanguage])}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDescriptions[currentLanguage])}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;
    window.open(calendarUrl, '_blank');
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

setTimeout(() => {
    if (!document.querySelector('.sakura')) {
        console.log('Запуск резервной анимации сакуры');
        setInterval(createManualSakura, 500);
    }
}, 2000);

window.addEventListener('beforeunload', function() {
    if (countdownInterval) clearInterval(countdownInterval);
});

// Add manual sakura styles
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