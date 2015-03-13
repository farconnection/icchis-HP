

// $("textarea").change( function() {
// 	var txtVal = $(this).val();
// 	txtVal = txtVal.replace(/\r\n/g, "&lt;br /&gt;<br />");
// 	txtVal = txtVal.replace(/(\n|\r)/g, "&lt;br /&gt;<br />");
// 	$('#testpre').html('<p>'+ txtVal +'</p>');
// });

// $(".form1").submit(function() {

// 	var textform= document.getElementsByName('name');

// 	var va = encodeURIComponent(textform);

// 	alert(va[0].value); // -> 'value1'と表示される

// 	//エラーの初期化
// 	$("p.error").remove();
// 	$("table tr td").removeClass("error");
// 	$(":text,textarea").filter(".validate").each(function(){
// 		//必須項目のチェック
// 		$(this).filter(".required").each(function(){
// 			if($(this).val() =="") {
// 			$(this).parent().prepend("
// 				<p class="error">必須項目です</p>
// 			");
// 		}
// 	});
// 	//ひらがなのチェック
// 	$(this).filter(".kana").each(function(){
// 		if($(this).val() &amp;&amp; !$(this).val().match(/^[ぁ-ん,ー]+$/)) {
// 		$(this).parent().prepend("
// 			<p class="error">ひらがなで入力してください</p>
// 		");
// 		}
// 	});
// });

// //エラーがあった場合の処理
// if($("p.error").size() &gt; 0) {
// return false; //submit処理の中断
// }

// $(".home_nav a").hover(
//   function () {
//     $(this).stop().animate({'opacity' : '0.4'}, 500);
//   },
//   function () {
//     $(this).stop().animate({'opacity' : '1'}, 500);
//   }
// );

// $(".to_only").click(function(event) {
// 	/* Act on the event */
// 	var pw;

// 	pw = prompt("パスワードを入れて下さい。","");

// 	if (pw == "abcde"){
// 	  location.href = "only/index.html";
// 	}else{
// 	  alert("パスワードが違います！");
// 	  location.href = "../index.html";
// 	}

// });
