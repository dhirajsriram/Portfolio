export const html = (assets: any, markup: string): string => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8" />
    <title>Dhiraj Sriram</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-96554645-2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
  
      gtag('config', 'UA-96554645-2');
    </script>
  
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Dhiraj Sriram portfolio">
    <meta name="author" content="">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
      integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" defer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" defer></script>
    <!-- Bootstrap core CSS -->
  
    <!-- Custom fonts for this template -->
    <!-- Custom styles for this template -->
    ${
      assets.client.css
        ? `<link rel="stylesheet" href="${assets.client.css}">`
        : ''
    }
    ${
      process.env.NODE_ENV === 'production'
        ? `<script src="${assets.client.js}" defer></script>`
        : `<script src="${assets.client.js}" defer crossorigin></script>`
    }
</head>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script>
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('loading').style.display = 'none'
})
      </script>
      <style>
      #sideNav{
        z-index: -1;
      }
      #loading {
        position: fixed; /* Sit on top of the page content */
        display: block; /* Hidden by default */
        width: 100%; /* Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #4c4c4c; /* Black background with opacity */
        z-index: 800; /* Specify a stack order in case you're using a different order for other elements */
        cursor: pointer;
        margin: auto;
      }
      .loader:after {
        content: " ";
        display: block;
        margin: auto;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #29f3c3;
        border-color: #29f3c3 transparent #29f3c3 transparent;
        animation: loader-dual-ring 1.2s linear infinite;
      }
      @keyframes loader-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    </style>
<body>
<div id="loading"><div class="loader"></div></div>
    <div id="root">${markup}</div>
</body>
</html>`;