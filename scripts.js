function scrollToPos(pos) {
    const scrollTop = document.documentElement.scrollTop;

    if (Math.abs(scrollTop - pos) <= 1) {
        return;
    }

    window.scrollTo({
        top: pos,
        behavior: 'smooth'
    })
}