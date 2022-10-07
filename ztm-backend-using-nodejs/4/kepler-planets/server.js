// csv-parse parse csv file but it requires readable stream as input
const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

// CSV [createReadStream()] --> PIPE [parse()] --> Formatted Data
// Creating read byte stream (Readable Stream) of .csv file data.
fs.createReadStream('kepler_data.csv')
    /* Pipe is used to attach a Writable stream to the readable stream so that it consequently 
    switches into flowing mode and then pushes all the data that it has to the attached 
    Writable. */
    .pipe(parse({
        // # to indicate comment syntax
        comment: '#',
        // columns to return data as JSON formatted unlikely without it as 2D-Array
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data)) {
            habitablePlanets.push(data);
        }
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(habitablePlanets.map((planet) => {
            return planet['kepler_name'];
        }));
        console.log(`${habitablePlanets.length} habitable planets found!`);
    });

/* Streams:
It is used to transfer data, and increase performance.
Buffers:
Temporary storage spot for a chunk of data that is being transferred from one place to 
another. The buffer is filled with data, then passed along. Transfer small chunks of data
at a time.

Buffer is used to get chunks of data from source and use streams to transfer files chunk
by chunk on internet.
*/