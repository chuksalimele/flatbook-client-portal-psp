function createData(type, datetime, account, method, amount, status) {
  return { type, datetime, account, method, amount, status };
}

const transactions = [
  createData(
    "deposit",
    "May 5, 2021 12:39:03",
    "39482584",
    "Skrill",
    30000,
    "Successful"
  ),
  createData(
    "deposit",
    "May 5, 2021 12:39:03",
    "39482584",
    "Skrill",
    34000,
    "Pending"
  ),
  createData(
    "deposit",
    "May 3, 2021 12:39:03",
    "39482584",
    "Fasapay",
    20000,
    "Successful"
  ),
  createData(
    "deposit",
    "May 6, 2021 12:39:03",
    "39482584",
    "Skrill",
    40000,
    "Successful"
  ),
  createData(
    "deposit",
    "May 6, 2021 12:39:03",
    "39482584",
    "Skrill",
    60000,
    "Successful"
  ),
  createData(
    "deposit",
    "May 7, 2021 12:39:03",
    "39482584",
    "Fasapay",
    20000,
    "Successful"
  ),
  createData(
    "deposit",
    "May 7, 2021 12:39:03",
    "39482584",
    "Skrill",
    40000,
    "Failed"
  ),
  createData(
    "deposit",
    "May 9, 2021 12:39:03",
    "39482584",
    "Skrill",
    60000,
    "Pending"
  ),
  createData(
    "deposit",
    "May 9, 2021 12:39:03",
    "39482584",
    "Skrill",
    30000,
    "Successful"
  ),
  createData(
    "deposit",
    "May 9, 2021 12:39:03",
    "39482584",
    "Skrill",
    80000,
    "Successful"
  ),
  createData(
    "deposit",
    "deposit",
    "May 15, 2021 12:39:03",
    "39482584",
    "Fasapay",
    200050,
    "Successful"
  ),
  createData(
    "deposit",
    "May 25, 2021 12:39:03",
    "39482584",
    "Skrill",
    220000,
    "Successful"
  ),
  createData(
    "deposit",
    "May 25, 2021 12:39:03",
    "39482584",
    "Skrill",
    33000,
    "Successful"
  ),
  createData(
    "deposit",
    "May 25, 2021 12:39:03",
    "39482584",
    "Skrill",
    6000,
    "Successful"
  ),
  createData(
    "deposit",
    "May 25, 2021 12:39:03",
    "39482584",
    "Skrill",
    70000,
    "Successful"
  ),
  createData(
    "deposit",
    "May 27, 2021 12:39:03",
    "39482584",
    "Skrill",
    800400,
    "Successful"
  ),
  createData(
    "withdrawal",
    "May 21, 2021 17:39:03",
    "39482584",
    "Skrill",
    33000,
    "Successful"
  ),
  createData(
    "withdrawal",
    "May 25, 2021 12:39:03",
    "39482584",
    "Fasapay",
    16000,
    "Successful"
  ),
  createData(
    "withdrawal",
    "May 25, 2021 12:39:03",
    "39482584",
    "Skrill",
    6000,
    "Successful"
  ),
  createData(
    "withdrawal",
    "May 25, 2021 12:39:03",
    "39482584",
    "Skrill",
    70000,
    "Successful"
  ),
  createData(
    "withdrawal",
    "May 27, 2021 12:39:03",
    "39482584",
    "Skrill",
    800400,
    "Successful"
  ),
  createData(
    "transfer",
    "May 11, 2021 12:39:03",
    "39482584",
    "Fasapay",
    200050,
    "Successful"
  ),
  createData(
    "transfer",
    "May 21, 2021 12:39:03",
    "39482584",
    "Skrill",
    220000,
    "Successful"
  ),
  createData(
    "transfer",
    "May 24, 2021 12:39:03",
    "39482584",
    "Fasapay",
    33000,
    "Successful"
  ),
  createData(
    "transfer",
    "May 26, 2021 12:39:03",
    "39482584",
    "Skrill",
    6000,
    "Successful"
  ),
];

export default transactions;
