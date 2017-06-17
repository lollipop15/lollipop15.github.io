function news() {
    $.ajax({
        method: "GET",
        url : "/news",
        success: function(data){
            var block = document.getElementById('NEWS');
            // var ul = document.getElementById('TITLE')
            var p;
            var h3;
            // console.log(data);
            for (var i in data)
            {
                    h3 = document.createElement('h3');
                    p = document.createElement('p');
                    h3.textContent = data[i][0]; 
                    p.textContent = data[i][1];
                    block.appendChild(h3);
                     block.appendChild(p);
            }

        }
    });

}

setInterval(news, 3000);
