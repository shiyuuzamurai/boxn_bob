const backgrounds = [
    'background1.png', 
    'background2.png', 
    'background3.png', 
    'background4.png', 
];

// ランダムで背景画像を選択
const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
const backgroundElement = document.getElementById('background');

// 最背面の背景用divにランダムな背景画像を設定
backgroundElement.style.backgroundImage = `url('${randomBackground}')`;

// 画面幅に応じた背景サイズの調整関数
function adjustBackgroundSize() {
    if (window.innerWidth <= 600) { // スマホサイズ
        backgroundElement.style.backgroundSize = 'contain'; // 画像全体が収まるように
    } else {
        backgroundElement.style.backgroundSize = 'cover'; // デスクトップサイズでは画面全体をカバー
    }
}

// 初回調整
adjustBackgroundSize();

// リサイズ時にも背景サイズを調整
window.addEventListener('resize', adjustBackgroundSize);
