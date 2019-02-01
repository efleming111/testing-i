const enhancer = require('./enhancer');

const items = [
    {
        name: '[+15] Sword',
        type: 'weapon',
        durability: 70,
        enhancement: 15
    },
    {
        name: '[TET] Silver Helmet',
        type: 'armor',
        durability: 100,
        enhancement: 'PEN'
    },
    {
        name: '[+5] Sword',
        type: 'weapon',
        durability: 70,
        enhancement: 5
    },
    {
        name: 'Bronze Armor',
        type: 'armor',
        durability: 100,
        enhancement: 0
    }
]

// Repair function
const repaired1 = enhancer.repair(items[2]);

// Success function
const success1 = enhancer.success(items[0]);
const success2 = enhancer.success(items[1]);
const success3 = enhancer.success(items[2]);
const success4 = enhancer.success(items[3]);

// Fail function
const fail1 = enhancer.fail(items[0]);
const fail2 = enhancer.fail(items[1]);
const fail3 = enhancer.fail(items[2]);
const fail4 = enhancer.fail(items[3]);

describe('Enhancement functions', ()=>{
    describe('repair function', ()=>{
        test('durability equals 100', ()=>{
            expect(repaired1.durability).toEqual(100);
        })
        test('Remaining keys left unchanged', ()=>{
            expect(repaired1.name).toEqual(items[2].name);
            expect(repaired1.type).toEqual(items[2].type);
            expect(repaired1.enhancement).toEqual(items[2].enhancement);
        })
    })

    describe('success function', ()=>{
        test('Enhancment value is correct', ()=>{
            expect(success1.enhancement).toEqual('PRI');
            expect(success2.enhancement).toEqual('PEN');
            expect(success3.enhancement).toEqual(6);
            expect(success4.enhancement).toEqual(1);
        })

        test('Name is correct', ()=>{
            expect(success1.name).toEqual('[PRI] Sword');
            expect(success2.name).toEqual('[TET] Silver Helmet');
            expect(success3.name).toEqual('[+6] Sword');
            expect(success4.name).toEqual('[+1] Bronze Armor');
        })
    })

    describe('fail function', ()=>{
        test('Durability value is correct', ()=>{
            expect(fail1.durability).toEqual(60);
            expect(fail2.durability).toEqual(90);
            expect(fail3.durability).toEqual(65);
            expect(fail4.durability).toEqual(95);
        })

        test('Name is correct', ()=>{
            expect(fail1.name).toEqual('[+15] Sword');
            expect(fail2.name).toEqual('[TET] Silver Helmet');
            expect(fail3.name).toEqual('[+5] Sword');
            expect(fail4.name).toEqual('Bronze Armor');
        })
    })
})
