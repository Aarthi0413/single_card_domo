// Fetch data from Domo
domo.get(`/data/v1/olist_data?fields=customer_city,price&groupby=customer_city`)
    .then(function(data){
      //console.log(data);
       data = data.sort((a,b) => b.price - a.price)
      
      const ctx = document.getElementById('myChart').getContext('2d');

      const mychart=new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [data[0].customer_city, data[1].customer_city, data[2].customer_city, data[3].customer_city,data[4].customer_city],
        datasets: [{
          label: 'Top five city by price',
          data: [data[0].price, data[1].price,data[2].price,data[3].price,data[4].price],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
})
