$(function(){
	var apiKey = 'faec5744a461f565db994c4f0e042925';
	var baseUrl= 'http://api.openweathermap.org/data/2.5/forecast?APPID=' + apiKey + '&units=metric';

	$('#weather button').click(function(e){
		e.preventDefault();

		var cityValue = $('#city').val();
		var params = {
			url: baseUrl + '&q=' + cityValue,
			maethod: 'GET'
		};

		$.ajax(params).done(function(response){
			console.log(response);

			$('.card').removeClass('d-none');
			$('#city').removeClass('is-invalid');
			$('.invalid-feedback').slideUp();
			$('.card').show();

			$('.card-title').text(response.city.name);
			$('.temp-weather').text(Math.round(response.list[0].main.temp));
			$('.temp-min-weather').text(Math.round(response.list[0].main.temp_min));
			$('.temp-max-weather').text(Math.round(response.list[0].main.temp_max));
			$('.description-weather').text(response.list[0].weather[0].description);
			var image = response.list[0].weather[0].icon;
			$('.image-weather').attr('src', 'http://openweathermap.org/img/wn/' + image + '.png');
			$('.image-weather').attr('alt', response.name);

	
			var image = response.list[2].weather[0].icon;
			$('.image-weather-1').attr('src', 'http://openweathermap.org/img/wn/' + image + '.png');
			$('.image-weather-1').attr('alt', response.name);
			$('.temp-min-weather-1').text(Math.round(response.list[2].main.temp_min));
			$('.temp-max-weather-1').text(Math.round(response.list[2].main.temp_max));
			$('.description-weather-1').text(response.list[2].weather[0].description);
		
			var image = response.list[8].weather[0].icon;
			$('.image-weather-2').attr('src', 'http://openweathermap.org/img/wn/' + image + '.png');
			$('.image-weather-2').attr('alt', response.name);
			$('.temp-min-weather-2').text(Math.round(response.list[8].main.temp_min));
			$('.temp-max-weather-2').text(Math.round(response.list[8].main.temp_max));
			$('.description-weather-2').text(response.list[8].weather[0].description);
			
			var image = response.list[16].weather[0].icon;
			$('.image-weather-3').attr('src', 'http://openweathermap.org/img/wn/' + image + '.png');
			$('.image-weather-3').attr('alt', response.name);
			$('.temp-min-weather-3').text(Math.round(response.list[16].main.temp_min));
			$('.temp-max-weather-3').text(Math.round(response.list[16].main.temp_max));
			$('.description-weather-3').text(response.list[16].weather[0].description);
		
		})

		.fail(function(){
			$('.invalid-feedback').slideDown();
			$('#city').addClass('is-invalid');
			$('.card').hide();

			console.log('Error');
		});
	});
});