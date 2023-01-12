const testJobs = require('../test/TestJobs.js');

module.exports = (assert, github) => {
    return function() {
        this.timeout(8000);

        testJobs(false, (job) => github.getTags(job));

        it("should resolve for 'NONPLAYT/GitHubWebAPI4Java'", () => {
            var job = {
                author: "NONPLAYT",
                repo: "GitHubWebAPI4Java",
                branch: "master",
                directory: "NONPLAYT/GitHubWebAPI4Java/master"
            }

            return github.getTags(job).then((tags) => Promise.all([
                assert.exists(tags),
                assert.notExists(tags.documentation_url),
                assert.isArray(tags),

                assert.exists(tags[0]),
                assert.exists(tags[0].name)
            ]));
        });

        it("should resolve with an empty Array for 'NONPLAYT/NONPLAYT:main' (No Tags)", () => {
            var job = {
                author: "NONPLAYT",
                repo: "NONPLAYT",
                branch: "main",
                directory: "NONPLAYT/NONPLAYT/main"
            }

            return github.getTags(job).then((tags) => {
                assert.exists(tags);
                assert.notExists(tags.documentation_url);
                assert.isArray(tags);
                assert.isEmpty(tags);
            });
        });

        it("should reject for 'NONPLAYT/____' (Not-existing Repository)", () => {
            var job = {
                author: "NONPLAYT",
                repo: "____",
                branch: "master",
                directory: "NONPLAYT/____/master"
            }

            return assert.isRejected(github.getTags(job));
        });
    }
}
