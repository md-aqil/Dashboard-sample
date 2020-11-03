

ScrollOut({
    cssProps: {
      visibleY: true,
      viewportY: true
    },
  });
  
var ctx = document.getElementById('barChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#F3A187',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        },
        ]
    },

    // Configuration options go here
    options: {}
});


var ctx = document.getElementById('barChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#546de5',
         
            data: [0, 10, 5, 2, 20, 30, 45]
        },
        ]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('doughnutChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Sat', 'Sun',],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#546de5',
           
            data: [0, 100, 50, 2, 200, 30, 450]
        },
        {
            label: 'My First dataset3',
            backgroundColor: '#e15f41',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 0, 2, 20, 0,5]
        },
        {
            label: 'My First dataset2',
            backgroundColor: '#e77f67',
            borderColor: 'blue',
            data: [0, 10, 5, 2, 20, 30, 45]
        },
        ]
    },

    // Configuration options go here
    options: {}
});

var swiperMobile = new Swiper('.swiper-container.swiper-full-mobile', {
    slidesPerView: 5,
    spaceBetween: 20,
    slideToClickedSlide:true,
    centeredSlides:true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,

    },

    loop:true,
    //   autoplay: {
    //     delay: 100000,
    //   },


      keyboard: {
      enabled: true,
      onlyInViewport: true,
    },


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


     breakpoints: {
          
          640: {
            freemode:true,
            slidesPerView: 3,
            spaceBetween: 20,
          },
          320: {
            freemode:true,
            slidesPerView: 3,
            spaceBetween: 20,
          }
    }

  });
  
  