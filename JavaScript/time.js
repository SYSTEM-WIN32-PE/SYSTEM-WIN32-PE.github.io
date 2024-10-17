// js/time.js

function getBeijingTime() {
    const options = { timeZone: 'Asia/Shanghai', hour12: false };
    const beijingTime = new Intl.DateTimeFormat('zh-CN', {
        ...options,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(new Date());
    return beijingTime;
}

// 获取今日公历
function getGregorianDate() {
    const gregorianDate = new Date().toLocaleDateString('zh-CN');
    return `公历: ${gregorianDate}`;
}

// 更新实时时间
function updateTime() {
    const timeContainer = document.getElementById('time');
    const dateContainer = document.getElementById('gregorian-date');

    if (timeContainer && dateContainer) {
        timeContainer.textContent = getBeijingTime();
        dateContainer.textContent = getGregorianDate();
    }
}

// 每秒更新一次
setInterval(updateTime, 1000);

// 初始化页面时显示一次时间
updateTime();
