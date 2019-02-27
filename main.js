$("body").on("change", ".filter", function (e) {
	//mouseover, keyup, keydown, keypress click -- in place of "change"//
	//[dot]filter [dot] calls to class//
	e.preventDefault();

	console.log("Hello,world!");

	const $this_filter = $(this);

	const food_type = $this_filter.val();

	//const filer = $(this).val();//
	//can also use above, another kind of chaining//

	console.log("Food type " + food_type)

	// () inside=gets done, setter;; leave it empty=gets the value, getter //
	$(".item.active").removeClass("active");
	$("." + food_type).addClass("active");

	//"." + food_type == concatenation, connecting strings//

	console.log("We made it!");


});