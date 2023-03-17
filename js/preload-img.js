const images = ['../../images/dancer-bg.png',
                '../../images/icon-logo.jpg',
                '../../images/img-1.png',
                '../../images/img-2.png',
                '../../images/img-3.png',
                '../../images/img-4.png',
                '../../images/img-5.png',
                '../../images/logo.png'];
           
images.forEach((image) => {
  const img = new Image();
  img.src = image;
});