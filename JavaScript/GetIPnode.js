// 使用 ipinfo API 获取 IP 地址信息
fetch('https://ipinfo.io/json?token=dabcc5dd0b46e1')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip').textContent = data.ip;
        document.getElementById('country').textContent = data.country;
        document.getElementById('isp').textContent = data.org; // ISP 信息
    })
    .catch(error => console.error('获取IP信息出错:', error));
