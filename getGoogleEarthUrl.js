// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function getEarthUrlForWaypoint(document_root) {
    var div = document_root.getElementsByClassName("markup-location-latlon")
    var hyperlink = " https://earth.google.com/web/search/" + div[0].innerText.substr(0, 9) + div[0].innerText.substr(10, 10) + "/"
    console.log(div)
    console.log(hyperlink)
    return hyperlink;
}
chrome.runtime.sendMessage({
    action: "getSource",
    source: getEarthUrlForWaypoint(document)
});
