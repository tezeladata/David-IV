const home = document.querySelector(".hero");
const intro = document.querySelector(".introduction");
const history = document.querySelector(".historical-context");
const legacy = document.querySelector(".legacy");
const footer = document.querySelector("footer");

const anchorIDs = ["header-a1", "header-a2", "header-a3", "header-a4"];

window.addEventListener("scroll", function(event) {
    const homeRect = home.getBoundingClientRect();
    const introRect = intro.getBoundingClientRect();
    const historyRect = history.getBoundingClientRect();
    const legacyRect = legacy.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    const linkTargets = {
        "header-a1": homeRect.top < 0 && homeRect.bottom > 0,
        "header-a2": introRect.top < 0 && introRect.bottom > 0,
        "header-a3": historyRect.top < 0 && historyRect.bottom > 0,
        "header-a4": legacyRect.top < 0 && legacyRect.bottom > 0,
    };

    const isFooterInView = footerRect.top < window.innerHeight && footerRect.bottom >= 0;

    for (let i = 0; i < anchorIDs.length; i++) {
        const anchorID = anchorIDs[i];
        const anchor = document.getElementById(anchorID);
        const isLinkActive = linkTargets[anchorID];
        anchor.style.color = isLinkActive && !isFooterInView ? "#9a9a9a" : "#fff";
    }
});