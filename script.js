// Swiperの初期化
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
