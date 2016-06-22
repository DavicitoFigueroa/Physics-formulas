var ask = require ('readline-sync')

var questionOne = ask.question('Select option (1=speed, 2=force, 3=pressure, 4=acceleration due to gravity, 5=free fall, 6=acceleration, 7=distance due to graity, 8=slope, 9=momentum, 10=impulse, 11=work, 12=power, 13=celsius, 14=kinetic energy, 15=potential energy, 16=current, 17=electric power, 18=coulomb, 19=electric field, 20=electric potential): ')

	if (questionOne == 1) {
		var formula = ask.question('Calculate distance, time, or speed?')

		if (formula == 'distance') {
			var a = ask.question('time: ')
			var b = ask.question('speed: ')
			var aConv = parseFloat(a)
			var bConv = parseFloat(b)
			var total = aConv * bConv
			console.log('Distance: ' + total)
		}
		if (formula == 'time') {
			var a = ask.question('distance: ')
			var b = ask.question('speed: ')
			var aConv = parseFloat(a)
			var bConv = parseFloat(b)
			var total = a / b
			console.log('Time: ' + total)
		}
		if (formula == 'speed') {
			var a = ask.question('distance: ')
			var b = ask.question('time: ')
			var aConv = parseFloat(a)
			var bConv = parseFloat(b)
			var total = a / b
			console.log('Speed: ' + total)
		}
	}
	if (questionOne == 2) {
		var formula = ask.question('Calculate force, mass, or  acceleration? ')

		if( formula == 'force'){
			var a = ask.question('mass: ')
			var b = ask.question('acceleration')
			var aConv = parseFloat(a)
			var bConv = parseFloat(b)
			var total = a * b
			console.log('Force: ' + total)
		}
		if (formula == 'mass') {
			var a = ask.question('force: ')
			var b = ask.question('acceleration')
			var aConv = parseFloat(a)
			var bConv = parseFloat(b)
			var total = a / b
			console.log('Mass: ' + total)	
		};
		if (formula == 'acceleration') {
			var a = ask.question('force: ')
			var b = ask.question('mass')
			var aConv = parseFloat(a)
			var bConv = parseFloat(b)
			var total = a / b
			console.log('Acceleration: ' + total)
		}
	}
	if (questionOne == 3){
		var formula = ask.question('Calculate pressure, force, or area')

		if( formula == 'force'){
			var a = ask.question('pressure: ')
			var b = ask.question('area: ')
			var aConv = parseFloat(a)
			var bConv = parseFloat(b)
			var total = a * b
			console.log('Force: ' + total)
		}
		if (formula == 'pressure') {
			var a = ask.question('force: ')
			var b = ask.question('area: ')
			var aConv = parseFloat(a)
			var bConv = parseFloat(b)
			var total = a / b
			console.log('Pressure: ' + total)	
		};
		if (formula == 'area') {
			var a = ask.question('force: ')
			var b = ask.question('pressure: ')
			var aConv = parseFloat(a)
			var bConv = parseFloat(b)
			var total = aConv / bConv
			console.log('Area: ' + total)
		}
	};
	if (questionOne == 4) {
		var formula = ask.question('Calculate acceleration due to gravity, change in velocity, or time: ')

		if (formula == acceleration due to gravity) {
			var subA = ask.question('initial velocity: ')
			var secondSubA = ask.question('current velocity: ')
			var subAConv = parseFloat(subA)
			var secondSubAConv = parseFloat(secondSubA)
			var aConv = secondSubAConv - subAConv
			var b = ask.question('time: ')
			var bConv = parseFloat(bConv)
			var total = aConv / bConv
			console.log('Acceleration due to Gravity: ')
		}
			else if (formula == change in velocity) {
			var a = ask.question('acceleration due to gravity: ')
			var subAConv = parseFloat(a)
			var b = ask.question('time: ')
			var bConv = parseFloat(bConv)
			var total = aConv * bConv
			console.log('Acceleration due to Gravity: ')
		}
			else if (formula == time) {
			var subA = ask.question('initial velocity: ')
			var secondSubA = ask.question('current velocity: ')
			var subAConv = parseFloat(subA)
			var secondSubAConv = parseFloat(secondSubA)
			var aConv = secondSubAConv - subAConv
			var b = ask.question('acceleration due to gravity: ')
			var bConv = parseFloat(bConv)
			var total = aConv / bConv
			console.log('Acceleration due to Gravity: ')
		}
	}
	if (questionOne == 5) {
		var formula = ask.question(' Calculate free-fall(velocity), acceleration due to gravity, or elapsed-time: ')

		if (formula == 'free-fall(velocity)') {
			var a = ask.question('elapsed-time: ')
			var b = ask.question('acceleration due to gravitypooh	wefppp	ph	fewo: ')
			var aConv = parseFloat(a)
			var bConv = parseFloat(b)
			var total = aConv * bConv
			console.log('Distance: ' + total)
		}
		if (formula == 'time') {
			var a = ask.question('distance: ')
			var b = ask.question('speed: ')
			var aConv = parseFloat(a)
			var bConv = parseFloat(b)
			var total = a / b
			console.log('Time: ' + total)
		}
		if (formula == 'speed') {
			var a = ask.question('distance: ')
			var b = ask.question('time: ')
			var aConv = parseFloat(a)
			var bConv = parseFloat(b)
			var total = a / b
			console.log('Speed: ' + total)
		}
	}