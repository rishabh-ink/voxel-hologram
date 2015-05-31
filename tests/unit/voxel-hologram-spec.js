define(["voxel-hologram-fixture", "voxel-hologram"],
function(VoxelHologramFixture,     VoxelHologram) {
  describe("VoxelHologram", function() {
    it("Should initialize Voxel", function() {
      var voxelHologram = VoxelHologram.create();

      expect(voxelHologram.components.voxel).toBeDefined();
    });
  });
});
