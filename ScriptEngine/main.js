var ScriptEngine;
(function (ScriptEngine) {
    var Engine = /** @class */ (function () {
        function Engine() {
            this._count = 0;
        }
        Engine.prototype.start = function () {
            this.loop();
        };
        Engine.prototype.loop = function () {
            this._count++;
            document.title = this._count.toString();
            requestAnimationFrame(this.loop.bind(this));
        };
        return Engine;
    }());
    ScriptEngine.Engine = Engine;
})(ScriptEngine || (ScriptEngine = {}));
window.onload = function () {
    var e = new ScriptEngine.Engine();
    e.start();
    document.body.innerHTML += "Foo";
};
//# sourceMappingURL=main.js.map