let fadeElements:number = 0;

function newDivElementR(message:string):HTMLDivElement{
    const newfade:HTMLDivElement = document.createElement("div");
    newfade.innerText = message;
    return newfade;
}

function fadeAlert(message:string){
    const fadeMessageContainer:HTMLDivElement|null = (<HTMLDivElement>document.getElementById("fadealert-container"));
    if(fadeElements===0){
        //コンテナ有効化
        fadeMessageContainer.style.display = "block";
    }
    fadeElements++;
    const newfadeElement = newDivElementR(message);
    fadeMessageContainer.appendChild(newfadeElement);
    
    setTimeout(() => {
        //フェードアラート実体化後、すぐに透明度を下げ始める
        newfadeElement.style.opacity = "0";
        setTimeout(() => {
            //五秒後に削除。フェードアラートが残っていなければコンテナを削除
            if(fadeElements>0){
                //フェードアラートが残っている場合、一つ消去
                const fMCchild:any = fadeMessageContainer.getElementsByTagName("div")[0];
                fadeMessageContainer.removeChild(fMCchild);
                fadeElements--;
            }
            if(fadeElements===0){
                //フェードアラートが残っていない場合コンテナ消去
                fadeMessageContainer.style.display = "none";
            }
        }, 5000);
    }, 500);
}

window.addEventListener("load",()=>{
    const copybtn:HTMLButtonElement|null = (<HTMLButtonElement>document.getElementById("copy"));
    copybtn!.addEventListener("click",()=>{
        fadeAlert("コピーしました");
    });
})