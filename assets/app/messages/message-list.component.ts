import { Component, OnInit } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from "./message.service";
import { MessageFilterPipe } from "./message-filter.pipe"

@Component({
    selector: 'app-message-list',
    template: `
        <div class="container">
        <div class="row">
        <div class="col-md-8 col-md-offset-2">

        <input type="text" class="form-control" placeholder="Search author" [(ngModel)]="search" />
        <br>

            <app-message
                   [message]="message"
                    *ngFor="let message of messages | messageFilter: search"></app-message>

        </div>



        </div>
    `,
    pipes: [MessageFilterPipe]
})
export class MessageListComponent implements OnInit {
    messages: Message[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;
                }
            );
    }
}