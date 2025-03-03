// 图片数组
const images = [
    'img/IMG_0552.PNG',
    'img/IMG_0553.PNG',
    'img/IMG_0554.PNG',
    'img/IMG_0555.PNG',
    'img/IMG_0556.PNG',
    'img/IMG_0557.PNG'
];

// 获取页面元素
const randomImage = document.getElementById('randomImage');
const drawButton = document.getElementById('drawButton');

// 抽取图片的函数
function drawRandomImage() {
    // 生成随机索引
    const randomIndex = Math.floor(Math.random() * images.length);
    // 设置图片源并显示图片
    randomImage.src = images[randomIndex];
    randomImage.style.display = 'block'; // 显示图片
}

// 为按钮添加点击事件监听器
drawButton.addEventListener('click', drawRandomImage);