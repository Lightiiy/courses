import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

    @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
    @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>;
    // newServerName = '';
    // newServerContent = '';
    @ViewChild('serverContentInput',{static: true}) serverContentInput: ElementRef;

  constructor() { }
  
 onAddServer(nameInput) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});

  }

}
