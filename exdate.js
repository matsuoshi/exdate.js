/**
 * javascript Date() 拡張
 */

Date.prototype.format = function(str)
{
	var fmt = {
		// day
		'%d' : (this.getDate() < 10) ? '0' + this.getDate() : this.getDate(),
		'%j' : this.getDate(),
		'%D' : (['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[this.getDay()],
		'%l' : (['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[this.getDay()],
		'%S' : (['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'])[this.getDay() % 10],
		'%w' : this.getDay(),
		'%W' : (['日', '月', '火', '水', '木', '金', '土'])[this.getDay()],
		
		// month
		'%F' : (['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[this.getMonth()],
		'%m' : (this.getMonth() < 9) ? '0' + (this.getMonth() + 1) : this.getMonth() + 1,
		'%n' : this.getMonth() + 1,
		'%M' : (['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[this.getMonth()],
		
		// year
		'%y' : this.getYear() % 100,
		'%Y' : this.getFullYear(),
		
		// hour
		'%a' : (this.getHours() > 11) ? 'pm' : 'am',
		'%A' : (this.getHours() > 11) ? 'PM' : 'AM',
		'%g' : this.getHours() % 12,
		'%G' : this.getHours(),
		'%h' : (this.getHours() % 12 < 10) ? '0' + (this.getHours() % 12) : this.getHours() % 12,
		'%H' : (this.getHours() < 10) ? '0' + this.getHours() : this.getHours(),
		
		// minute
		'%i' : (this.getMinutes() < 10) ? '0' + this.getMinutes() : this.getMinutes(),
		
		// second
		'%s' : (this.getSeconds() < 10) ? '0' + this.getSeconds() : this.getSeconds(),
		'%u' : this.getTime() % 1000,
		'%U' : this.getTime() / 1000,
		
		'%%' : '%%'
	}

	return str.replace(/(%[\w%])/g, function(e) {
		return fmt[e];
	});
};
