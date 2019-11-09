package com.bonfimtm.dolphin.web;

import java.util.Optional;

import com.bonfimtm.dolphin.domain.Reminder;
import com.bonfimtm.dolphin.repository.ReminderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:8001", "http://178.62.212.37:8001" })
@RestController()
@RequestMapping("/reminders")
public class ReminderResource {

    @Autowired
    private ReminderRepository reminderRepository;

    @GetMapping("")
    public Iterable<Reminder> findAll() {
        return reminderRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Reminder> findById(@PathVariable long id) {
        return reminderRepository.findById(id);
    }

    @PostMapping("")
    public Reminder save(@RequestBody Reminder reminder) {
        return reminderRepository.save(reminder);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable long id) {
        reminderRepository.deleteById(id);
    }

}