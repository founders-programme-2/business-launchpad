const Airtable = require('airtable');

require('dotenv').config();

const getResources = (req, res, next) => {
  Promise.resolve().then(()=>{
  const dataToReturn = [];

  const airtableApiKey = process.env.AIRTABLE_API_KEY;

  const base = new Airtable({ apiKey: airtableApiKey }).base(
    'appgH7AyEBjlIYXt9'
  );

  base('Resources')
    .select({
      view: 'Grid view',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        // eslint-disable-next-line func-names
        records.forEach(function(record) {
          dataToReturn.push(record.fields);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          res.json({
            success: false,
            err:
              'There has been an error fetching the resources from Airtable.',
          });
        }
        res.json({ success: true, data: dataToReturn });
      }
    );
  }).catch(next);
};

module.exports = { getResources };
