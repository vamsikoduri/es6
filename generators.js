let testingTeam = {
    lead: 'Chris wrath',
    tester: 'James gosling',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
}


let engineeringTeam = {
    testingTeam,
    lead: 'Mike Sheradian',
    manager: 'Patrick Naughtan',
    engineer: 'Ed Frank',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }

}

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    // const testTeam = TestingTeam(team.testingTeam)
    // yield* testTeam;
    yield* team.testingTeam;

}

function* TestingTeam(team) {
    yield team.lead;
    yield team.tester;


}

const associates = [];

//for( let employee of TeamIterator(engineeringTeam))
for (let employee of engineeringTeam) {
    associates.push(employee);
}

console.log(associates);

