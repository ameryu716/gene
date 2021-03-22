window.addEventListener("load",()=>{
    function twCreate(shareText){
        const tweetdiv = document.getElementById("tweetdiv");
        tweetdiv.innerHTML = "";
        twttr.widgets.createShareButton(
            "https://willwebgame.com/game/gene/index.html",
            document.getElementById("tweetdiv"),
            {
                size: "large", //ボタンはでかく
                lang: "ja",
                text: shareText, // 狙ったテキスト
                hashtags: "", // ハッシュタグ
                url: "https://willwebgame.com/game/gene/index.html" // URL
            }
        );
    }
    const outputTextArea = document.getElementById("output");
    outputTextArea.addEventListener("change",()=>{
        const nowInText = document.getElementById("output").value;
        console.log(nowInText);
        twCreate(nowInText);
        console.log("変えました");
    })
})