// ===== Swiperの初期化 =====
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// ===== 雨の背景を生成するスクリプト =====
const rainContainer = document.getElementById('rain');

function createRainDrop() {
    const drop = document.createElement('div');
    drop.classList.add('rain-drop');

    const left = Math.random() * 100;
    const duration = Math.random() * 0.5 + 0.5;
    const delay = Math.random() * 5;
    const hue = Math.random() * 60 + 180;

    drop.style.left = left + 'vw';
    drop.style.animationDuration = duration + 's';
    drop.style.animationDelay = delay + 's';
    drop.style.background = `linear-gradient(to top, rgba(255, 255, 255, 0), hsla(${hue}, 100%, 70%, 0.6))`;

    rainContainer.appendChild(drop);
}

// 100個の雨粒を生成
for (let i = 0; i < 100; i++) {
    createRainDrop();
}
