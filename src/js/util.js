//applies regex to html page to find a link
KG.findLink = (regexString) => {
	var re = new RegExp(regexString);
	var result = document.body.innerHTML.match(re);
	if (result && result.length > 0) {
		return result[0].split('"')[1];
	}
	return "";
}

//wildcard-enabled string comparison
KG.if = (str, rule) => {
	return new RegExp("^" + rule.split("*").join(".*") + "$").test(str);
}

//iterates over an array with supplied function
//either (array, min, max, func)
//or     (array, func)
KG.for = (array, min, max, func) => {
	if (typeof min == "function") {
		func = min;
		max = array.length - 1;
	}
	min = Math.max(0, min) || 0;
	max = Math.min(array.length - 1, max);
	for (var i = min; i <= max; i++) {
		func(i, array[i]);
	}
}