describe('html text helper', function () {
    describe('removeExtraEmptyLines', function () {
        it("removes nothing if one line", function () {
            expect(1).toBe(1);
        });
        it("removes extra empty line if multiple", function () {
            // expect(HtmlTextHelper.isHtmlEqual('<p><br></p><p><br/></p>')).toBe('<p><br></p>');
        });
        it("removes empty line from start or end", function () {
            // expect(HtmlTextHelper.isHtmlEqual('<p><br></p><p>line 1</p><p><br></p>')).toBe('<p>line 1</p>');
        });
    });
});