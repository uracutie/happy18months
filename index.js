function updateText() {
    const reasons = [
        'You\'re The Cutest',
        'You Always Smell Good!'
    ]

    let newReason = reasons[Math.floor(Math.random() * reasons.length)];
    document.getElementById('reasonText').innerHTML = newReason;
    
}