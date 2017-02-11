const fs = require('fs')

const load = fileName =>
    fs.readFileSync(__dirname + '/' + fileName, 'utf-8').split('\n')

module.exports = {
    get twentyThousands() {
        return load('20k.txt')
    },
    get englishUsaNoSwearsShort() {
        return load('google-10000-english-usa-no-swears-short.txt')
    },
    get englishNoSwears() {
        return load('google-10000-english-no-swears.txt')
    },
    get englishUsaNoSwears () {
        return load('google-10000-english-usa-no-swears.txt')
    },
    get englishUsaNoSwearsLong () {
        return load('google-10000-english-usa-no-swears-long.txt')
    },
    get englishUsa() {
        return load('google-10000-english-usa.txt')
    },
    get englishUsaNoSwearsMedium() {
        return load('google-10000-english-usa-no-swears-medium.txt')
    },
    get english() {
        return load('google-10000-english.txt')
    }
}
