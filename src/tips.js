class modelFormat {
  constructor(id, tip) {
    this.id = id;
    this.tips = tip;
  }
}

let baseMocked = [];

export const tipsDB = (app) => {

  app.post("/create", (request, response) => {
    const { id, tips } = request.body;

    const Tip = new modelFormat(id, tips);
    baseMocked.push(Tip);
    response.send("Informação armazenada");
  });

  app.get("/view", (request, response) => {
    const random = baseMocked[Math.floor(Math.random() * baseMocked.length)];
    response.send(random);
  });
};
