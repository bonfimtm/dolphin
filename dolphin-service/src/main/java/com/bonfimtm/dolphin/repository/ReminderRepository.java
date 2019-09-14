package com.bonfimtm.dolphin.repository;

import com.bonfimtm.dolphin.domain.Reminder;

import org.springframework.data.repository.CrudRepository;

public interface ReminderRepository extends CrudRepository<Reminder, Long> {
}