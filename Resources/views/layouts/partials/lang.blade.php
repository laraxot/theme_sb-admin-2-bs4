{{-- lang --}}
{{ Theme::add('theme/bc/bootstrap-language/languages.min.css') }}
<li class="dropdown">
	<a class="dropdown-toggle" data-toggle="dropdown" href="#">
	<i class="lang-sm lang-lbl-full" lang="{{ App::getLocale() }}"></i> <i class="fa fa-caret-down"></i>
	</a>
  <ul class="dropdown-menu" >
	@foreach(config('laravellocalization.supportedLocales') as $lang => $vl)
			@if($lang!=App::getLocale())
				<li><a href="{{  Theme::route(['lang'=>$lang]) }}"><i class="lang-sm lang-lbl-full" lang="{{ $lang}}"></i></a></li>
			@endif
	@endforeach
  </ul>
</li>
{{-- /lang --}}
</ul>
