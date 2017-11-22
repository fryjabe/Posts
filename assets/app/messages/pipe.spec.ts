import { TestBed, inject, async,getTestBed } from '@angular/core/testing';


import {MessageFilterPipe} from './message-filter.pipe';

describe('Messages test', () => {
    beforeEach(() => {
        this.messages = [
            {content: 'bert jansch', username: 'Kuba' },
            {content: 'message', username: 'John' },
            {content: 'incredible', username: 'Eryc' },
            {content: 'graham nash', username: 'Kuba' },
            {content: 'jackson c. frank', username: 'Kuba' },
        ];

        TestBed.configureTestingModule({
            declarations: [
                MessageFilterPipe
            ]
        })
    });


    describe("Filter messages", () => {
        let filter = new MessageFilterPipe();

        it('No search string returns array of all messages', () => {
            let result = filter.transform(this.messages, '');
            expect(result.length).toBe(5);
            expect(result[0].username).toBe('Kuba');
            expect(result[2].username).toBe('Eryc');
        });

        it('Returns message of a given search string', () => {
            let result = filter.transform(this.messages, 'John');
            expect(result.content).toBe('message');
        });

    });
});





