const enhancer = require('./enhancer');

// test('Test enhancer', ()=>{
//     expect(enhancer.subtract(5, 2)).toEqual(3);
// })

const items = [
    {
        name: 'Sword',
        type: 'weapon',
        durablilty: 70,
        enhancement: 15
    },
    {
        name: 'Silver Helmet',
        type: 'armor',
        durablilty: 100,
        enhancement: 'TET'
    },
    {
        name: 'Sword',
        type: 'weapon',
        durablilty: 70,
        enhancement: 5
    },
]

// Repair function
const repaired1 = enhancer.repair(items[2]);

// Success function
const enh1 = enhancer.repair(items[0]);
const enh2 = enhancer.repair(items[1]);
const enh3 = enhancer.repair(items[2]);

describe('Enhancement functions', ()=>{
    describe('repair function', ()=>{
        test('durablilty equals 100', ()=>{
            expect(repaired1.durablilty).toEqual(100);
        })
        test('Remaining keys left unchanged', ()=>{
            expect(enh1.enhancement).toEqual('PRI');
            expect(enh2.enhancement).toEqual('PEN');
            expect(enh3.enhancement).toEqual(6);
        })
    })

    secsribe('success function', ()=>{
        test('enhancment value is correct', ()=>{
            expect(repaired1.name).toEqual(items[2].name);
        })
    })
})
