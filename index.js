module.exports = {
  id: "rophim",
  name: "Rophim",
  description: "Xem phim trực tuyến từ rophim.me",
  run: async ({ open }) => {
    await open("https://rophim.me");
  },
};