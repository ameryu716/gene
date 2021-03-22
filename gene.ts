window.addEventListener("load",()=>{
    const enter:HTMLButtonElement|null  = (<HTMLButtonElement>document.getElementById("enter"));
    const outputTextarea:HTMLTextAreaElement|null|any = (<HTMLTextAreaElement>document.getElementById("output"));
    enter.addEventListener("click",()=>{
        let st1:string|null = (<HTMLInputElement>document.getElementById("st1")).value;
        let st2:string|null = (<HTMLInputElement>document.getElementById("st2")).value;
        let st3:string|null = (<HTMLInputElement>document.getElementById("st3")).value;
        let st4:string|null = (<HTMLInputElement>document.getElementById("st4")).value;
        if(st1==""){
            st1 = "（未入力）";
        }
        if(st2==""){
            st2 = "（未入力）";
        }
        if(st3==""){
            st3 = "（未入力）";
        }
        if(st4==""){
            st4 = "（未入力）";
        }
        const outputText:string = `「${st1}が好きな人と付き合いたいです～！」というのは、${st2}が好きな人を探してるのであって、${st3}${st4}する異常行動者を探しているわけではない。`;
        outputTextarea.value = outputText;
        if ("createEvent" in document) {
            const evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            outputTextarea.dispatchEvent(evt);
        }else{
            outputTextarea.fireEvent("onchange");
        }
    })

    const copybtn:HTMLButtonElement|null = (<HTMLButtonElement>document.getElementById("copy"));
    copybtn!.addEventListener("click",()=>{
        const outputText:HTMLTextAreaElement|null = (<HTMLTextAreaElement>document.getElementById("output"));
        // 文字をすべて選択
        outputText!.select();
        // コピー
        document.execCommand("copy");
        getSelection()!.removeAllRanges();
    })

    const resetbtn:HTMLButtonElement|null = (<HTMLButtonElement>document.getElementById("reset"));
    resetbtn.addEventListener("click",()=>{
        if(confirm("リセットしてよろしいですか？")){
            (<HTMLInputElement>document.getElementById("st1")).value = "";
            (<HTMLInputElement>document.getElementById("st2")).value = "";
            (<HTMLInputElement>document.getElementById("st3")).value = "";
            (<HTMLInputElement>document.getElementById("st4")).value = "";
        }else{
            return;
        }
    })

})