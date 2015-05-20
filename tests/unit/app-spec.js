define(["app-fixture", "app"],
function(AppFixture,    App) {
  describe("App", function() {
    it("Should greet", function() {
      expect(App.greeting).toEqual(AppFixture.greeting);
    });
  });
});
