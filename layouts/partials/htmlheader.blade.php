<head>
  {{--  
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>SB Admin 2 - Blank</title>
  --}}
  {!! Theme::metatags() !!}
  @php
	//Bootstrap core CSS
  /*
	Theme::add('/theme/vendor/fontawesome-free/css/all.min.css');
	Theme::addStyle('https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i');
	Theme::add('/theme/css/sb-admin-2.min.css');
  Theme::add('/theme/css/xot.css');
  */
  Theme::add('adm_theme::dist/css/app.css',1);

  @endphp
  {{--  
  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.min.css" rel="stylesheet">
	--}}
	{!! Theme::showStyles(false) !!}
	@stack('styles')
</head>