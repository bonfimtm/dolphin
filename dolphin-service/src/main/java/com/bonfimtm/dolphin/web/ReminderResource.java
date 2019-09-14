package com.bonfimtm.dolphin.web;

import java.util.Optional;

import com.bonfimtm.dolphin.domain.Reminder;
import com.bonfimtm.dolphin.repository.ReminderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReminderResource {

    @Autowired
    private ReminderRepository reminderRepository;

    @GetMapping("/reminders")
    public Iterable<Reminder> findAll() {
        return reminderRepository.findAll();
    }

    @GetMapping("/reminders/{id}")
    public Optional<Reminder> findById(@PathVariable long id) {
        return reminderRepository.findById(id);
    }

    @PostMapping("/reminders")
    public Reminder save(@RequestBody Reminder reminder) {
        return reminderRepository.save(reminder);
    }

    @DeleteMapping("/reminders/{id}")
    public void deleteById(@PathVariable long id) {
        reminderRepository.deleteById(id);
    }

}