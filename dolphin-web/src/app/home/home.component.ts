import { Component, OnInit } from '@angular/core';
import { Reminder } from '../reminder';
import { RemindersService } from '../reminders.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedReminder: Reminder;
  reminders: Reminder[];

  constructor(private remindersService: RemindersService) {
  }

  ngOnInit() {
    this.showReminder(1);
    this.showAllReminders();
  }

  showReminder(id: number) {
    this.remindersService.findById(id)
      .subscribe((data: Reminder) => this.selectedReminder = data);
  }

  showAllReminders() {
    this.remindersService.findAll()
      .subscribe((data: Reminder[]) => this.reminders = data);
  }

}
