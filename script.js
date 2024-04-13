homeAnchor = document.getElementById("header-a1")
introAnchor = document.getElementById("header-a2")
historyAnchor = document.getElementById("header-a3")
legacyAnchor = document.getElementById("header-a4")

window.addEventListener("scroll", function(event) {
    let getScrollPosition = this.scrollY;

    const anchorIDs = ["header-a1", "header-a2", "header-a3", "header-a4"];

    const linkTargets = {
        "header-a1": getScrollPosition < 943.2000122070312,
        "header-a2": getScrollPosition >= 943.2000122070312 && getScrollPosition < 2420,
        "header-a3": getScrollPosition >= 2420 && getScrollPosition < 6630.39990234375,
        "header-a4": getScrollPosition >= 6630.39990234375 && getScrollPosition < 7211.2001953125,
    };

    for (let i = 0; i < anchorIDs.length; i++) {
        const anchorID = anchorIDs[i];
        const anchor = document.getElementById(anchorID);
        const isLinkActive = linkTargets[anchorID];
        anchor.style.color = isLinkActive ? "#9a9a9a" : "#fff";
    }
});