import { Component, OnInit } from '@angular/core';
import { Reminder } from '../reminder';
import { RemindersService } from '../reminders.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  reminders: Reminder[];
  newReminderContent: string;

  constructor(private remindersService: RemindersService) {
  }

  ngOnInit() {
    this.showAllReminders();
  }

  addReminder() {
    if (this.newReminderContent) {
      this.remindersService.save({
        id: null,
        content: this.newReminderContent,
        completed: false,
      }).subscribe(_ => {
        this.newReminderContent = '';
        this.showAllReminders();
      });
    }
  }

  showAllReminders() {
    this.remindersService.findAll()
      .subscribe((data: Reminder[]) => this.reminders = data);
  }

  toggleCompleted(reminder: Reminder) {
    reminder.completed = !reminder.completed;
    this.remindersService.save(reminder).subscribe(_ => {
      this.showAllReminders();
    });
  }

  deleteReminder(reminder: Reminder) {
    this.remindersService.deleteById(reminder.id).subscribe(_ => {
      this.showAllReminders();
    });
  }

}
