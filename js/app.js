document.addEventListener('DOMContentLoaded', function() {
    loadPortfolio();
});

function loadPortfolio() {
    const url = 'data.json';
    
    fetch(url)
        .then(response =>  response.json())
        .then(data => {
            // Build the template
            let html = '';
            
            data.portfolio.forEach(item => {
                html += `
                    <div class="item">
                        <img src="img/${item.id}.jpg">
                        <div class="content">
                            <h3>${item.projectname}</h3>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                `;
            });
            
            // After the template is built the HTML is rendered
            document.querySelector('#portfolio').innerHTML = html;
        });
}