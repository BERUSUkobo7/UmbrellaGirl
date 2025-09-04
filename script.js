// ===== Swiperの初期化 =====
const swiper = new Swiper('.swiper-container', {
    // スライドがループするように設定
    loop: true,
    
    // 自動再生の設定
    autoplay: {
        delay: 3000, // 3秒ごとにスライドを切り替え
        disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
    },

    // ページネーション（画面下部の丸いインジケーター）の設定
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // クリックでスライドを切り替えられるようにする
    },

    // ナビゲーションボタン（左右の矢印）の設定
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

    // 雨粒のプロパティをランダムに設定
    const left = Math.random() * 100; // 横位置
    const duration = Math.random() * 0.5 + 0.5; // 落下速度 (0.5秒〜1秒)
    const delay = Math.random() * 5; // 開始タイミング
    const hue = Math.random() * 60 + 180; // 色相 (シアン〜青〜紫)

    drop.style.left = left + 'vw';
    drop.style.animationDuration = duration + 's';
    drop.style.animationDelay = delay + 's';
    // 色をランダムにする
    drop.style.background = `linear-gradient(to top, rgba(255, 255, 255, 0), hsla(${hue}, 100%, 70%, 0.6))`;


    rainContainer.appendChild(drop);
}

// 100個の雨粒を生成
for (let i = 0; i < 100; i++) {
    createRainDrop();
}
