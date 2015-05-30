define(["app-fixture", "app"],
function(AppFixture,    App) {
  describe("App", function() {
    it("Should initialize Voxel", function() {
      var app = App.create({
        name: "voxel-hologram"
      });

      expect(app.components.voxel).toBeDefined();
    });
  });
});
