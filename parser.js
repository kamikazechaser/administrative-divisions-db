const fs = require("fs");
const _ = require("lodash");

async function main() {
  try {
    const extractedData = [];
    const countriesData = [];
    const processedData = {};

    const rawData = await fs.promises.readFile("./raw.txt", "utf8");
    const rawLines = rawData.split("\n");

    for (const i of rawLines) {
      const lineData = i.split("\t");

      const countryCode = i.split(".")[0];
      const adminRegion = lineData[1];

      countriesData.push(countryCode);

      extractedData.push({
        c: countryCode,
        a: adminRegion,
      });
    }

    for (const i of _.uniq(countriesData)) {
      processedData[i] = [];
    }

    for (const i of extractedData) {
      processedData[i.c].push(i.a);
    }

    for (const country in processedData) {
      await fs.promises.writeFile(
        `./api/${country}`,
        JSON.stringify(processedData[country])
      );
    }
  } catch (error) {
    console.log(error);
  }
}

main();
