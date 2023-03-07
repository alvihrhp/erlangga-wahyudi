const csv = require("@fast-csv/parse");
const pool = require("../connection");

function readCsv() {
  return new Promise((resolve, reject) => {
    const data = [];

    csv
      .parseFile("data.csv")
      .on("error", (error) => reject("MASALAH"))
      .on("data", (row) => {
        const rowData = row[0].split(";");
        const objectData = {
          periodData: rowData[0],
          dataSource: rowData[1],
          cif: rowData[2],
          count: rowData[3],
          cardNumber: rowData[4],
          branchName: rowData[5],
          area: rowData[6],
          clientName: rowData[7],
          dpd: rowData[8],
          osPrinciple: rowData[11],
          osMargin: rowData[13],
          progDiscPelunasan: rowData[15],
        };
        data.push(objectData);
      })
      .on("end", () => resolve(data));
  });
}

async function organizedData() {
  try {
    const result = await readCsv();
    let text =
      "INSERT INTO user_tbl (period_date, data_source, number_base, count, no_card, branch_name, area, name, dpd, outstanding_pokok, outstanding_margin, program_discount) VALUES ";
    for (let i = 0; i < result.length; i++) {
      if (i < result.length - 1) {
        text += `('${result[i].periodData}', '${result[i].dataSource}', '${result[i].cif}', '${result[i].count}', '${result[i].cardNumber}', '${result[i].branchName}', '${result[i].area}', '${result[i].clientName}', '${result[i].dpd}', '${result[i].osPrinciple}', '${result[i].osMargin}', '${result[i].progDiscPelunasan}'), `;
      } else {
        text += `('${result[i].periodData}', '${result[i].dataSource}', '${result[i].cif}', '${result[i].count}', '${result[i].cardNumber}', '${result[i].branchName}', '${result[i].area}', '${result[i].clientName}', '${result[i].dpd}', '${result[i].osPrinciple}', '${result[i].osMargin}', '${result[i].progDiscPelunasan}');`;
      }
    }
    console.log(text);
    await pool.query(text);
  } catch (error) {
    console.log(error);
  }
}

organizedData();
