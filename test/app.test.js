const { exec } = require('child_process');

test('Application runs without error', (done) => {
    exec('node app.js', (error, stdout, stderr) => {
        expect(error).toBeNull();
        expect(stderr).toBe('');
        expect(stdout).toContain('Application is running.');
        done();
    });
});
