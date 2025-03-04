describe("", () => {
  it("", async () => {
    const response = await fetch("http://localhost:3000/api/status");
    const responseBody = await response.json()
    expect(responseBody.status).toBe("100");
  });
});
