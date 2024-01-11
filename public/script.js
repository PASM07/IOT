document.addEventListener('DOMContentLoaded', function() {
    function fetchData() {
        fetch('/get-data')
            .then(response => response.text())
            .then(data => {
                document.getElementById('text-container').textContent = data;
            })
            .catch(error => console.error('Error:', error));
    }

    // Полагая, что у вас есть маршрут на сервере, который возвращает данные для '/get-data'
    setInterval(fetchData, 5000); // Запрашивать данные каждые 5 секунд
});
