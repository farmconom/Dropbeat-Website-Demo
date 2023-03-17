const images = ['/Dropbeat-Website-Demo/images/dancer-bg.png',
                '/Dropbeat-Website-Demo/images/icon-logo.jpg',
                '/Dropbeat-Website-Demo/images/img-1.png',
                '/Dropbeat-Website-Demo/images/img-2.png',
                '/Dropbeat-Website-Demo/images/img-3.png',
                '/Dropbeat-Website-Demo/images/img-4.png',
                '/Dropbeat-Website-Demo/images/img-5.png',
                '/Dropbeat-Website-Demo/images/logo.png'];
           
images.forEach((image) => {
  const img = new Image();
  img.src = image;
});