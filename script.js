const backgrounds = [
    'background1.png', 
    'background2.png', 
    'background3.png', 
    'background4.png', 
];

// ランダムで背景画像を選択
const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

// 最背面の背景用divにランダムな背景画像を設定
document.getElementById('background').style.backgroundImage = `url('${randomBackground}')`;

