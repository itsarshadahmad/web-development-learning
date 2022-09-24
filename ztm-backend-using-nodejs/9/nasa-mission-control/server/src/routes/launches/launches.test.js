// ? All information about testing used in this module
/*
All test are installed as dev dependency.

? Layers of testing (representing depth of testing follow numbers):-
1) GUI Tests | 2) Service/API Layer Test | 3) Unit Tests
---- OR ----
1) User | 2) Automated UI Tests | 3) API Tests (Integration Testing) | 4) Unit Tests

* Jest follows same pattern as other testing framework do (in maybe other languages).
Jest works with both frontend and backend to test web app functionality.
? Storing test files can be done in two ways:-
Either store it inside modules you are writing test for.
Or store all test files using __test__ folder name, inside root of your server.
? There are two ways to save test files:- using *.test.js  OR  using *.specs.js
* Jest watches files with these extension or __test__ folder to find and run all test cases.
In this course we will works with API testing or Integration testing.

? Test Runners :-
Test Runner is a tool that is used to run or execute tests and export results. 
It is a library that selects the source code directory and picks the test files 
to run them for verifying bugs and errors. 
* Finds test in your project and run them.

? Test Fixtures :-
A test fixture is a fixed state of a set of objects used as a baseline for 
running tests. The purpose of a test fixture is to ensure that there is a well known 
and fixed environment in which tests are run so that results are repeatable.
* It is way your test are setup on your module or individual test where each test fixture
can run in its own environment within its own sets variable and data.

? Assertions :- 
Assertions in testing are a way to verify that the expected result 
and the actual result matched or not.

? Mocking :-
Mocking is a process used in unit testing when the unit being tested has 
external dependencies. The purpose of mocking is to isolate and focus on the 
code being tested and not on the behavior or state of external dependencies.

SuperTest allow to make requests against our node HTTP servers. It also provide some
convenient assertions on top of what JEST provide us.These assertions are specific to HTTP
request and response.

*/

// request() makes request against our API
const request = require("supertest")
const app = require("../../app")

// Creates test fixtures with different test cases 
// describe("about your test", callback where actual test cases are written)
describe("Test GET /launches", () => {
    // test() defines each of test cases
    test("It should respond with 200 success", async () => {
        // Actual test cases
        // request is accessing our express server to run test by running server on get method
        // route /launches and check its status code return 200.
        // request is doing is making request to our server of defined route just like browser
        // or fetch function or axios. Then comparing requested result to expected result.
        // Supertest also have expect which can be chained with request and test results
        const response = await request(app)
            .get("/launches")
            .expect("Content-Type", /json/)
            .expect(200)
        // Jest way to test result
        // expect(response.statusCode).toBe(200)
    })
})

describe("Test POST /launches", () => {
    const completeLaunchData = {
        mission: "USS Enterprise",
        rocket: "NCC 1701-D",
        target: "Kepler-186 f",
        launchDate: "January 4, 2028"
    }

    const launchDataWithoutDate = {
        mission: "USS Enterprise",
        rocket: "NCC 1701-D",
        target: "Kepler-186 f"
    }

    const launchDataWithInvalidDate = {
        mission: "USS Enterprise",
        rocket: "NCC 1701-D",
        target: "Kepler-186 f",
        launchDate: "zoot"
    }

    // Creating new launch
    test("It should respond with 201 created", async () => {
        // Here send() is send data to backend and testing response
        const response = await request(app)
            .post("/launches")
            .send(completeLaunchData)
            .expect("Content-Type", /json/)
            .expect(201)

        // Matching weather sending and recieving dates are same after 
        // converting them in unix time to avoid error.
        const requestDate = new Date(completeLaunchData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate)

        // Using Jest we are test on response matching datatype through passed object 
        // comparing response body or can response to be same which we send in request
        expect(response.body).toMatchObject(launchDataWithoutDate)
    })

    // Testing error handling conditions
    test("It should catch missing required properties", async () => {
        const response = await request(app)
            .post("/launches")
            .send(launchDataWithoutDate)
            .expect("Content-Type", /json/)
            .expect(400)

        // Strictly checking error condition to match exact error messages
        expect(response.body).toStrictEqual({
            error: "Missing required launch property"
        })
    })

    test("It should catch invalid dates", async () => {
        const response = await request(app)
            .post("/launches")
            .send(launchDataWithInvalidDate)
            .expect("Content-Type", /json/)
            .expect(400)

        expect(response.body).toStrictEqual({
            error: "Invalid launch date"
        })
    })
})

