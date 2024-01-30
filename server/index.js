const express = require('express');
const app = express();
const port = 3000;

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('dua_main.sqlite');

app.get('/', (req, res) => {
  // Query the 'category' table
  db.all('SELECT * FROM category', [], (errCategory, rowsCategory) => {
    if (errCategory) {
      console.error(errCategory.message);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Query the 'sub_category' table
    db.all('SELECT * FROM sub_category', [], (errSubCategory, rowsSubCategory) => {
      if (errSubCategory) {
        console.error(errSubCategory.message);
        res.status(500).send('Internal Server Error');
        return;
      }

      // Query the 'dua' table
      db.all('SELECT * FROM dua', [], (errDua, rowsDua) => {
        if (errDua) {
          console.error(errDua.message);
          res.status(500).send('Internal Server Error');
          return;
        }

        // Log data to the console
        console.log('Category:', rowsCategory);
        console.log('Sub Category:', rowsSubCategory);
        console.log('Dua:', rowsDua);

        // Send response to the client
        res.send({
          category: rowsCategory,
          subCategory: rowsSubCategory,
          dua: rowsDua,
        });
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
