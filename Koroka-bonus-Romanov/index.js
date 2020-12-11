const got = require('got');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function fetch() {
    got('https://reqres.in/api/users?per_page=20')
        .then(response => {
            const x = response.body
            let y = JSON.parse(x)

            const csvWriter = createCsvWriter({
                path: 'NewCsvFile.csv',
                header: [{
                        id: 'id',
                        title: `'id'`
                    },
                    {
                        id: 'first_name',
                        title: `'first_name'`
                    },
                    {
                        id: 'last_name',
                        title: `'first_last'`
                    },
                    {
                        id: 'email',
                        title: `'email'`
                    }

                ]
            });

            let records = [];
            for (let i = 0; i < y.data.length; i++) {
                records.push({
                    id: ` ` + `'${y.data[i].id}'`,
                    first_name: ` ` + `'${y.data[i].first_name}'`,
                    last_name: ` ` + `'${y.data[i].last_name}'`,
                    email: ` ` + `'${y.data[i].email}'`
                })

            }
            csvWriter.writeRecords(records)
                .then(() => {
                    console.log('...Done');
                });
        })
};

fetch();