;var HtmlTextHelper = (function () {

    return {
        isHtmlEqual: function (text1, text2) {
            if (text1 === null || text2 === null) return false;
            if (text1 === text2) return true;
            var textDiff = RevisionManagerHelper.diffHtml(text1, text2, false, true);
            return textDiff.indexOf("<mse-ins>") === -1 && textDiff.indexOf("<mse-del>") === -1;
        }
    }
})();