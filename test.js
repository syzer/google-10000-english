import test from 'ava'
import words from './index'

test('Loads all dictionaries', t => {
    t.deepEqual(words.twentyThousands.length, 20001)
    t.deepEqual(words.englishUsa.length, 10000)
    t.deepEqual(words.english.length, 10001)
    t.deepEqual(words.englishNoSwears.length, 9915)
    t.deepEqual(words.englishUsaNoSwears.length, 9903)
    t.deepEqual(words.englishUsaNoSwearsShort.length, 2187)
    t.deepEqual(words.englishUsaNoSwearsMedium.length, 5472)
    t.deepEqual(words.englishUsaNoSwearsLong.length, 2247)
})