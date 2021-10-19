<<<<<<< HEAD
  import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { Message } from 'src/app/_models/message';
  import { MembersService } from 'src/app/_services/members.service';
  import { MessageService } from 'src/app/_services/message.service';

  @Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-member-messages',
    templateUrl: './member-messages.component.html',
    styleUrls: ['./member-messages.component.css']
  })
  export class MemberMessagesComponent implements OnInit {
    @ViewChild('messageForm') messageForm: NgForm;
    @Input() messages: Message[];
    @Input() username: string;
    messageContent: string;
    loading = false;
  
    constructor(public messageService: MessageService) { }
  
    ngOnInit(): void {
    }
  
    sendMessage() {
      this.messageService.sendMessage(this.username, this.messageContent).then(() => {
        this.messageForm.reset();
      }).finally(() => this.loading = false);
    }
  }
=======
  import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { Message } from 'src/app/_models/message';
  import { MembersService } from 'src/app/_services/members.service';
  import { MessageService } from 'src/app/_services/message.service';

  @Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-member-messages',
    templateUrl: './member-messages.component.html',
    styleUrls: ['./member-messages.component.css']
  })
  export class MemberMessagesComponent implements OnInit {
    @ViewChild('messageForm') messageForm: NgForm;
    @Input() messages: Message[];
    @Input() username: string;
    messageContent: string;
    loading = false;
  
    constructor(public messageService: MessageService) { }
  
    ngOnInit(): void {
    }
  
    sendMessage() {
      this.loading = true;
      this.messageService.sendMessage(this.username, this.messageContent).then(() => {
        this.messageForm.reset();
      }).finally(() => this.loading = false);
    }
  }
>>>>>>> 13e180c09d5f81bddaa25f8385013d20d0ce978a
