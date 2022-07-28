// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogdata/${data}.json`, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Nop such blog found" });
    }
    console.log("req : ", req);
    res.status(200).json(JSON.parse(data));
  });
  // res.status(200).json({ name: "John Doe" });
}
