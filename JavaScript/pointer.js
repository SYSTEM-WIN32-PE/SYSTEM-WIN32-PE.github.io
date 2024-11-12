// 获取按钮元素
const button = document.querySelector('button');

// 当按钮被点击时设置鼠标指针样式
button.addEventListener('click', () => {
    document.body.style.cursor = 'url("../pointer/FluentCursorClick20Regular.png") 16 16, pointer';
});

// 当鼠标离开按钮时恢复默认的鼠标指针样式
button.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'default';
});
