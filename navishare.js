if (navigator.share) {
    const outputText = document.getElementById("output").value;
    navigator.share({
        title: '異常行動者否定ジェネレータ',
        text: outputText,
        url: 'https://willwebgame/game/gene/index.html',
    })
    .then(() => {
        
    })
    .catch((error) => {
        
    });
}